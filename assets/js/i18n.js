// =====================================================
// i18n.js — traduções (português, espanhol, inglês)
// Cada linha: [texto em português, espanhol, inglês].
// O texto em português precisa ser IGUAL ao que está no index.html.
// =====================================================
const ROWS = [
  // Cabeçalho
  ["Andrey Medeiros — Desenvolvedor de Sistemas", "Andrey Medeiros — Desarrollador de Sistemas", "Andrey Medeiros — Systems Developer"],
  ["Principal", "Principal", "Main"],
  ["Início", "Inicio", "Home"],
  ["Sobre", "Sobre mí", "About"],
  ["Projetos", "Proyectos", "Projects"],
  ["Habilidades", "Habilidades", "Skills"],
  ["Currículo", "Currículum", "Résumé"],
  ["Contato", "Contacto", "Contact"],
  ["Idioma", "Idioma", "Language"],
  ["Alternar tema claro e escuro", "Alternar tema claro y oscuro", "Toggle light and dark theme"],

  // Início
  ["Olá, meu nome é", "Hola, mi nombre es", "Hello, my name is"],
  ["Desenvolvedor de Sistemas", "Desarrollador de Sistemas", "Systems Developer"],
  ["Transformo ideias em soluções digitais. Sou apaixonado por tecnologia, sempre em busca de aprender, evoluir e construir projetos que geram valor.", "Transformo ideas en soluciones digitales. Soy apasionado por la tecnología, siempre en busca de aprender, evolucionar y construir proyectos que generen valor.", "I turn ideas into digital solutions. I'm passionate about technology, always looking to learn, grow and build projects that create value."],
  ["“Código hoje, grandes soluções amanhã.”", "“Código hoy, grandes soluciones mañana.”", "“Code today, great solutions tomorrow.”"],
  ["Conheça meus projetos", "Conoce mis proyectos", "See my projects"],
  ["Acessar currículo", "Ver currículum", "Open résumé"],
  ["Redes profissionais", "Redes profesionales", "Professional links"],
  ["Projetos em destaque", "Proyectos destacados", "Featured projects"],
  ["Formações e cursos", "Formación y cursos", "Education and courses"],
  ["Tecnologias na lista", "Tecnologías en la lista", "Technologies listed"],
  ["'Desenvolvedor de Sistemas'", "'Desarrollador de Sistemas'", "'Systems Developer'"],
  ["'tecnologia'", "'tecnología'", "'technology'"],
  ["'projetos'", "'proyectos'", "'projects'"],
  ["'evolução'", "'evolución'", "'growth'"],
  ["'construir grandes soluções'", "'construir grandes soluciones'", "'build great solutions'"],
  ["'Vamos nessa!'", "'¡Vamos allá!'", "'Let's go!'"],

  // Sobre mim
  ["Quem eu sou", "Quién soy", "Who I am"],
  ["Sobre mim", "Sobre mí", "About me"],
  ["Sou desenvolvedor de sistemas em formação, apaixonado por tecnologia e por tudo que envolve o desenvolvimento web. Estou constantemente aprendendo, criando projetos e buscando novas oportunidades para evoluir na área de TI.", "Soy desarrollador de sistemas en formación, apasionado por la tecnología y por todo lo que involucra el desarrollo web. Estoy aprendiendo constantemente, creando proyectos y buscando nuevas oportunidades para crecer en el área de TI.", "I'm a systems developer in training, passionate about technology and everything involved in web development. I'm constantly learning, building projects and looking for new opportunities to grow in IT."],
  ["Tenho interesse em desenvolvimento de sistemas, lógica de programação, tecnologias modernas e em como a tecnologia pode resolver problemas reais e melhorar a vida das pessoas.", "Me interesan el desarrollo de sistemas, la lógica de programación, las tecnologías modernas y cómo la tecnología puede resolver problemas reales y mejorar la vida de las personas.", "I'm interested in systems development, programming logic, modern technologies and how technology can solve real problems and improve people's lives."],
  ["Estudos", "Estudios", "Education"],
  ["ADS · UMC (2º semestre)", "ADS · UMC (2.º semestre)", "ADS · UMC (2nd semester)"],
  ["Foco", "Enfoque", "Focus"],
  ["Desenvolvimento Full Stack", "Desarrollo Full Stack", "Full Stack Development"],
  ["Objetivo", "Objetivo", "Goal"],
  ["Conquistar minha primeira oportunidade em TI", "Conseguir mi primera oportunidad en TI", "Land my first opportunity in IT"],
  ["Aprender é o primeiro passo para construir o futuro que eu quero.", "Aprender es el primer paso para construir el futuro que quiero.", "Learning is the first step toward building the future I want."],

  // Projetos
  ["Meus projetos", "Mis proyectos", "My projects"],
  ["Projetos desenvolvidos com foco em resolver problemas reais e aplicar meus conhecimentos.", "Proyectos desarrollados con foco en resolver problemas reales y aplicar mis conocimientos.", "Projects built to solve real problems and apply what I've learned."],
  ["Filtrar projetos", "Filtrar proyectos", "Filter projects"],
  ["Todos", "Todos", "All"],
  ["Concluídos", "Concluidos", "Completed"],
  ["Concluído", "Concluido", "Completed"],
  ["Em desenvolvimento", "En desarrollo", "In development"],
  ["Prévia ilustrativa. Substitua por uma captura real do sistema.", "Vista previa ilustrativa. Sustituye por una captura real del sistema.", "Illustrative preview. Replace with a real screenshot of the system."],
  ["Problema que resolve:", "Problema que resuelve:", "Problem it solves:"],
  ["Tecnologias", "Tecnologías", "Technologies"],
  ["Ver demonstração", "Ver demostración", "Live demo"],
  ["Ver código", "Ver código", "View code"],
  ["em breve", "próximamente", "coming soon"],
  ["Ainda não configurado", "Aún no configurado", "Not configured yet"],

  ["Sistema de Gestão Financeira", "Sistema de Gestión Financiera", "Financial Management System"],
  ["Organização e acompanhamento financeiro, com controle de receitas, despesas, categorias e gráficos.", "Organización y seguimiento financiero, con control de ingresos, gastos, categorías y gráficos.", "Financial organization and tracking, with income and expense control, categories and charts."],
  ["saber para onde o dinheiro vai e qual é o saldo real.", "saber adónde va el dinero y cuál es el saldo real.", "knowing where the money goes and what the real balance is."],
  ["Cadastro de receitas e despesas", "Registro de ingresos y gastos", "Income and expense entries"],
  ["Controle de saldo", "Control de saldo", "Balance control"],
  ["Categorias financeiras", "Categorías financieras", "Financial categories"],
  ["Gráficos e indicadores", "Gráficos e indicadores", "Charts and indicators"],
  ["Histórico de movimentações", "Historial de movimientos", "Transaction history"],

  ["Sistema de Agendamento e Gestão", "Sistema de Agendamiento y Gestión", "Scheduling and Management System"],
  ["Agendamento e gerenciamento de serviços, com painel administrativo e indicadores de desempenho.", "Agendamiento y gestión de servicios, con panel administrativo e indicadores de rendimiento.", "Appointment and service management, with an admin dashboard and performance indicators."],
  ["conflitos de horário e falta de visão do desempenho dos serviços.", "conflictos de horario y falta de visión del rendimiento de los servicios.", "time conflicts and no view of how services perform."],
  ["Cadastro e visualização de agendamentos", "Registro y visualización de citas", "Create and view appointments"],
  ["Controle de horários e serviços", "Control de horarios y servicios", "Time slot and service control"],
  ["Painel administrativo", "Panel administrativo", "Admin dashboard"],
  ["Indicadores de desempenho", "Indicadores de rendimiento", "Performance indicators"],
  ["Interface responsiva e acessível", "Interfaz responsiva y accesible", "Responsive, accessible interface"],

  ["Sistema de Gestão de Dados", "Sistema de Gestión de Datos", "Data Management System"],
  ["Organização, consulta e análise de informações, com busca, filtros e painel de indicadores.", "Organización, consulta y análisis de información, con búsqueda, filtros y panel de indicadores.", "Organizing, querying and analyzing information, with search, filters and an indicators dashboard."],
  ["informações espalhadas, difíceis de buscar e validar.", "información dispersa, difícil de buscar y validar.", "scattered information that is hard to search and validate."],
  ["Cadastro, edição, consulta e exclusão", "Alta, edición, consulta y eliminación", "Create, edit, query and delete"],
  ["Busca e filtros", "Búsqueda y filtros", "Search and filters"],
  ["Painel de indicadores", "Panel de indicadores", "Indicators dashboard"],
  ["Validação de formulários", "Validación de formularios", "Form validation"],
  ["Arquitetura para integração com backend", "Arquitectura para integración con backend", "Architecture ready for backend integration"],

  // Habilidades e evolução
  ["Habilidades técnicas", "Habilidades técnicas", "Technical skills"],
  ["Tecnologias que estou aprendendo e colocando em prática nos meus projetos.", "Tecnologías que estoy aprendiendo y poniendo en práctica en mis proyectos.", "Technologies I'm learning and putting into practice in my projects."],
  ["Ferramentas", "Herramientas", "Tools"],
  ["Responsividade", "Diseño responsivo", "Responsive design"],
  ["Lógica de programação", "Lógica de programación", "Programming logic"],
  ["Depuração e resolução de problemas", "Depuración y resolución de problemas", "Debugging and problem solving"],
  ["Em prática", "En práctica", "In practice"],
  ["Em estudo", "En estudio", "Studying"],
  ["Evolução", "Evolución", "Growth"],
  ["Minha jornada de aprendizado e crescimento.", "Mi trayectoria de aprendizaje y crecimiento.", "My learning and growth journey."],
  ["UMC · 2º semestre", "UMC · 2.º semestre", "UMC · 2nd semester"],
  ["Lógica de Programação", "Lógica de Programación", "Programming Logic"],
  ["Banco de Dados", "Bases de Datos", "Databases"],
  ["Curso em Vídeo · em andamento", "Curso em Vídeo · en curso", "Curso em Vídeo · in progress"],
  ["Inglês Básico", "Inglés Básico", "Basic English"],
  ["Em andamento", "En curso", "In progress"],

  // Currículo
  ["Confira meu currículo completo, com informações sobre minha formação, cursos e habilidades.", "Consulta mi currículum completo, con información sobre mi formación, cursos y habilidades.", "See my full résumé, with details about my education, courses and skills."],
  ["Meu currículo", "Mi currículum", "My résumé"],
  ["Baixe ou visualize meu currículo em PDF.", "Descarga o visualiza mi currículum en PDF.", "Download or view my résumé as a PDF."],
  ["Baixar currículo em PDF", "Descargar currículum en PDF", "Download résumé (PDF)"],
  ["Visualizar", "Ver", "View"],

  // Área do Recrutador
  ["Área do Recrutador", "Área del Reclutador", "Recruiter Area"],
  ["Informações rápidas e organizadas para facilitar sua análise.", "Información rápida y organizada para facilitar tu análisis.", "Quick, organized information to make your review easier."],
  ["Apresentação profissional", "Presentación profesional", "Professional introduction"],
  ["Formação acadêmica e cursos", "Formación académica y cursos", "Education and courses"],
  ["Competências técnicas", "Competencias técnicas", "Technical skills"],
  ["Currículo em PDF", "Currículum en PDF", "Résumé (PDF)"],
  ["Resumo em números", "Resumen en números", "Summary in numbers"],
  ["projetos em destaque", "proyectos destacados", "featured projects"],
  ["concluídos", "concluidos", "completed"],
  ["em desenvolvimento", "en desarrollo", "in development"],
  ["formações e cursos", "formación y cursos", "education and courses"],

  // Terminal
  ["Terminal interativo", "Terminal interactivo", "Interactive terminal"],
  ["Digite um comando para conhecer um pouco mais sobre mim.", "Escribe un comando para conocer un poco más sobre mí.", "Type a command to learn a bit more about me."],
  ["Saída do terminal", "Salida del terminal", "Terminal output"],
  ["Digite um comando", "Escribe un comando", "Type a command"],
  ["Comandos prontos", "Comandos listos", "Ready-made commands"],
  ["Bem-vindo! Digite help para ver os comandos.", "¡Bienvenido! Escribe help para ver los comandos.", "Welcome! Type help to see the commands."],
  ["Comando não encontrado", "Comando no encontrado", "Command not found"],
  ["Digite help.", "Escribe help.", "Type help."],
  ["não informado", "no informado", "not provided"],
  [
    "help_text",
    "Comandos disponibles:\n  help      muestra esta ayuda\n  about     sobre mí\n  projects  mis proyectos\n  skills    mis habilidades\n  contact   formas de contacto\n  clear     limpia el terminal",
    "Available commands:\n  help      show this help\n  about     about me\n  projects  my projects\n  skills    my skills\n  contact   ways to reach me\n  clear     clear the terminal",
  ],

  // Contato e formulário
  ["Entre em contato", "Ponte en contacto", "Get in touch"],
  ["Estou aberto a novas oportunidades, conexões e parcerias. Vamos conversar!", "Estoy abierto a nuevas oportunidades, conexiones y colaboraciones. ¡Conversemos!", "I'm open to new opportunities, connections and partnerships. Let's talk!"],
  ["Nome", "Nombre", "Name"],
  ["E-mail", "Correo electrónico", "Email"],
  ["Mensagem", "Mensaje", "Message"],
  ["Seu nome", "Tu nombre", "Your name"],
  ["seu@email.com", "tu@email.com", "you@email.com"],
  ["Digite sua mensagem...", "Escribe tu mensaje...", "Type your message..."],
  ["Enviar mensagem", "Enviar mensaje", "Send message"],
  ["Informe seu nome.", "Escribe tu nombre.", "Enter your name."],
  ["Informe um e-mail válido.", "Escribe un correo válido.", "Enter a valid email."],
  ["Escreva uma mensagem com pelo menos 10 caracteres.", "Escribe un mensaje de al menos 10 caracteres.", "Write a message of at least 10 characters."],
  ["O e-mail de contato ainda não foi configurado em config.js.", "El correo de contacto aún no está configurado en config.js.", "The contact email isn't configured in config.js yet."],
  ["Seu aplicativo de e-mail foi aberto com a mensagem pronta.", "Se abrió tu aplicación de correo con el mensaje listo.", "Your email app opened with the message ready."],

  // Rodapé
  ["Todos os direitos reservados.", "Todos los derechos reservados.", "All rights reserved."],
];

