// =====================================================
// app.js — comportamento do site
// Depende de config.js e i18n.js (carregados antes)
// =====================================================
const cfg = window.CONFIG || {};

// ---------- Tema ----------
const root = document.documentElement;

function readTheme() {
  try {
    return localStorage.getItem("theme") || "dark";
  } catch {
    return "dark";
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {}
}

root.dataset.theme = readTheme();
document.getElementById("theme").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  saveTheme(next);
});

// ---------- Filtros de projetos ----------
const chips = document.querySelectorAll(".chip");
const projectCards = document.querySelectorAll(".project");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;
    chips.forEach((c) => c.setAttribute("aria-pressed", c === chip));
    projectCards.forEach((card) => {
      card.hidden = !(filter === "todos" || card.dataset.status === filter);
    });
  });
});

// ---------- Links vindos do config.js ----------
const external = ["linkedin", "github", "repo1", "repo2", "repo3"];

function turnOff(el) {
  el.removeAttribute("href");
  el.setAttribute("aria-disabled", "true");
  el.classList.add("is-off");
  el.title = "Ainda não configurado";
  if (el.classList.contains("btn")) el.textContent += " · em breve";
}

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.dataset.link;
  let url = cfg[key];
  if (!url) return turnOff(el);

  if (key === "email") url = "mailto:" + url;
  el.href = url;

  if (external.includes(key)) {
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  }
});

// Se o PDF não existir, os botões do currículo ficam apagados
if (cfg.resume) {
  fetch(cfg.resume, { method: "HEAD" })
    .then((res) => {
      if (!res.ok) throw new Error("PDF não encontrado");
    })
    .catch(() => {
      translateDom("pt"); // volta ao português antes de mexer no texto
      document.querySelectorAll('[data-link="resume"]').forEach((el) => {
        if (!el.classList.contains("is-off")) turnOff(el);
      });
      translateDom(currentLang);
    });
}

// ---------- Números reais da Área do Recrutador ----------
const total = projectCards.length;
const done = document.querySelectorAll('.project[data-status="concluido"]').length;
const courses = document.querySelectorAll(".timeline li").length;

document.getElementById("rec-stats").innerHTML = [
  [total, "projetos em destaque"],
  [done, "concluídos"],
  [total - done, "em desenvolvimento"],
  [courses, "formações e cursos"],
]
  .map(([n, label]) => `<li><strong>${n}</strong><span>${label}</span></li>`)
  .join("");

// ---------- Terminal interativo ----------
const termOut = document.getElementById("term-out");
const termForm = document.getElementById("term-form");
const termIn = document.getElementById("term-in");

const clean = (el) => el.textContent.replace(/\s+/g, " ").trim();

// Cada comando lê a própria página, então já responde no idioma atual
const commands = {
  help: () => t("help_text"),
  about: () => [...document.querySelectorAll("#sobre .prose p")].map(clean).join("\n\n"),
  projects: () =>
    [...document.querySelectorAll(".project")]
      .map((p) => {
        const tags = [...p.querySelectorAll(".tags li")].map(clean).join(", ");
        return `• ${clean(p.querySelector("h3"))} [${clean(p.querySelector(".status"))}]\n  ${tags}`;
      })
      .join("\n"),
  skills: () =>
    [...document.querySelectorAll(".skills .card")]
      .map((c) => `${clean(c.querySelector("h3"))}: ${[...c.querySelectorAll(".checks li")].map(clean).join(", ")}`)
      .join("\n"),
  contact: () =>
    `E-mail:   ${cfg.email || t("não informado")}\nLinkedIn: ${cfg.linkedin || t("não informado")}\nGitHub:   ${cfg.github || t("não informado")}`,
};

function printLine(className, content) {
  const line = document.createElement("div");
  line.className = className;
  line.textContent = content; // textContent não interpreta HTML: é mais seguro
  termOut.appendChild(line);
  termOut.scrollTop = termOut.scrollHeight;
}

function runCommand(raw) {
  const name = raw.trim().toLowerCase();
  if (!name) return;

  if (name === "clear") {
    termOut.innerHTML = "";
    return;
  }

  printLine("term-cmd", "$ " + name);
  printLine(
    "term-res",
    Object.hasOwn(commands, name)
      ? commands[name]()
      : `${t("Comando não encontrado")}: ${name}. ${t("Digite help.")}`
  );
}

termForm.addEventListener("submit", (e) => {
  e.preventDefault();
  runCommand(termIn.value);
  termIn.value = "";
});

document.querySelectorAll("[data-cmd]").forEach((btn) => {
  btn.addEventListener("click", () => {
    runCommand(btn.dataset.cmd);
    termIn.focus();
  });
});

// ---------- Formulário de contato ----------
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

const rules = {
  name: (v) => (v.length >= 2 ? "" : t("Informe seu nome.")),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : t("Informe um e-mail válido.")),
  message: (v) => (v.length >= 10 ? "" : t("Escreva uma mensagem com pelo menos 10 caracteres.")),
};

function clearFormMessages() {
  contactForm.querySelectorAll(".field-error").forEach((p) => (p.textContent = ""));
  contactForm.querySelectorAll("[aria-invalid]").forEach((i) => i.setAttribute("aria-invalid", "false"));
  formStatus.textContent = "";
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  Object.entries(rules).forEach(([field, check]) => {
    const input = contactForm.elements[field];
    const error = check(input.value.trim());
    document.getElementById("err-" + field).textContent = error;
    input.setAttribute("aria-invalid", error ? "true" : "false");
    if (error) valid = false;
  });

  formStatus.textContent = "";
  if (!valid) return;

  if (!cfg.email) {
    formStatus.textContent = t("O e-mail de contato ainda não foi configurado em config.js.");
    return;
  }

  const subject = encodeURIComponent("Contato pelo portfólio — " + contactForm.elements["name"].value.trim());
  const body = encodeURIComponent(
    contactForm.elements["message"].value.trim() +
      "\n\nResponder para: " +
      contactForm.elements["email"].value.trim()
  );
  window.location.href = `mailto:${cfg.email}?subject=${subject}&body=${body}`;
  formStatus.textContent = t("Seu aplicativo de e-mail foi aberto com a mensagem pronta.");
});

// ---------- Idioma ----------
document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang, true));
});

// Ao trocar de idioma, reinicia o terminal e limpa mensagens antigas do formulário
document.addEventListener("langchange", () => {
  termOut.innerHTML = "";
  printLine("term-res", t("Bem-vindo! Digite help para ver os comandos."));
  clearFormMessages();
});

// ---------- Rodapé e início ----------
document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(detectLanguage());