// Textos do JavaScript que não existem no HTML (o português fica aqui)
const PT_TEXT = {
  help_text:
    "Comandos disponíveis:\n  help      mostra esta ajuda\n  about     sobre mim\n  projects  meus projetos\n  skills    minhas habilidades\n  contact   formas de contato\n  clear     limpa o terminal",
};

// ---------- Motor de tradução ----------
const LANGS = ["pt", "es", "en"];
const ATTRS = ["aria-label", "placeholder", "title"];
const DICT = { es: {}, en: {} };
ROWS.forEach(([pt, es, en]) => {
  DICT.es[pt] = es;
  DICT.en[pt] = en;
});

let currentLang = "pt";
let titlePt = "";
const originals = new WeakMap(); // nó de texto -> texto original em português

const norm = (s) => s.replace(/\s+/g, " ").trim();

// Devolve o texto no idioma atual (usado pelo JavaScript)
function t(key, lang = currentLang) {
  if (lang === "pt") return PT_TEXT[key] ?? key;
  return DICT[lang][key] ?? PT_TEXT[key] ?? key;
}

// Traduz uma frase; trata o " · em breve" que o JavaScript acrescenta nos botões
function translatePhrase(phrase, lang) {
  if (DICT[lang][phrase]) return DICT[lang][phrase];
  const suffix = " · em breve";
  if (phrase.endsWith(suffix)) {
    const head = phrase.slice(0, -suffix.length);
    return (DICT[lang][head] || head) + " · " + DICT[lang]["em breve"];
  }
  return null;
}

// Percorre a página inteira e troca os textos pelo idioma escolhido
function translateDom(lang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const parent = node.parentElement;
    if (!parent || parent.closest("script, style, #term-out")) return;
    if (!originals.has(node)) originals.set(node, node.nodeValue);

    const raw = originals.get(node);
    const phrase = norm(raw);
    if (!phrase) return;

    const result = lang === "pt" ? null : translatePhrase(phrase, lang);
    const [, start, , end] = raw.match(/^(\s*)([\s\S]*?)(\s*)$/); // mantém os espaços
    node.nodeValue = result ? start + result + end : raw;
  });

  ATTRS.forEach((attr) => {
    document.querySelectorAll(`[${attr}]`).forEach((el) => {
      const store = "data-pt-" + attr;
      if (!el.hasAttribute(store)) el.setAttribute(store, el.getAttribute(attr));
      const pt = el.getAttribute(store);
      el.setAttribute(attr, lang === "pt" ? pt : DICT[lang][pt] || pt);
    });
  });

  if (!titlePt) titlePt = document.title;
  document.title = lang === "pt" ? titlePt : DICT[lang][titlePt] || titlePt;
  document.documentElement.lang = { pt: "pt-BR", es: "es", en: "en" }[lang];
}

function detectLanguage() {
  let saved = null;
  try {
    saved = localStorage.getItem("lang");
  } catch {}
  if (LANGS.includes(saved)) return saved;
  const browser = (navigator.language || "pt").slice(0, 2);
  return LANGS.includes(browser) ? browser : "pt";
}

// persist = true só quando a pessoa clica numa bandeira
function setLanguage(lang, persist = false) {
  if (!LANGS.includes(lang)) lang = "pt";
  currentLang = lang;
  translateDom(lang);

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  if (persist) {
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }
  document.dispatchEvent(new CustomEvent("langchange"));
}

// Ferramenta para você: no Console (F12), digite untranslated()
// e veja os textos da página que ainda não têm tradução.
function untranslated() {
  const missing = new Set();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest("script, style, #term-out")) continue;
    const phrase = norm(originals.get(node) ?? node.nodeValue);
    if (phrase && /\p{L}{3,}/u.test(phrase) && !translatePhrase(phrase, "es")) missing.add(phrase);
  }
  return [...missing];
}
