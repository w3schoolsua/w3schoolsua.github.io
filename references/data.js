// /references/data.js
// Базова структура джерела:
// {
//   name: "Назва",
//   url: "https://...",
//   status: "Офіційний / Неофіційний / Де-факто стандарт",
//   purpose: "Короткий опис",
//   rating: "⭐⭐⭐⭐⭐",
//   category: "html" | "css" | "js" | "api" | "tools" | "security",
//   tags: ["ключові", "...", "слова"]
// }
const sourcesData = [
    /* ---------------- HTML ---------------- */
    {
        name: "WHATWG HTML Living Standard",
        url: "https://html.spec.whatwg.org/",
        status: "Офіційний стандарт",
        purpose: "Єдиний актуальний стандарт HTML",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["whatwg", "web", "html", "docs", "стандарт", "standard", "документація", "living", "oficial", "джерело"]
    },
    {
        name: "WHATWG GitHub",
        url: "https://github.com/whatwg/html",
        status: "Офіційний стандарт",
        purpose: "Розробка HTML Standard",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["whatwg", "web", "html", "docs", "стандарт", "standard", "документація", "living", "oficial", "джерело", "github"]
    },
    {
        name: "W3C HTML Portal",
        url: "https://www.w3.org/html/",
        status: "Офіційні специфікації",
        purpose: "Портал W3C зі специфікаціями",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["w3c", "web", "html", "docs", "документація", "стандарт", "standard", "офіційна", "приклади", "портал"]
    },
    {
        name: "W3C Web Platform Tests",
        url: "https://wpt.fyi",
        status: "Офіційний ресурс",
        purpose: "Тести відповідності браузерів",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["w3c", "тести", "html", "браузери", "перевірка", "стандарти", "платформа", "безплатний", "офіційний", "mozilla"]
    },
    {
        name: "W3C HTML Wiki",
        url: "https://www.w3.org/html/wiki/Elements",
        status: "Офіційний (архівний)",
        purpose: "Історія HTML, списки елементів",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["w3c", "архів", "html", "історія", "мережа", "стандарти", "інтернет", "вікі", "офіційний", "початок"]
    },
    {
        name: "MDN Web Docs — HTML",
        url: "https://developer.mozilla.org/docs/Web/HTML",
        status: "Де-факто стандарт документації",
        purpose: "Найповніша документація по HTML",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["mdn", "web", "html", "docs", "стандарт", "standard", "документація", "офіційна", "приклади", "навчання"]
    },
    {
        name: "MDN GitHub",
        url: "https://github.com/mdn/content",
        status: "Офіційний репозиторій MDN",
        purpose: "Джерельний код MDN",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["mdn", "web", "html", "docs", "стандарт", "standard", "документація", "офіційна", "приклади", "github"]
    },
    {
        name: "Web.dev (від Google Chrome Team)",
        url: "https://web.dev/learn/html/",
        status: "Навчальний ресурс",
        purpose: "Освітній ресурс від розробників браузера Chrome",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["web", "підручник", "html", "для початківців", "google", "chrome", "уроки", "безплатні", "приклади", "навчання"]
    },
    {
        name: "DevDocs",
        url: "https://devdocs.io/html/",
        status: "Неофіційний ресурс",
        purpose: "Агрегатор MDN, офлайн режим",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["devdocs", "документація", "html", "для початківців", "mdn", "агрегатор", "уроки", "безплатний", "офлайн", "навчання"]
    },
    {
        name: "W3Schools.com — HTML",
        url: "https://w3schools.com/html/",
        status: "Навчальний ресурс",
        purpose: "Приклади та пояснення HTML",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["w3schools", "підручник", "html", "для початківців", "оригінал", "web", "уроки", "безплатні", "приклади", "рішення"]
    },
    {
        name: "W3SchoolsUA — HTML",
        url: "https://w3schoolsua.github.io/html/index.html",
        status: "Навчальний ресурс українською",
        purpose: "Приклади та пояснення HTML",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["w3schools", "підручник", "html", "для початківців", "українською", "web", "уроки", "безплатні", "приклади", "задачі"]
    },
    {
        name: "itProger — Уроки HTML5",
        url: "https://itproger.com/ua/course/html",
        status: "Навчальний курс HTML українською",
        purpose: "Онлайн-школа та IT-спільнота. Автор уроків - Гоша Дударь",
        rating: "⭐⭐⭐⭐",
        category: "html",
        tags: ["itproger", "підручник", "html", "для початківців", "гоша", "дударь", "уроки", "безплатні", "ua", "навчання"]
    },
    {
        name: "HTML-CSS.co.ua — Довідник HTML/CSS",
        url: "https://html-css.co.ua/",
        status: "Довідник",
        purpose: "HTML і CSS довідник українською мовою",
        rating: "⭐⭐⭐⭐",
        category: "html",
        tags: ["довідник", "стандарти", "html", "для початківців", "css", "онлайн", "online", "безплатні", "ua", "українською"]
    },
    {
        name: "CSS.in.ua — Довідник HTML/CSS/JS",
        url: "https://css.in.ua/",
        status: "Довідник",
        purpose: "HTML/CSS/JS довідник українською мовою",
        rating: "⭐⭐⭐⭐",
        category: "html",
        tags: ["довідник", "стандарти", "html", "для початківців", "css", "онлайн", "online", "безплатні", "ua", "українською"]
    },
    {
        name: "GoIt.global — Довідник HTML/CSS",
        url: "https://goit.global/ua/glossary/html/html-hypertext-markup-language/",
        status: "Довідник",
        purpose: "HTML/CSS довідник українською мовою",
        rating: "⭐⭐⭐⭐",
        category: "html",
        tags: ["довідник", "стандарти", "html", "для початківців", "css", "онлайн", "online", "безплатні", "ua", "українською"]
    },
    {
        name: "Dystosvita.org.ua — Курс HTML",
        url: "https://dystosvita.org.ua/course/section.php?id=124",
        status: "Курс дистанційного навчання",
        purpose: "Практичні курси HTML українською мовою",
        rating: "⭐⭐⭐⭐",
        category: "html",
        tags: ["дистанційна", "освіта", "html", "для початківців", "навчання", "онлайн", "online", "безплатні", "ua", "українською"]
    },
    {
        name: "HTML конструювання - Уроки HTML",
        url: "https://htmlbook.in.ua/",
        status: "Уроки з HTML з прикладами",
        purpose: "Практичні курси HTML українською мовою",
        rating: "⭐⭐⭐⭐",
        category: "html",
        tags: ["уроки", "конструктор", "html", "для початківців", "навчання", "онлайн", "online", "безплатні", "ua", "українською"]
    },
    {
        name: "W3C HTML Validator",
        url: "https://validator.w3.org/",
        status: "Офіційний валідатор",
        purpose: "Перевірка валідності HTML",
        rating: "⭐⭐⭐⭐",
        category: "html",
        tags: ["w3c", "валідатор", "html", "validator", "standard", "web", "стандарти", "розмітка", "перевірка", "теги"]
    },
    {
        name: "GeeksForGeeks — HTML/CSS/JS",
        url: "https://www.geeksforgeeks.org/javascript/learn-web-development-basics-with-html-css-and-javascript/",
        status: "Навчальний ресурс",
        purpose: "Розширені уроки HTML/CSS/JS",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["html", "css", "javascript", "learning"]
    },
    {
        name: "Вікіпедія (укр) — HTML",
        url: "https://uk.wikipedia.org/wiki/HTML",
        status: "Україномовний ресурс",
        purpose: "Огляд HTML українською",
        rating: "⭐⭐⭐⭐",
        category: "html",
        tags: ["html", "ukrainian", "encyclopedia", "wiki"]
    },
    /* ---------------- CSS ---------------- */
    {
        name: "MDN Web Docs — CSS",
        url: "https://developer.mozilla.org/docs/Web/CSS",
        status: "Де-факто стандарт документації",
        purpose: "Докладна документація по CSS",
        rating: "⭐⭐⭐⭐⭐",
        category: "css",
        tags: ["mdn", "docs", "css", "spec", "standard", "web", "стандарти", "style", "oficial", "стилі"]
    },
    {
        name: "W3C CSS Specifications",
        url: "https://www.w3.org/Style/CSS",
        status: "Офіційний сайт",
        purpose: "Офіційні специфікації CSS",
        rating: "⭐⭐⭐⭐",
        category: "css",
        tags: ["w3c", "docs", "css", "spec", "standard", "code", "стандарти", "style", "oficial", "стилі"]
    },
    {
        name: "W3Schools.com — CSS Tutorial",
        url: "https://www.w3schools.com/css/",
        status: "Навчальний ресурс",
        purpose: "Просте навчання CSS",
        rating: "⭐⭐⭐⭐",
        category: "css",
        tags: ["css", "w3schools", "tutorial", "learning"]
    },
    {
        name: "W3SchoolsUA — CSS Підручник",
        url: "https://w3schoolsua.github.io/css/index.html",
        status: "Навчальний ресурс",
        purpose: "Уроки по CSS для початківців українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "css",
        tags: ["w3schools", "css", "сайт", "уроки", "підручник", "ua", "для початківців", "українською", "tutorial", "стилі"]
    },
    {
        name: "Can I Use — CSS",
        url: "https://caniuse.com/css",
        status: "Авторитетний",
        purpose: "Підтримка CSS‑функцій у браузерах",
        rating: "⭐⭐⭐⭐⭐",
        category: "css",
        tags: ["can", "use", "css", "перевірка", "можливості", "браузера", "стандарти", "підтримка", "функції", "стилі"]
    },
    {
        name: "W3C CSS Validator",
        url: "https://jigsaw.w3.org/css-validator/",
        status: "Офіційний валідатор",
        purpose: "Перевірка валідності CSS",
        rating: "⭐⭐⭐⭐",
        category: "css",
        tags: ["w3c", "css", "validator", "перевірка", "валідність", "каскадні", "таблиці", "стилі", "помилки", "офіційний"]
    },
    {
        name: "Вікіпедія (укр) — CSS",
        url: "https://uk.wikipedia.org/wiki/CSS",
        status: "Україномовний ресурс",
        purpose: "Огляд CSS українською",
        rating: "⭐⭐⭐⭐",
        category: "css",
        tags: ["css", "ukrainian", "encyclopedia", "вікіпедія"]
    },
    /* ---------------- JavaScript ---------------- */
    {
        name: "ECMAScript Language Specification (ECMA‑262)",
        url: "https://tc39.es/ecma262/",
        status: "Офіційний стандарт",
        purpose: "Головне першоджерело JavaScript — синтаксис, алгоритми, поведінка мови",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["ecma", "script", "lang", "specification", "oficial", "javascript", "js", "офіційні", "ecmascript", "standard", "офіційно", "tc39", "spec", "es"]
    },
    {
        name: "TC39 Proposals",
        url: "https://github.com/tc39/proposals",
        status: "Офіційні пропозиції",
        purpose: "Майбутні можливості JavaScript, стадії розробки, робочі документи",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["TC39", "proposals", "пропозиції", "esnext", "нові", "можливості", "javascript", "github", "js", "офіційні", "майбутні-фічі"]
    },
    {
        name: "ECMAScript® Internationalization API Specification",
        url: "https://tc39.es/ecma402/",
        status: "Офіційний стандарт",
        purpose: "Офіційний стандарт для роботи з локалізацією, форматуванням дат, чисел, валют тощо",
        rating: "⭐⭐⭐⭐",
        category: "js",
        tags: ["TC39", "internationalization", "api", "ecma", "стандарти", "javascript", "локалізація", "js", "офіційні"]
    },
    {
        name: "MDN Web Docs — JavaScript",
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
        status: "Авторитетна документація",
        purpose: "Докладна документація по JS, приклади, пояснення",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["mdn", "script", "mozilla", "lang", "specification", "docs", "javascript", "документація", "js", "офіційна", "гайди"]
    },
    {
        name: "MDN JavaScript Guide",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        status: "Для систематизації знань по JavaScript",
        purpose: "Покроковий гайд від основ до просунутих тем",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["mdn", "javascript", "guide", "developer", "learning", "підручник", "навчання", "js", "уроки", "для початківців"]
    },
    {
        name: "DevDocs — JavaScript Reference",
        url: "https://devdocs.io/javascript/",
        status: "Навчальний ресурс",
        purpose: "Зручний офлайн‑орієнтований довідник, який агрегує документацію MDN",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["devdocs", "агрегатор", "документація", "довідка", "довідник", "навчання", "приклади", "js", "tutorial", "javascript"]
    },
    {
        name: "Node.js Documentation",
        url: "https://nodejs.org/en/docs",
        status: "Офіційна документація",
        purpose: "Офіційна документація середовища виконання JavaScript поза браузером",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["javascript", "js", "nodejs", "офіційна", "документація", "середовище", "розробка", "навчання", "додатки", "сервер"]
    },
    {
        name: "npm — Node Package Manager",
        url: "https://www.npmjs.com/",
        status: "Офіційний менеджер пакетів",
        purpose: "Найбільша екосистема JavaScript‑пакетів",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["js", "npm", "packages", "node", "tools", "javascript", "інструменти"]
    },
    {
        name: "Webpack — Official Documentation",
        url: "https://webpack.js.org/",
        status: "Офіційна документація",
        purpose: "Бандлер для фронтенд‑проєктів",
        rating: "⭐⭐⭐⭐",
        category: "js",
        tags: ["webpack", "bundler", "frontend", "tools"]
    },
    {
        name: "Vite — Official Documentation",
        url: "https://vitejs.dev/",
        status: "Офіційна документація",
        purpose: "Надшвидкий дев‑сервер і бандлер нового покоління",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["vite", "bundler", "frontend", "tools"]
    },
    {
        name: "JavaScript.info - The Modern JavaScript Tutorial",
        url: "https://javascript.info/js",
        status: "Навчальний ресурс",
        purpose: "Сучасний підручник по JavaScript",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["javascript", "js", "сучасний", "підручник", "для початківців", "уроки", "learning", "навчання", "приклади", "tutorial"]
    },
    {
        name: "uk.JavaScript.info - Сучасний підручник по JavaScript",
        url: "https://uk.javascript.info/js",
        status: "Навчальний ресурс",
        purpose: "Сучасний підручник по JavaScript українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["javascript", "js", "сучасний", "підручник", "для початківців", "уроки", "ua", "навчання", "приклади", "українською"]
    },
    {
        name: "W3Schools.com — JavaScript",
        url: "https://w3schools.com/js/",
        status: "Навчальний ресурс",
        purpose: "Уроки, приклади та пояснення JavaScript",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["w3schools", "оригінал", "для початківців", "уроки", "підручник", "навчання", "приклади", "js", "tutorial", "javascript"]
    },
    {
        name: "W3Schools — JavaScript DOM Reference",
        url: "https://www.w3schools.com/jsref/default.asp",
        status: "Довідник",
        purpose: "Повний довідник DOM API",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["javascript", "w3schools", "dom", "reference", "довідник"]
    },
    {
        name: "W3SchoolsUA — JavaScript",
        url: "https://w3schoolsua.github.io/js/index.html",
        status: "Навчальний ресурс",
        purpose: "Уроки, приклади та пояснення JavaScript українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["w3schools", "українською", "для початківців", "уроки", "підручник", "навчання", "приклади", "ua", "tutorial", "javascript"]
    },
    {
        name: "Frontend Masters",
        url: "https://frontendmasters.com/",
        status: "Професійні курси",
        purpose: "Глибокі курси від експертів індустрії",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["js", "frontend", "courses", "javascript", "css", "react", "курси"]
    },
    {
        name: "«Eloquent JavaScript» (Marijn Haverbeke)",
        url: "https://eloquentjavascript.net/",
        status: "Онлайн-книга",
        purpose: "Хороший вступ в JavaScript з практичними прикладами й вправами",
        rating: "⭐⭐⭐⭐",
        category: "js",
        tags: ["javascript", "js", "книга", "підручник", "онлайн", "Marijn Haverbeke", "для початківців", "навчання", "приклади", "вправи"]
    },
    {
        name: "Codecademy — JavaScript",
        url: "https://www.codecademy.com/learn/introduction-to-javascript",
        status: "Онлайн-курси",
        purpose: "JavaScript курси з інтерактивними вправами та зворотнім зв’язком",
        rating: "⭐⭐⭐⭐",
        category: "js",
        tags: ["javascript", "js", "курси", "підручник", "онлайн", "codecademy", "для початківців", "навчання", "приклади", "вправи"]
    },
    {
        name: "freeCodeCamp — Frontend Curriculum",
        url: "https://www.freecodecamp.org/learn/",
        status: "Безкоштовна програма",
        purpose: "Практичні завдання, сертифікації, проєкти",
        rating: "⭐⭐⭐⭐",
        category: "js",
        tags: ["js", "frontend", "free", "practice", "projects", "навчання"]
    },
    {
        name: "Вікіпедія (укр) — JavaScript",
        url: "https://uk.wikipedia.org/wiki/JavaScript",
        status: "Україномовний ресурс",
        purpose: "Огляд JavaScript українською",
        rating: "⭐⭐⭐⭐",
        category: "js",
        tags: ["javascript", "ukrainian", "encyclopedia", "wiki"]
    },
    /* ---------------- SQL ---------------- */
    {
        name: "LearnSQL.com — Офіційний сайт",
        url: "https://learnsql.com/",
        category: "sql",
        status: "Офіційний сайт",
        purpose: "Повний підручник по SQL",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["sql", "docs", "official", "підручник", "скл", "документація", "офіційний", "уроки"]
    },
    {
        name: "SQLZoo",
        url: "https://sqlzoo.net/wiki/SQL_Tutorial",
        category: "sql",
        status: "Навчальний ресурс",
        purpose: "Інтерактивна серія уроків і вправ на SQL",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["sql", "sqlzoo", "підручник", "мова", "навчання", "уроки", "для початківців", "english", "wiki"]
    },
    {
        name: "Codecademy – Learn SQL",
        url: "https://www.codecademy.com/learn/learn-sql",
        category: "sql",
        status: "Навчальний ресурс",
        purpose: "Інтерактивний курс SQL з практичними вправами",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["sql", "codecademy", "підручник", "мова", "навчання", "уроки", "для початківців", "курс", "інтерактивний", "онлайн"]
    },
    {
        name: "Khan Academy – Intro to SQL",
        url: "https://www.khanacademy.org/computing/computer-programming/sql",
        category: "sql",
        status: "Навчальний ресурс",
        purpose: "Відео-курс з SQL із інтерактивними вправами для початківців",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["sql", "khan", "підручник", "мова", "навчання", "уроки", "для початківців", "курс", "інтерактивний", "відео"]
    },
    {
        name: "Microsoft Learn – SQL Documentation",
        url: "https://learn.microsoft.com/en-us/sql/",
        category: "sql",
        status: "Офіційний ресурс",
        purpose: "Офіційна технічна документація Microsoft для SQL Server і Transact-SQL",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["sql", "microsoft", "офіційний", "сайт", "технічна", "документація", "сервер", "server", "documentation", "azure"]
    },
    {
        name: "Oracle SQL Docs & Tutorials",
        url: "https://www.oracle.com/database/technologies/appdev/sql.html",
        category: "sql",
        status: "Офіційний ресурс",
        purpose: "Офіційний ресурс Oracle з документацією, прикладами і тестами для SQL",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["sql", "oracle", "офіційний", "сайт", "docs", "документація", "сервер", "server", "documentation", "tutorials"]
    },
    {
        name: "Coursera – SQL Courses",
        url: "https://www.coursera.org/courses?query=sql",
        category: "sql",
        status: "Навчальний ресурс",
        purpose: "Колекція онлайн-курсів від університетів та компаній",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["sql", "coursera", "courses", "навчання", "уроки", "університети", "компанії", "курси", "сертифікати", "tutorials"]
    },
    {
        name: "Dataquest SQL Guide",
        url: "https://www.dataquest.io/guide/sql-tutorial/",
        category: "sql",
        status: "Навчальний ресурс",
        purpose: "Збірка навчальних посібників, практичних завдань, шпаргалок по SQL",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["sql", "dataquest", "courses", "навчання", "уроки", "посібники", "підручники", "курси", "практика", "tutorials"]
    },
    {
        name: "W3Schools SQL Tutorial",
        url: "https://www.w3schools.com/sql/",
        category: "sql",
        status: "Навчальний ресурс",
        purpose: "Уроки, приклади, довідники",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["sql", "tutorials", "lessons", "w3schools", "підручник", "мова", "навчання", "уроки"]
    },
    {
        name: "W3SchoolsUA — SQL Підручник",
        url: "https://w3schoolsua.github.io/sql/index.html",
        category: "sql",
        status: "Навчальний ресурс",
        purpose: "Уроки по SQL для початківців українською",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["sql", "w3schools", "підручник", "мова", "навчання", "уроки", "для початківців", "українською", "github", "ua"]
    },
    /* ---------------- SQL (розширений) ---------------- */

        /* ОФІЦІЙНІ СПЕЦИФІКАЦІЇ І СТАНДАРТИ */
    {
        name: "ISO/IEC 9075 SQL Standard (Official overview)",
        url: "https://www.iso.org/standard/76583.html",
        status: "Офіційний стандарт",
        purpose: "Міжнародний стандарт SQL: формальні визначення мови та поведінки",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "iso", "standard", "official", "specification", "стандарт"]
    },
    {
        name: "SQL:2016 — JSON, temporal, polymorphic tables (overview)",
        url: "https://www.iso.org/committee/45342.html",
        status: "Офіційний стандарт",
        purpose: "Огляд актуальних частин стандарту SQL:2016",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "iso", "standard", "json", "temporal"]
    },
    /* ОФІЦІЙНІ ДОВІДНИКИ ПО СУБД */
    {
        name: "PostgreSQL Documentation",
        url: "https://www.postgresql.org/docs/",
        status: "Офіційна документація",
        purpose: "Повна документація PostgreSQL: SQL‑синтаксис, типи, індекси, оптимізація",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "postgresql", "docs", "relational", "open source", "довідники", "документація"]
    },
    {
        name: "MySQL 8.4 Reference Manual",
        url: "https://dev.mysql.com/doc/",
        status: "Офіційна документація",
        purpose: "Офіційний довідник MySQL: SQL‑синтаксис, реплікація, інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "mysql", "docs", "reference", "oracle"]
    },
    {
        name: "SQLite Documentation",
        url: "https://www.sqlite.org/docs.html",
        status: "Офіційна документація",
        purpose: "Документація SQLite: SQL‑діалект, транзакції, файловий формат",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "sqlite", "embedded", "docs"]
    },
    {
        name: "Microsoft SQL Server Documentation",
        url: "https://learn.microsoft.com/en-us/sql/",
        status: "Офіційна документація",
        purpose: "Документація SQL Server та Azure SQL: T‑SQL, адміністрування, інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "mssql", "t-sql", "microsoft", "azure", "docs"]
    },
    {
        name: "Oracle Database SQL Language Reference",
        url: "https://docs.oracle.com/en/database/",
        status: "Офіційна документація",
        purpose: "SQL‑довідник Oracle: синтаксис, PL/SQL інтеграція, оптимізація",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "oracle", "plsql", "docs", "enterprise"]
    },
    {
        name: "MariaDB Knowledge Base",
        url: "https://mariadb.com/kb/en/",
        status: "Офіційна документація",
        purpose: "Документація MariaDB: SQL, рушії зберігання, інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "mariadb", "docs", "open source"]
    },
    {
        name: "IBM Db2 Documentation",
        url: "https://www.ibm.com/docs/en/db2",
        status: "Офіційна документація",
        purpose: "Документація IBM Db2: SQL, оптимізатор, високі навантаження",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "db2", "ibm", "docs", "enterprise"]
    },
    /* ПРАКТИЧНІ ОФІЦІЙНІ ГАЙДИ І РЕСУРСИ */
    {
        name: "PostgreSQL Wiki — SQL Best Practices",
        url: "https://wiki.postgresql.org/",
        status: "Авторитетний ресурс",
        purpose: "Практики, поради, налаштування та продуктивність SQL у PostgreSQL",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "postgresql", "best practices", "wiki"]
    },
    {
        name: "SQL Style Guide (Simon Holywell)",
        url: "https://www.sqlstyle.guide/",
        status: "Авторитетний гайд",
        purpose: "Стиль та найкращі практики написання SQL запитів",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "style", "guide", "best practices"]
    },
    {
        name: "Mode Analytics — SQL Tutorial",
        url: "https://mode.com/sql-tutorial/",
        status: "Авторитетний навчальний ресурс",
        purpose: "Практичний курс SQL з акцентом на аналітику і реальні кейси",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "analytics", "tutorial", "learning"]
    },
    {
        name: "SQLZoo",
        url: "https://sqlzoo.net/",
        status: "Авторитетний навчальний ресурс",
        purpose: "Інтерактивні вправи SQL з живими базами даних",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "interactive", "tutorials", "practice"]
    },
    {
        name: "SQLBolt",
        url: "https://sqlbolt.com/",
        status: "Популярний навчальний ресурс",
        purpose: "Серія інтерактивних уроків і вправ по SQL",
        rating: "⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "interactive", "learning", "tutorials"]
    },
    {
        name: "W3Schools — SQL Tutorial",
        url: "https://www.w3schools.com/sql/",
        status: "Навчальний ресурс",
        purpose: "Доступний вступ до SQL: SELECT, JOIN, агрегації, підзапити",
        rating: "⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "tutorial", "beginner", "learning"]
    },
    /* ДОДАТКОВО: РОЗШИРЕНІ МОЖЛИВОСТІ ТА ІНСТРУМЕНТИ */
    {
        name: "PostgreSQL — Advanced Features",
        url: "https://www.postgresql.org/docs/current/advanced-features.html",
        status: "Офіційна документація",
        purpose: "Розширені можливості: CTE, віконні функції, JSON/JSONB, партиціонування",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "postgresql", "advanced", "docs", "json", "window functions"]
    },
    {
        name: "SQL Server — Transact‑SQL (T‑SQL) Reference",
        url: "https://learn.microsoft.com/en-us/sql/t-sql/language-reference",
        status: "Офіційна документація",
        purpose: "Повний довідник T‑SQL: синтаксис, вбудовані функції, керування даними",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "t-sql", "microsoft", "reference", "docs"]
    },
    {
        name: "Oracle — SQL Language Reference",
        url: "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/index.html",
        status: "Офіційна документація",
        purpose: "Розширений SQL у Oracle: аналітичні функції, індекси, партиції",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "oracle", "analytic functions", "docs"]
    },
    {
        name: "SQLite — SQL Syntax",
        url: "https://www.sqlite.org/lang.html",
        status: "Офіційна документація",
        purpose: "Повний опис SQL‑діалекту SQLite",
        rating: "⭐⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "sqlite", "syntax", "docs"]
    },
    {
        name: "Вікіпедія (укр) — SQL",
        url: "https://uk.wikipedia.org/wiki/SQL",
        status: "Україномовний ресурс",
        purpose: "Огляд мови SQL українською: історія, стандарт, базові конструкції",
        rating: "⭐⭐⭐⭐",
        category: "sql",
        tags: ["sql", "ukrainian", "encyclopedia", "overview", "verified", "wiki", "вікіпедія", "українською"]
    },
    /* ---------------- PHP ---------------- */
    {
        name: "PHP Manual (Official)",
        url: "https://www.php.net/manual/en/",
        status: "Офіційна документація",
        purpose: "Повний офіційний довідник PHP, функції, приклади, конфігурація",
        rating: "⭐⭐⭐⭐⭐",
        category: "php",
        tags: ["php", "manual", "official", "docs", "reference", "core", "functions", "офіційна", "документація"]
    },
    {
        name: "PHP.net — Official Website",
        url: "https://www.php.net/",
        status: "Офіційний сайт",
        purpose: "Головний портал PHP: новини, релізи, документація, завантаження",
        rating: "⭐⭐⭐⭐⭐",
        category: "php",
        tags: ["php", "official", "homepage", "releases", "downloads", "офіційний", "сайт"]
    },
    {
        name: "PHP: The Right Way",
        url: "https://phptherightway.com/",
        status: "Авторитетний гайд",
        purpose: "Сучасні найкращі практики PHP, стандарти, рекомендації",
        rating: "⭐⭐⭐⭐⭐",
        category: "php",
        tags: ["php", "best practices", "guide", "modern", "standards", "psr", "сучасні", "практика", "стандарт"]
    },
    {
        name: "Composer — PHP Dependency Manager",
        url: "https://getcomposer.org/",
        status: "Офіційний інструмент",
        purpose: "Менеджер пакетів PHP, стандарт де-факто для сучасних проєктів",
        rating: "⭐⭐⭐⭐⭐",
        category: "php",
        tags: ["php", "composer", "packages", "dependencies", "tools", "стандарт", "менеджер", "пакетів"]
    },
    {
        name: "Packagist — PHP Package Repository",
        url: "https://packagist.org/",
        status: "Офіційний репозиторій",
        purpose: "Головний репозиторій пакетів для Composer",
        rating: "⭐⭐⭐⭐⭐",
        category: "php",
        tags: ["php", "composer", "packagist", "packages", "repository", "репозиторій", "пакети"]
    },
    {
        name: "Laravel Documentation",
        url: "https://laravel.com/docs",
        status: "Офіційна документація",
        purpose: "Найпопулярніший PHP‑фреймворк, сучасний та зручний",
        rating: "⭐⭐⭐⭐⭐",
        category: "php",
        tags: ["php", "laravel", "framework", "docs", "mvc", "modern", "документація", "фреймворк"]
    },
    {
        name: "Symfony Documentation",
        url: "https://symfony.com/doc/current/index.html",
        status: "Офіційна документація",
        purpose: "Потужний корпоративний PHP‑фреймворк",
        rating: "⭐⭐⭐⭐⭐",
        category: "php",
        tags: ["php", "symfony", "framework", "enterprise", "docs", "фреймворк", "документація"]
    },
    {
        name: "PHP-FIG (PSR Standards)",
        url: "https://www.php-fig.org/psr/",
        status: "Офіційні стандарти",
        purpose: "PSR‑стандарти для PHP: автозавантаження, логування, кешування",
        rating: "⭐⭐⭐⭐⭐",
        category: "php",
        tags: ["php", "psr", "standards", "php-fig", "best practices", "стандарти"]
    },
    {
        name: "W3Schools PHP Tutorial",
        url: "https://www.w3schools.com/php/",
        status: "Навчальний ресурс",
        purpose: "Просте та доступне навчання PHP для початківців",
        rating: "⭐⭐⭐⭐",
        category: "php",
        tags: ["php", "tutorial", "learning", "beginner", "examples", "навчання", "уроки", "підручник"]
    },
    {
        name: "W3SchoolsUA — PHP",
        url: "https://w3schoolsua.github.io/php/index.html",
        status: "Навчальний ресурс",
        purpose: "Навчання PHP для початківців українською мовою",
        rating: "⭐⭐⭐⭐⭐",
        category: "php",
        tags: ["php", "tutorial", "learning", "beginner", "examples", "навчання", "уроки", "підручник", "ua", "українською"]
    },
    {
        name: "MDN — Server-side Programming (PHP Section)",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/PHP",
        status: "Авторитетний навчальний ресурс",
        purpose: "Базове навчання PHP від Mozilla Developer Network",
        rating: "⭐⭐⭐⭐",
        category: "php",
        tags: ["php", "mdn", "learning", "server-side", "tutorial", "підручник", "навчання"]
    },
    /* ---------------- Python ---------------- */
    {
        name: "Python.org — Documentation",
        url: "https://docs.python.org/3/",
        category: "python",
        status: "Офіційна документація",
        purpose: "Повний довідник Python",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["python", "docs", "official", "питон", "пайтон", "документація", "офіційний"]
    },
    {
        name: "Real Python",
        url: "https://realpython.com/",
        category: "python",
        status: "Навчальний ресурс",
        purpose: "Статті, уроки, приклади",
        rating: "⭐⭐⭐⭐",
        tags: ["python", "tutorials", "real", "реал", "пайтон", "питон", "навчання", "уроки"]
    },
    {
        name: "W3SchoolsUA — Python",
        url: "https://w3schoolsua.github.io/python/index.html",
        category: "python",
        status: "Навчальний ресурс",
        purpose: "Уроки, приклади, пояснення",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["python", "tutorials", "w3schools", "підручник", "пайтон", "питон", "навчання", "уроки", "ua", "для початківців"]
    },
    {
        name: "W3Schools.com — Python",
        url: "https://w3schools.com/python/",
        category: "python",
        status: "Навчальний ресурс",
        purpose: "Уроки, приклади, пояснення",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["python", "tutorials", "w3schools", "підручник", "пайтон", "питон", "навчання", "уроки", "en", "для початківців"]
    },
    /* ---------------- JAVA ---------------- */
    {
        name: "Oracle Java Documentation (Official)",
        url: "https://docs.oracle.com/en/java/",
        status: "Офіційна документація",
        purpose: "Повний офіційний довідник Java SE, API, гіди, приклади",
        rating: "⭐⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "oracle", "official", "docs", "reference", "jdk", "api"]
    },
    {
        name: "Java SE Documentation — Oracle",
        url: "https://www.oracle.com/java/technologies/javase-documentation.html",
        status: "Офіційна документація",
        purpose: "Технічні документи Java SE, релізи, API, JavaFX",
        rating: "⭐⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "oracle", "javase", "docs", "technical", "javafx"]
    },
    {
        name: "Dev.java — Official Java Portal",
        url: "https://dev.java/",
        status: "Офіційний портал",
        purpose: "Центральний портал Java: новини, гайди, відео, навчання",
        rating: "⭐⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "official", "community", "tutorials", "news"]
    },
    {
        name: "Dev.java — Learn Java",
        url: "https://dev.java/learn/",
        status: "Офіційний навчальний ресурс",
        purpose: "Офіційні навчальні матеріали Java: основи, OOP, інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "learn", "tutorial", "official", "beginner", "oop"]
    },
    {
        name: "OpenJDK — Official Source",
        url: "https://openjdk.org/",
        status: "Офіційний проєкт",
        purpose: "Відкрите ядро Java, JDK, специфікації, JEP, розробка мови",
        rating: "⭐⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "openjdk", "jdk", "specs", "jep", "language"]
    },
    {
        name: "Java Language Specification (JLS)",
        url: "https://docs.oracle.com/javase/specs/",
        status: "Офіційний стандарт",
        purpose: "Формальна специфікація мови Java",
        rating: "⭐⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "specification", "jls", "standard", "language"]
    },
    {
        name: "Java Tutorials (Legacy, Oracle)",
        url: "https://docs.oracle.com/javase/tutorial/",
        status: "Офіційний навчальний ресурс",
        purpose: "Класичні офіційні туторіали Oracle для Java",
        rating: "⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "tutorials", "oracle", "learning", "legacy"]
    },
    {
        name: "Spring Framework Documentation",
        url: "https://spring.io/docs",
        status: "Офіційна документація",
        purpose: "Найпопулярніший Java‑фреймворк для backend‑розробки",
        rating: "⭐⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "spring", "framework", "backend", "docs"]
    },
    {
        name: "Spring Boot Documentation",
        url: "https://docs.spring.io/spring-boot/docs/current/reference/html/",
        status: "Офіційна документація",
        purpose: "Документація Spring Boot — стандарт де‑факто для Java backend",
        rating: "⭐⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "spring boot", "backend", "docs", "microservices"]
    },
    {
        name: "Maven — Official Documentation",
        url: "https://maven.apache.org/guides/",
        status: "Офіційна документація",
        purpose: "Стандартний інструмент для збірки Java‑проєктів",
        rating: "⭐⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "maven", "build", "tools", "apache"]
    },
    {
        name: "Gradle — Official Documentation",
        url: "https://docs.gradle.org/current/userguide/userguide.html",
        status: "Офіційна документація",
        purpose: "Сучасний інструмент збірки Java‑проєктів",
        rating: "⭐⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "gradle", "build", "automation", "tools"]
    },
    {
        name: "JUnit 5 Documentation",
        url: "https://junit.org/junit5/docs/current/user-guide/",
        status: "Офіційна документація",
        purpose: "Стандарт для тестування Java‑додатків",
        rating: "⭐⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "junit", "testing", "unit tests", "docs"]
    },
    {
        name: "JetBrains IntelliJ IDEA Guide",
        url: "https://www.jetbrains.com/idea/guide/",
        status: "Авторитетний ресурс",
        purpose: "Офіційні гайди для найпопулярнішої IDE Java",
        rating: "⭐⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "intellij", "jetbrains", "ide", "guide"]
    },
    {
        name: "Baeldung — Java Tutorials",
        url: "https://www.baeldung.com/",
        status: "Авторитетний навчальний ресурс",
        purpose: "Глибокі статті по Java, Spring, Hibernate",
        rating: "⭐⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "spring", "hibernate", "tutorials", "articles"]
    },
    {
        name: "GeeksForGeeks — Java",
        url: "https://www.geeksforgeeks.org/java/",
        status: "Навчальний ресурс",
        purpose: "Велика база статей та прикладів по Java",
        rating: "⭐⭐⭐⭐",
        category: "java",
        tags: ["java", "tutorials", "examples", "learning"]
    },
    /* ---------------- KOTLIN ---------------- */
    {
        name: "Kotlin Documentation (Official)",
        url: "https://kotlinlang.org/docs/home.html",
        status: "Офіційна документація",
        purpose: "Повний офіційний довідник Kotlin: синтаксис, гіди, Multiplatform, Compose",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "official", "docs", "jetbrains", "reference", "language", "офіційна", "документація"]
    },
    {
        name: "Kotlin Learning Materials (Official)",
        url: "https://kotlinlang.org/docs/learning-materials-overview.html",
        status: "Офіційний навчальний ресурс",
        purpose: "Огляд навчальних матеріалів: синтаксис, ідіоми, Koans, міграція з Java",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "learning", "koans", "idioms", "tutorials", "official", "офіційне", "навчання", "уроки"]
    },
    {
        name: "Kotlin Koans",
        url: "https://kotlinlang.org/docs/koans.html",
        status: "Офіційні вправи",
        purpose: "Інтерактивні вправи для вивчення Kotlin через практику",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "koans", "practice", "exercises", "learning", "вправи", "навчання", "практика"]
    },
    {
        name: "Kotlin Tour (Official)",
        url: "https://kotlinlang.org/docs/kotlin-tour-welcome.html",
        status: "Офіційний вступ",
        purpose: "Огляд основ Kotlin: синтаксис, типи, функції, класи",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "tour", "basics", "syntax", "official", "офіційна", "тур", "основи", "навчання"]
    },
    {
        name: "Kotlin Multiplatform Documentation",
        url: "https://kotlinlang.org/docs/multiplatform.html",
        status: "Офіційна документація",
        purpose: "Документація Kotlin Multiplatform: Android, iOS, Desktop, Web",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "multiplatform", "kmp", "crossplatform", "official", "офіційна", "документація"]
    },
    {
        name: "Compose Multiplatform Documentation",
        url: "https://kotlinlang.org/docs/compose-multiplatform.html",
        status: "Офіційна документація",
        purpose: "UI‑фреймворк JetBrains для Android, Desktop та Web",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "compose", "ui", "multiplatform", "official", "офіційна", "документація"]
    },
    {
        name: "Kotlin and Android — Android Developers",
        url: "https://developer.android.com/kotlin/",
        status: "Офіційний ресурс Google",
        purpose: "Офіційні матеріали Google з Kotlin для Android",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "android", "google", "official", "mobile", "офіційна", "розробників", "андроїд", "гугл"]
    },
    {
        name: "Android Developers — Kotlin Resources",
        url: "https://developer.android.com/kotlin/getting-started-resources",
        status: "Офіційний навчальний ресурс",
        purpose: "Рекомендовані Google ресурси: курси, відео, книги, гайди",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "android", "learning", "google", "resources", "навчання", "джерела", "курси"]
    },
    {
        name: "Kotlin Bootcamp for Programmers (Udacity + Google)",
        url: "https://www.udacity.com/course/kotlin-bootcamp-for-programmers--ud9011",
        status: "Офіційний курс Google",
        purpose: "Безкоштовний курс Kotlin від Google та Udacity",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "course", "google", "udacity", "learning", "навчання", "курс", "безплатно"]
    },
    {
        name: "Kotlin YouTube Channel (Official)",
        url: "https://www.youtube.com/c/Kotlin",
        status: "Офіційний канал",
        purpose: "Офіційні відео JetBrains: новини, гайди, конференції",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "youtube", "videos", "official", "jetbrains", "ютуб", "відео", "канал"]
    },
    {
        name: "KotlinConf — Official Conference",
        url: "https://kotlinconf.com/",
        status: "Офіційна конференція",
        purpose: "Головна щорічна конференція Kotlin від JetBrains",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "conference", "kotlinconf", "official", "конференція", "офіційна"]
    },
    {
        name: "Kotlin Style Guide (Official)",
        url: "https://kotlinlang.org/docs/coding-conventions.html",
        status: "Офіційний стильовий гайд",
        purpose: "Рекомендації щодо стилю коду Kotlin",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "style", "guide", "conventions", "official", "офіційний", "гайд", "рекомендації"]
    },
    {
        name: "W3Schools.com — Kotlin",
        url: "https://www.w3schools.com/kotlin/",
        status: "Навчальний курс",
        purpose: "Уроки по мові Kotlin",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "w3schools", "lessons", "tutorial", "підручник", "уроки", "навчання", "онлайн"]
    },
    {
        name: "W3SchoolsUA — Kotlin",
        url: "https://w3schoolsua.github.io/kotlin/index.html",
        status: "Навчальний курс",
        purpose: "Уроки по мові Kotlin українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "kotlin",
        tags: ["kotlin", "w3schoolsua", "lessons", "tutorial", "підручник", "уроки", "навчання", "безплатно", "онлайн", "українською"]
    },
    /* ---------------- GO (GOLANG) ---------------- */
    {
        name: "Go Documentation (Official)",
        url: "https://go.dev/doc/",
        status: "Офіційна документація",
        purpose: "Повний офіційний довідник Go: гіди, інструменти, модулі, релізи",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "golang", "official", "docs", "reference", "language"]
    },
    {
        name: "The Go Programming Language — Official Site",
        url: "https://go.dev/",
        status: "Офіційний сайт",
        purpose: "Головний портал Go: документація, релізи, інструменти, навчання",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "golang", "official", "homepage", "releases"]
    },
    {
        name: "Go Tour (Official)",
        url: "https://go.dev/tour/",
        status: "Офіційний інтерактивний курс",
        purpose: "Інтерактивний тур Go: основи, типи, методи, інтерфейси",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "tour", "interactive", "learning", "official"]
    },
    {
        name: "Effective Go (Official)",
        url: "https://go.dev/doc/effective_go",
        status: "Офіційний гайд",
        purpose: "Рекомендації щодо стилю, ідіом та найкращих практик Go",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "best practices", "idioms", "official", "guide"]
    },
    {
        name: "Go Standard Library",
        url: "https://pkg.go.dev/std",
        status: "Офіційна бібліотека",
        purpose: "Документація стандартної бібліотеки Go",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "stdlib", "packages", "reference", "official"]
    },
    {
        name: "Go Packages (pkg.go.dev)",
        url: "https://pkg.go.dev/",
        status: "Офіційний репозиторій",
        purpose: "Пошук пакетів Go: офіційні та сторонні модулі",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "packages", "modules", "repository", "official"]
    },
    {
        name: "Go Modules — Official Guide",
        url: "https://go.dev/doc/modules/",
        status: "Офіційний гайд",
        purpose: "Документація по Go Modules — стандарт управління залежностями",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "modules", "dependencies", "official"]
    },
    {
        name: "Go Wiki (Official)",
        url: "https://github.com/golang/go/wiki",
        status: "Офіційний ресурс",
        purpose: "Корисні матеріали: FAQ, поради, інструменти, патерни",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "wiki", "community", "official"]
    },
    {
        name: "Go Proverbs (Rob Pike)",
        url: "https://go-proverbs.github.io/",
        status: "Авторитетний ресурс",
        purpose: "Принципи дизайну Go від одного з творців мови",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "proverbs", "rob pike", "design", "principles"]
    },
    {
        name: "Go by Example",
        url: "https://gobyexample.com/",
        status: "Навчальний ресурс",
        purpose: "Приклади Go з поясненнями: канали, горутини, структури",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "examples", "learning", "tutorials"]
    },
    {
        name: "Golang Blog (Official)",
        url: "https://go.dev/blog/",
        status: "Офіційний блог",
        purpose: "Офіційні статті про релізи, інструменти, оптимізації",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "blog", "official", "news"]
    },
    {
        name: "Gin Web Framework",
        url: "https://gin-gonic.com/docs/",
        status: "Популярний фреймворк",
        purpose: "Найпопулярніший високопродуктивний веб‑фреймворк для Go",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "gin", "framework", "web", "backend"]
    },
    {
        name: "Echo Web Framework",
        url: "https://echo.labstack.com/guide",
        status: "Популярний фреймворк",
        purpose: "Швидкий та мінімалістичний веб‑фреймворк для Go",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "echo", "framework", "web", "backend"]
    },
    {
        name: "Fiber Web Framework",
        url: "https://docs.gofiber.io/",
        status: "Популярний фреймворк",
        purpose: "Високошвидкісний веб‑фреймворк, натхненний Express.js",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "fiber", "framework", "web", "backend"]
    },
    {
        name: "W3Schools.com — Go (Golang)",
        url: "https://www.w3schools.com/go/",
        status: "Навчальні матеріали",
        purpose: "Повний курс по Go (Golang)",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "w3schools", "golang", "web", "backend", "tutorial", "навчання", "курс", "уроки", "онлайн"]
    },
    {
        name: "W3SchoolsUA — Go (Golang)",
        url: "https://w3schoolsua.github.io/go/index.html",
        status: "Навчальні матеріали",
        purpose: "Повний курс по Go (Golang) українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "go",
        tags: ["go", "w3schoolsua", "golang", "web", "backend", "tutorial", "навчання", "курс", "уроки", "ua", "українською"]
    },
    /* ---------------- C LANGUAGE ---------------- */
    {
        name: "ISO C Standard (Official)",
        url: "https://www.iso.org/standard/74528.html",
        status: "Офіційний стандарт",
        purpose: "Офіційний стандарт мови C (ISO/IEC 9899), визначає синтаксис і поведінку",
        rating: "⭐⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "iso", "standard", "official", "language", "specification"]
    },
    {
        name: "C17 / C18 Standard (ISO/IEC 9899:2018)",
        url: "https://www.iso.org/standard/74528.html",
        status: "Офіційний стандарт",
        purpose: "Актуальна версія стандарту C, що використовується у промисловості",
        rating: "⭐⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "c17", "c18", "standard", "official", "iso"]
    },
    {
        name: "C11 Standard (ISO/IEC 9899:2011)",
        url: "https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf",
        status: "Офіційний стандарт",
        purpose: "Попередня версія стандарту C, широко використовується у навчанні",
        rating: "⭐⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "c11", "standard", "official", "iso"]
    },
    {
        name: "C99 Standard (ISO/IEC 9899:1999)",
        url: "https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1256.pdf",
        status: "Офіційний стандарт",
        purpose: "Класичний стандарт C, який досі використовується у багатьох системах",
        rating: "⭐⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "c99", "standard", "official", "iso"]
    },
    {
        name: "The C Programming Language (K&R)",
        url: "https://en.wikipedia.org/wiki/The_C_Programming_Language",
        status: "Класична книга",
        purpose: "Найавторитетніша книга по C від творців мови (Kernighan & Ritchie)",
        rating: "⭐⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "kr", "book", "classic", "learning", "reference"]
    },
    {
        name: "C Programming - Wikibooks.org",
        url: "https://en.wikibooks.org/wiki/C_Programming",
        status: "Книга на Wikibooks",
        purpose: "Безплатна книга по C",
        rating: "⭐⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "wiki", "book", "classic", "learning", "reference", "книга", "підручник", "навчання"]
    },
    {
        name: "cppreference — C Reference",
        url: "https://en.cppreference.com/w/c",
        status: "Авторитетний довідник",
        purpose: "Детальна документація по C: синтаксис, типи, стандартна бібліотека",
        rating: "⭐⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "reference", "docs", "stdlib", "syntax"]
    },
    {
        name: "GCC Documentation (Official)",
        url: "https://gcc.gnu.org/onlinedocs/",
        status: "Офіційна документація",
        purpose: "Документація компілятора GCC: опції, стандарти, розширення",
        rating: "⭐⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "gcc", "compiler", "docs", "gnu"]
    },
    {
        name: "Clang/LLVM Documentation (Official)",
        url: "https://clang.llvm.org/docs/",
        status: "Офіційна документація",
        purpose: "Документація компілятора Clang: синтаксис, діагностика, інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "clang", "llvm", "compiler", "docs"]
    },
    {
        name: "Linux man-pages (C API)",
        url: "https://man7.org/linux/man-pages/",
        status: "Офіційна документація",
        purpose: "Документація системних викликів Linux: C API, POSIX, glibc",
        rating: "⭐⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "linux", "posix", "api", "syscalls", "manpages"]
    },
    {
        name: "POSIX Standard (IEEE)",
        url: "https://pubs.opengroup.org/onlinepubs/9699919799/",
        status: "Офіційний стандарт",
        purpose: "Стандарт POSIX для C API: файлові системи, процеси, мережі",
        rating: "⭐⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "posix", "standard", "unix", "api"]
    },
    {
        name: "Learn-C.org",
        url: "https://www.learn-c.org/",
        status: "Навчальний ресурс",
        purpose: "Інтерактивні уроки по C для початківців",
        rating: "⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "learning", "tutorials", "interactive"]
    },
    {
        name: "GeeksForGeeks — C Programming",
        url: "https://www.geeksforgeeks.org/c-programming-language/",
        status: "Навчальний ресурс",
        purpose: "Велика база статей, прикладів і задач по C",
        rating: "⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "tutorials", "examples", "learning"]
    },
    {
        name: "TutorialsPoint — C Programming",
        url: "https://www.tutorialspoint.com/cprogramming/",
        status: "Навчальний ресурс",
        purpose: "Базові уроки по C з прикладами",
        rating: "⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "tutorials", "learning", "examples"]
    },
    {
        name: "W3Schools.com — C Programming",
        url: "https://www.w3schools.com/c/",
        status: "Навчальний ресурс",
        purpose: "Просте навчання C для початківців",
        rating: "⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "w3schools", "tutorial", "learning", "beginner", "курси", "навчання"]
    },
    {
        name: "W3SchoolsUA — C Programming",
        url: "https://w3schoolsua.github.io/c/index.html",
        status: "Навчальний ресурс",
        purpose: "Уроки з мови C для початківців українською",
        rating: "⭐⭐⭐⭐",
        category: "c",
        tags: ["c", "w3schoolsua", "tutorial", "learning", "beginner", "курси", "навчання", "ua", "українською"]
    },
    /* ---------------- C++ LANGUAGE ---------------- */
    {
        name: "ISO C++ Standard (Official)",
        url: "https://www.iso.org/committee/54874.html",
        status: "Офіційний стандарт",
        purpose: "Офіційні стандарти C++ (ISO/IEC 14882), що визначають мову та бібліотеки",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "iso", "standard", "official", "language"]
    },
    {
        name: "C++23 Standard Draft",
        url: "https://eel.is/c++draft/",
        status: "Офіційний драфт",
        purpose: "Актуальний драфт стандарту C++23, підтримується комітетом WG21",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "c++23", "standard", "draft", "wg21"]
    },
    {
        name: "C++20 Standard Draft",
        url: "https://timsong-cpp.github.io/cppwp/",
        status: "Офіційний драфт",
        purpose: "Повний драфт стандарту C++20 — концепти, корутини, ranges",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "c++20", "standard", "draft"]
    },
    {
        name: "cppreference.com — C++ Reference",
        url: "https://en.cppreference.com/w/cpp",
        status: "Авторитетний довідник",
        purpose: "Найповніший довідник по C++: синтаксис, STL, бібліотеки, приклади",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "reference", "docs", "stl", "stdlib"]
    },
    {
        name: "C++ Core Guidelines",
        url: "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines",
        status: "Офіційні рекомендації",
        purpose: "Найкращі практики C++ від Bjarne Stroustrup та Herb Sutter",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "guidelines", "best practices", "stroustrup", "sutter"]
    },
    {
        name: "ISO C++ Foundation — Official Site",
        url: "https://isocpp.org/",
        status: "Офіційний портал",
        purpose: "Новини, статті, стандарти, конференції, ресурси по C++",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "official", "isocpp", "news"]
    },
    {
        name: "GCC C++ Documentation",
        url: "https://gcc.gnu.org/onlinedocs/gcc/C_002b_002b-Extensions.html",
        status: "Офіційна документація",
        purpose: "Документація компілятора GCC: розширення, опції, стандарти",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "gcc", "compiler", "gnu"]
    },
    {
        name: "Clang C++ Documentation",
        url: "https://clang.llvm.org/docs/UsersManual.html",
        status: "Офіційна документація",
        purpose: "Документація компілятора Clang/LLVM",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "clang", "llvm", "compiler"]
    },
    {
        name: "MSVC C++ Documentation",
        url: "https://learn.microsoft.com/en-us/cpp/",
        status: "Офіційна документація",
        purpose: "Документація Microsoft Visual C++ та інструментів",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "msvc", "microsoft", "compiler"]
    },
    {
        name: "Boost C++ Libraries",
        url: "https://www.boost.org/doc/libs/",
        status: "Офіційна документація",
        purpose: "Найпотужніша бібліотека C++, основа для багатьох стандартних компонентів",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "boost", "libraries", "stl"]
    },
    {
        name: "Qt Documentation",
        url: "https://doc.qt.io/",
        status: "Офіційна документація",
        purpose: "Найпопулярніший C++ фреймворк для GUI та кросплатформної розробки",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "qt", "gui", "framework"]
    },
    {
        name: "C++ Weekly (Jason Turner)",
        url: "https://www.youtube.com/c/CppWeekly",
        status: "Авторитетний ресурс",
        purpose: "Щотижневі відео про сучасний C++ від експерта Jason Turner",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "videos", "modern c++", "learning"]
    },
    {
        name: "LearnCpp.com",
        url: "https://www.learncpp.com/",
        status: "Навчальний ресурс",
        purpose: "Найпопулярніший безкоштовний онлайн‑курс по C++",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "tutorials", "learning", "beginner"]
    },
    {
        name: "GeeksForGeeks — C++ Programming",
        url: "https://www.geeksforgeeks.org/c-plus-plus/",
        status: "Навчальний ресурс",
        purpose: "Велика база статей, прикладів і задач по C++",
        rating: "⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "cpp", "tutorials", "examples", "learning"]
    },
    {
        name: "W3Schools — C++ Tutorial",
        url: "https://www.w3schools.com/cpp/",
        status: "Навчальний ресурс",
        purpose: "Просте навчання C++ для початківців",
        rating: "⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "w3schools", "cpp", "tutorial", "learning", "beginner", "lessons", "programming"]
    },
    {
        name: "W3SchoolsUA — C++ Підручник",
        url: "https://w3schoolsua.github.io/cpp/index.html",
        status: "Навчальний ресурс",
        purpose: "Уроки C++ для початківців українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "cpp",
        tags: ["c++", "w3schoolsua", "cpp", "tutorial", "learning", "beginner", "уроки", "навчання", "програмування", "українською", "ua"]
    },
    /* ---------------- C# LANGUAGE ---------------- */
    {
        name: "Microsoft C# Documentation (Official)",
        url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        status: "Офіційна документація",
        purpose: "Повний офіційний довідник C#: синтаксис, типи, ключові слова, приклади",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "csharp", "microsoft", "official", "docs", "language"]
    },
    {
        name: "C# Guide — Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
        status: "Офіційний гайд",
        purpose: "Огляд мови C#, основи, сучасні можливості, приклади",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "guide", "tour", "official", "microsoft"]
    },
    {
        name: "C# Language Specification",
        url: "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/",
        status: "Офіційний стандарт",
        purpose: "Формальна специфікація мови C# від Microsoft",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "specification", "standard", "official"]
    },
    {
        name: ".NET Documentation (Official)",
        url: "https://learn.microsoft.com/en-us/dotnet/",
        status: "Офіційна документація",
        purpose: "Документація по .NET: CLR, бібліотеки, інструменти, API",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "dotnet", "official", "docs", "runtime"]
    },
    {
        name: "ASP.NET Core Documentation",
        url: "https://learn.microsoft.com/en-us/aspnet/core/",
        status: "Офіційна документація",
        purpose: "Документація по ASP.NET Core — найпопулярнішому веб‑фреймворку C#",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "asp.net", "web", "backend", "official"]
    },
    {
        name: "Entity Framework Core Documentation",
        url: "https://learn.microsoft.com/en-us/ef/core/",
        status: "Офіційна документація",
        purpose: "ORM‑фреймворк для C#, робота з базами даних",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "ef core", "orm", "database", "official"]
    },
    {
        name: ".NET MAUI Documentation",
        url: "https://learn.microsoft.com/en-us/dotnet/maui/",
        status: "Офіційна документація",
        purpose: "Кросплатформний UI‑фреймворк для мобільних і десктопних додатків",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "maui", "ui", "mobile", "desktop", "official"]
    },
    {
        name: "Roslyn — .NET Compiler Platform",
        url: "https://github.com/dotnet/roslyn",
        status: "Офіційний репозиторій",
        purpose: "Компілятор C# та VB.NET з відкритим кодом",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "compiler", "roslyn", "dotnet", "github"]
    },
    {
        name: "NuGet — Official Package Repository",
        url: "https://www.nuget.org/",
        status: "Офіційний репозиторій",
        purpose: "Головний репозиторій пакетів для .NET та C#",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "nuget", "packages", "repository"]
    },
    {
        name: "C# Coding Conventions — Microsoft",
        url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions",
        status: "Офіційний стильовий гайд",
        purpose: "Рекомендації щодо стилю коду C#",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "style", "guide", "conventions", "official"]
    },
    {
        name: "C# Reference — Microsoft",
        url: "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/",
        status: "Офіційний довідник",
        purpose: "Детальний довідник по синтаксису, типах, ключових словах",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "reference", "docs", "official"]
    },
    {
        name: "C# Programming Yellow Book (Rob Miles)",
        url: "https://www.robmiles.com/c-yellow-book",
        status: "Авторитетна книга",
        purpose: "Популярна книга по C# від Rob Miles, безкоштовна",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "book", "learning", "rob miles"]
    },
    {
        name: "C# in Depth (Jon Skeet)",
        url: "https://csharpindepth.com/",
        status: "Авторитетний ресурс",
        purpose: "Глибоке вивчення C# від легендарного Jon Skeet",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "jon skeet", "advanced", "learning"]
    },
    {
        name: "DotNetPerls — C# Examples",
        url: "https://www.dotnetperls.com/",
        status: "Популярний ресурс",
        purpose: "Велика база прикладів по C#",
        rating: "⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "examples", "learning", "snippets"]
    },
    {
        name: "W3Schools — C# Tutorial",
        url: "https://www.w3schools.com/cs/",
        status: "Навчальний ресурс",
        purpose: "Просте навчання C# для початківців",
        rating: "⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "w3schools", "tutorial", "learning", "beginner"]
    },
    {
        name: "W3SchoolsUA — C# Підручник",
        url: "https://w3schoolsua.github.io/cs/index.html",
        status: "Навчальний ресурс",
        purpose: "Уроки C# для початківців українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "csharp",
        tags: ["c#", "w3schoolsua", "tutorial", "learning", "beginner", "підручник", "навчання", "українською", "для початківців"]
    },
    /* ---------------- R LANGUAGE ---------------- */
    {
        name: "The R Project for Statistical Computing (Official)",
        url: "https://www.r-project.org/",
        status: "Офіційний сайт",
        purpose: "Головний портал R: документація, релізи, стандарти, завантаження",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "official", "docs", "language", "statistics", "офіційно", "портал", "документація", "стандарти"]
    },
    {
        name: "CRAN — Comprehensive R Archive Network",
        url: "https://cran.r-project.org/",
        status: "Офіційний репозиторій",
        purpose: "Офіційний репозиторій пакетів R, документація, мануали",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "cran", "packages", "repository", "official", "репозиторій", "офіційний", "документація", "пакети"]
    },
    {
        name: "R Manuals (Official)",
        url: "https://cran.r-project.org/manuals.html",
        status: "Офіційна документація",
        purpose: "Офіційні мануали R: Introduction, Language Definition, Extensions",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "manuals", "docs", "official", "reference", "офіційні", "мануали", "розширення"]
    },
    {
        name: "R Language Definition",
        url: "https://cran.r-project.org/doc/manuals/r-release/R-lang.html",
        status: "Офіційний стандарт",
        purpose: "Формальна специфікація мови R",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "specification", "standard", "official", "специфікація", "стандарт", "офіційний"]
    },
    {
        name: "RStudio / Posit (Official)",
        url: "https://posit.co/",
        status: "Офіційний портал",
        purpose: "Офіційний сайт RStudio/Posit: IDE, пакети, інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "rstudio", "posit", "ide", "tools", "офіційний", "інструменти"]
    },
    {
        name: "RStudio Documentation",
        url: "https://docs.posit.co/",
        status: "Офіційна документація",
        purpose: "Документація RStudio IDE, Shiny, Connect, Workbench",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "rstudio", "docs", "shiny", "official", "офіційна", "документація"]
    },
    {
        name: "Tidyverse (Official)",
        url: "https://www.tidyverse.org/",
        status: "Офіційний екосистемний портал",
        purpose: "Набір пакетів для роботи з даними: dplyr, ggplot2, tidyr, readr",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "tidyverse", "ggplot2", "dplyr", "data", "офіційний", "портал", "пакети"]
    },
    {
        name: "Tidyverse Documentation",
        url: "https://tidyverse.tidyverse.org/",
        status: "Офіційна документація",
        purpose: "Документація по всіх пакетах tidyverse",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "tidyverse", "docs", "packages", "пакети", "документація"]
    },
    {
        name: "R for Data Science (Hadley Wickham)",
        url: "https://r4ds.hadley.nz/",
        status: "Авторитетна книга",
        purpose: "Найпопулярніша книга по R для аналізу даних",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "book", "data science", "tidyverse", "learning", "книга", "аналіз", "даних"]
    },
    {
        name: "Advanced R (Hadley Wickham)",
        url: "https://adv-r.hadley.nz/",
        status: "Авторитетна книга",
        purpose: "Глибоке вивчення R: середовище, об’єкти, функції, метапрограмування",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "advanced", "book", "hadley", "programming", "книга"]
    },
    {
        name: "R Packages (Hadley Wickham)",
        url: "https://r-pkgs.org/",
        status: "Авторитетна книга",
        purpose: "Створення, тестування та публікація R‑пакетів",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "packages", "book", "development", "книга"]
    },
    {
        name: "Shiny (Official)",
        url: "https://shiny.posit.co/",
        status: "Офіційний фреймворк",
        purpose: "Створення інтерактивних веб‑додатків на R",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "shiny", "web", "framework", "official", "офіційний", "додатки"]
    },
    {
        name: "R Bloggers",
        url: "https://www.r-bloggers.com/",
        status: "Популярний ресурс",
        purpose: "Статті, новини, приклади та гайди по R від спільноти",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "blog", "community", "learning", "статті", "новини"]
    },
    {
        name: "DataCamp — R Courses",
        url: "https://www.datacamp.com/courses/tech:r",
        status: "Навчальний ресурс",
        purpose: "Інтерактивні курси по R для аналізу даних",
        rating: "⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "learning", "courses", "interactive", "курси"]
    },
    {
        name: "W3Schools.com — R Tutorial",
        url: "https://www.w3schools.com/r/",
        status: "Навчальний ресурс",
        purpose: "Просте навчання R для початківців",
        rating: "⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "tutorial", "learning", "beginner"]
    },
    {
        name: "W3SchoolsUA — R Підручник",
        url: "https://w3schoolsua.github.io/r/index.html",
        status: "Навчальний ресурс",
        purpose: "Навчання R для початківців українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "r",
        tags: ["r", "tutorial", "learning", "beginner", "підручник", "для початківців", "уроки", "українською"]
    },
    /* ---------------- RUST LANGUAGE ---------------- */
    {
        name: "Rust Programming Language (Official)",
        url: "https://www.rust-lang.org/",
        status: "Офіційний сайт",
        purpose: "Головний портал Rust: документація, інструменти, релізи, навчання",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "official", "docs", "language", "homepage", "мова", "програмування", "портал", "офіційний"]
    },
    {
        name: "The Rust Programming Language — The Rust Book",
        url: "https://doc.rust-lang.org/book/",
        status: "Офіційна книга",
        purpose: "Головна офіційна книга Rust: основи, власність, позичання, типи",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "book", "official", "learning", "beginner", "книга", "офіційна", "навчання"]
    },
    {
        name: "Rust Reference (Official)",
        url: "https://doc.rust-lang.org/reference/",
        status: "Офіційна специфікація",
        purpose: "Формальна специфікація мови Rust",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "reference", "specification", "official", "специфікація", "офіційна"]
    },
    {
        name: "Rustonomicon (Official)",
        url: "https://doc.rust-lang.org/nomicon/",
        status: "Офіційний ресурс",
        purpose: "Небезпечні частини Rust: unsafe, низькорівневі механізми",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "unsafe", "advanced", "official", "мова", "програмування"]
    },
    {
        name: "Rust Standard Library Documentation",
        url: "https://doc.rust-lang.org/std/",
        status: "Офіційна документація",
        purpose: "Документація стандартної бібліотеки Rust",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "stdlib", "docs", "official", "стандарт", "бібліотека", "документація"]
    },
    {
        name: "Cargo — Rust Package Manager",
        url: "https://doc.rust-lang.org/cargo/",
        status: "Офіційна документація",
        purpose: "Менеджер пакетів Rust, збірка, залежності, публікація",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "cargo", "packages", "build", "official"]
    },
    {
        name: "Crates.io — Rust Package Registry",
        url: "https://crates.io/",
        status: "Офіційний репозиторій",
        purpose: "Головний репозиторій пакетів Rust",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "crates", "packages", "repository", "офіційний", "репозиторій", "пакети"]
    },
    {
        name: "Rustup — Toolchain Installer",
        url: "https://rustup.rs/",
        status: "Офіційний інструмент",
        purpose: "Офіційний інсталятор Rust toolchain",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "rustup", "toolchain", "official", "офіційний", "інсталятор"]
    },
    {
        name: "Clippy — Rust Linter",
        url: "https://github.com/rust-lang/rust-clippy",
        status: "Офіційний інструмент",
        purpose: "Офіційний лінтер Rust з найкращими практиками",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "clippy", "linter", "official", "лінтер", "офіційний"]
    },
    {
        name: "Rustfmt — Code Formatter",
        url: "https://github.com/rust-lang/rustfmt",
        status: "Офіційний інструмент",
        purpose: "Офіційний форматер коду Rust",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "rustfmt", "formatter", "official", "форматер", "коду"]
    },
    {
        name: "Rust Foundation",
        url: "https://foundation.rust-lang.org/",
        status: "Офіційна організація",
        purpose: "Фонд, що підтримує розвиток Rust",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "foundation", "official", "community", "фонд"]
    },
    {
        name: "Rust Blog (Official)",
        url: "https://blog.rust-lang.org/",
        status: "Офіційний блог",
        purpose: "Офіційні новини Rust: релізи, RFC, зміни в мові",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "blog", "official", "news", "офіційні", "новини"]
    },
    {
        name: "Rust RFCs — Language Evolution",
        url: "https://github.com/rust-lang/rfcs",
        status: "Офіційний репозиторій",
        purpose: "Пропозиції щодо розвитку Rust (RFC)",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "rfcs", "language", "evolution", "офіційний", "репозиторій"]
    },
    {
        name: "Rust by Example (Official)",
        url: "https://doc.rust-lang.org/rust-by-example/",
        status: "Офіційний ресурс",
        purpose: "Приклади Rust з поясненнями",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "examples", "learning", "official", "приклади", "навчання"]
    },
    {
        name: "The Rust Cookbook",
        url: "https://rust-lang-nursery.github.io/rust-cookbook/",
        status: "Авторитетний ресурс",
        purpose: "Готові рецепти та приклади використання Rust",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "cookbook", "examples", "learning", "приклади", "навчання"]
    },
    {
        name: "Actix Web Framework",
        url: "https://actix.rs/",
        status: "Популярний фреймворк",
        purpose: "Найшвидший веб‑фреймворк Rust",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "actix", "web", "framework", "фреймворк"]
    },
    {
        name: "Rocket Web Framework",
        url: "https://rocket.rs/",
        status: "Популярний фреймворк",
        purpose: "Зручний і сучасний веб‑фреймворк Rust",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "rocket", "web", "framework", "фреймворк"]
    },
    {
        name: "Axum Web Framework",
        url: "https://docs.rs/axum/latest/axum/",
        status: "Популярний фреймворк",
        purpose: "Сучасний веб‑фреймворк на основі Tokio",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "axum", "web", "framework", "tokio", "токіо", "фреймворк"]
    },
    {
        name: "W3Schools.com - Rust Tutorial",
        url: "https://www.w3schools.com/rust/",
        status: "Навчальний ресурс",
        purpose: "Уроки по мові програмування Rust для новачків",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "programming", "w3schools", "learning", "tutorial", "for beginners", "навчання", "уроки"]
    },
    {
        name: "W3SchoolsUA - Rust Підручник",
        url: "https://w3schoolsua.github.io/rust/index.html",
        status: "Навчальний ресурс",
        purpose: "Уроки по мові програмування Rust для новачків українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "rust",
        tags: ["rust", "programming", "w3schools", "learning", "tutorial", "for beginners", "програмування", "навчання", "уроки", "українською"]
    },
    /* ---------------- SWIFT LANGUAGE ---------------- */
    {
        name: "Swift.org (Official)",
        url: "https://swift.org/",
        status: "Офіційний сайт",
        purpose: "Головний портал Swift: документація, релізи, інструменти, стандарти",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "official", "docs", "language", "homepage", "офіційний", "документація", "стандарти"]
    },
    {
        name: "The Swift Programming Language (Swift Book)",
        url: "https://docs.swift.org/swift-book/",
        status: "Офіційна книга",
        purpose: "Головна офіційна книга Swift: синтаксис, типи, протоколи, приклади",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "book", "official", "learning", "beginner", "офіційна", "книга", "навчання"]
    },
    {
        name: "Swift Language Guide",
        url: "https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html",
        status: "Офіційний гайд",
        purpose: "Офіційний гайд по мові Swift: основи, синтаксис, функції",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "guide", "language", "official", "гайд", "офіційний"]
    },
    {
        name: "Swift Standard Library Documentation",
        url: "https://developer.apple.com/documentation/swift",
        status: "Офіційна документація",
        purpose: "Документація стандартної бібліотеки Swift",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "stdlib", "docs", "official", "офіційна", "документація"]
    },
    {
        name: "Swift API Reference — Apple Developer",
        url: "https://developer.apple.com/documentation/",
        status: "Офіційна документація",
        purpose: "Офіційні API Apple: Swift, SwiftUI, UIKit, Foundation",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "apple", "api", "docs", "official", "офіційна", "документація"]
    },
    {
        name: "Swift Evolution (Official)",
        url: "https://github.com/apple/swift-evolution",
        status: "Офіційний репозиторій",
        purpose: "Пропозиції щодо розвитку Swift (SE)",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "evolution", "language", "official", "офіційний", "репозиторій"]
    },
    {
        name: "Swift Blog (Official)",
        url: "https://swift.org/blog/",
        status: "Офіційний блог",
        purpose: "Офіційні новини Swift: релізи, RFC, зміни в мові",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "blog", "official", "news", "офіційні", "новини"]
    },
    {
        name: "Swift Forums (Official)",
        url: "https://forums.swift.org/",
        status: "Офіційний форум",
        purpose: "Офіційна спільнота Swift: обговорення, RFC, підтримка",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "forums", "community", "official", "форму", "офіційний"]
    },
    {
        name: "Swift Playgrounds (Apple)",
        url: "https://www.apple.com/swift/playgrounds/",
        status: "Офіційний навчальний ресурс",
        purpose: "Інтерактивне навчання Swift для початківців на iPad",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "playgrounds", "learning", "apple", "beginner", "для початківців", "навчання"]
    },
    {
        name: "SwiftUI Documentation",
        url: "https://developer.apple.com/xcode/swiftui/",
        status: "Офіційна документація",
        purpose: "Документація SwiftUI — сучасний UI‑фреймворк для iOS/macOS",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "swiftui", "ui", "apple", "docs", "документація", "офіційна", "фреймворк"]
    },
    {
        name: "Vapor Web Framework",
        url: "https://docs.vapor.codes/",
        status: "Популярний фреймворк",
        purpose: "Найпопулярніший веб‑фреймворк для Swift",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "vapor", "web", "framework", "фреймворк"]
    },
    {
        name: "Kitura Web Framework",
        url: "https://www.kitura.io/",
        status: "Популярний фреймворк",
        purpose: "Веб‑фреймворк Swift від IBM",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "kitura", "web", "framework","фреймворк"]
    },
    {
        name: "Perfect Web Framework",
        url: "https://perfect.org/",
        status: "Популярний фреймворк",
        purpose: "Фреймворк Swift для серверної розробки",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "perfect", "web", "framework", "фреймворк"]
    },
    {
        name: "Swift Package Manager (SPM)",
        url: "https://swift.org/package-manager/",
        status: "Офіційний інструмент",
        purpose: "Менеджер пакетів Swift, інтегрований у Swift",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "spm", "packages", "official", "офіційний", "менеджер", "пакетів"]
    },
    {
        name: "Swift Style Guide — Ray Wenderlich",
        url: "https://github.com/raywenderlich/swift-style-guide",
        status: "Авторитетний гайд",
        purpose: "Популярний гайд по стилю коду Swift",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "style", "guide", "ray wenderlich", "гайд", "стиль"]
    },
    {
        name: "Hacking with Swift",
        url: "https://www.hackingwithswift.com/",
        status: "Авторитетний ресурс",
        purpose: "Велика база статей, прикладів і курсів по Swift",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "tutorials", "learning", "examples", "курс", "навчання"]
    },
    {
        name: "Swift Playgrounds Guide — Apple Developer",
        url: "https://developer.apple.com/swift/resources/",
        status: "Офіційний ресурс",
        purpose: "Ресурси для навчання Swift від Apple Developer",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "apple", "resources", "learning", "офіційний", "навчання"]
    },
    {
        name: "The Swift Programming Language - GitHub",
        url: "https://github.com/swiftlang",
        status: "Офіційний ресурс",
        purpose: "Репозиторій Swift на GitHub",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "apple", "resources", "github", "офіційний", "репозиторій"]
    },
    {
        name: "W3Schools.com — Swift Tutorial",
        url: "https://www.w3schools.com/swift/",
        status: "Навчальний ресурс",
        purpose: "Уроки для початківців по Swift",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "apple", "w3schools", "learning", "уроки", "навчання"]
    },
    {
        name: "W3SchoolsUA — Swift Підручник",
        url: "https://w3schoolsua.github.io/swift/index.html",
        status: "Навчальний ресурс",
        purpose: "Уроки для початківців по Swift українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "swift",
        tags: ["swift", "apple", "w3schoolsua", "learning", "уроки", "навчання", "українською"]
    },
    /* ---------------- TYPESCRIPT LANGUAGE ---------------- */
    {
        name: "TypeScript Official Website",
        url: "https://www.typescriptlang.org/",
        status: "Офіційний сайт",
        purpose: "Головний портал TypeScript: документація, релізи, інструменти, навчання",
        rating: "⭐⭐⭐⭐⭐",
        category: "typescript",
        tags: ["typescript", "official", "docs", "language", "homepage"]
    },
    {
        name: "TypeScript Handbook (Official)",
        url: "https://www.typescriptlang.org/docs/handbook/intro.html",
        status: "Офіційна документація",
        purpose: "Головний офіційний довідник TypeScript: синтаксис, типи, приклади",
        rating: "⭐⭐⭐⭐⭐",
        category: "typescript",
        tags: ["typescript", "handbook", "docs", "official", "reference"]
    },
    {
        name: "TypeScript Language Specification",
        url: "https://github.com/microsoft/TypeScript/blob/main/doc/spec.md",
        status: "Офіційна специфікація",
        purpose: "Формальна специфікація мови TypeScript",
        rating: "⭐⭐⭐⭐⭐",
        category: "typescript",
        tags: ["typescript", "specification", "standard", "official"]
    },
    {
        name: "TypeScript Release Notes",
        url: "https://www.typescriptlang.org/docs/whats-new/",
        status: "Офіційний ресурс",
        purpose: "Офіційні новини та зміни у версіях TypeScript",
        rating: "⭐⭐⭐⭐⭐",
        category: "typescript",
        tags: ["typescript", "releases", "news", "official"]
    },
    {
        name: "DefinitelyTyped — TypeScript Type Definitions",
        url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
        status: "Офіційний репозиторій",
        purpose: "Головний репозиторій типів для сторонніх бібліотек",
        rating: "⭐⭐⭐⭐⭐",
        category: "typescript",
        tags: ["typescript", "types", "repository", "official"]
    },
    {
        name: "TypeScript Deep Dive (Basarat Ali Syed)",
        url: "https://basarat.gitbook.io/typescript/",
        status: "Авторитетна книга",
        purpose: "Найпопулярніший безкоштовний гайд по TypeScript",
        rating: "⭐⭐⭐⭐⭐",
        category: "typescript",
        tags: ["typescript", "book", "guide", "learning"]
    },
    {
        name: "TypeScript GitHub Repository",
        url: "https://github.com/microsoft/TypeScript",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код TypeScript, issues, RFC",
        rating: "⭐⭐⭐⭐⭐",
        category: "typescript",
        tags: ["typescript", "github", "repository", "official"]
    },
    {
        name: "TypeScript Blog (Official)",
        url: "https://devblogs.microsoft.com/typescript/",
        status: "Офіційний блог",
        purpose: "Офіційні статті Microsoft про TypeScript",
        rating: "⭐⭐⭐⭐⭐",
        category: "typescript",
        tags: ["typescript", "blog", "official", "news"]
    },
    {
        name: "TypeScript Tutorial — W3Schools",
        url: "https://www.w3schools.com/typescript/",
        status: "Навчальний ресурс",
        purpose: "Просте навчання TypeScript для початківців",
        rating: "⭐⭐⭐⭐",
        category: "typescript",
        tags: ["typescript", "tutorial", "learning", "beginner"]
    },
    {
        name: "TypeScript Tutorial — TutorialsPoint",
        url: "https://www.tutorialspoint.com/typescript/",
        status: "Навчальний ресурс",
        purpose: "Базові уроки по TypeScript з прикладами",
        rating: "⭐⭐⭐⭐",
        category: "typescript",
        tags: ["typescript", "tutorials", "examples", "learning"]
    },
    {
        name: "TypeScript — GeeksForGeeks",
        url: "https://www.geeksforgeeks.org/introduction-to-typescript/",
        status: "Навчальний ресурс",
        purpose: "Велика база статей та прикладів по TypeScript",
        rating: "⭐⭐⭐⭐",
        category: "typescript",
        tags: ["typescript", "tutorials", "examples", "learning"]
    },
    {
        name: "W3Schools.com — TypeScript Tutorial",
        url: "https://www.w3schools.com/typescript/",
        status: "Навчальний ресурс",
        purpose: "Уроки для початківців по TypeScript",
        rating: "⭐⭐⭐⭐",
        category: "typescript",
        tags: ["typescript", "w3schools", "lessond", "learning", "уроки", "навчання", "для початківців"]
    },
    {
        name: "W3SchoolsUA — TypeScript Підручник",
        url: "https://w3schoolsua.github.io/typescript/index.html",
        status: "Навчальний ресурс",
        purpose: "Уроки для початківців по TypeScript українською",
        rating: "⭐⭐⭐⭐",
        category: "typescript",
        tags: ["typescript", "w3schools", "lessond", "learning", "уроки", "навчання", "для початківців", "українською"]
    },
    /* ---------------- NODE.JS LANGUAGE ---------------- */
    {
        name: "Node.js Official Website",
        url: "https://nodejs.org/",
        status: "Офіційний сайт",
        purpose: "Головний портал Node.js: документація, релізи, інструменти, завантаження",
        rating: "⭐⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "official", "docs", "language", "homepage", "офіційний", "документація"]
    },
    {
        name: "Node.js Documentation (Official)",
        url: "https://nodejs.org/en/docs/",
        status: "Офіційна документація",
        purpose: "Повний офіційний довідник Node.js: API, модулі, приклади",
        rating: "⭐⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "docs", "api", "official", "reference", "офіційна", "документація"]
    },
    {
        name: "Node.js API Reference",
        url: "https://nodejs.org/api/",
        status: "Офіційна документація",
        purpose: "Документація API Node.js: модулі, функції, системні виклики",
        rating: "⭐⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "api", "docs", "official", "офіційна", "документація"]
    },
    {
        name: "Node.js Release Notes",
        url: "https://nodejs.org/en/blog/release/",
        status: "Офіційний ресурс",
        purpose: "Офіційні новини та зміни у версіях Node.js",
        rating: "⭐⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "releases", "news", "official"]
    },
    {
        name: "Node.js GitHub Repository",
        url: "https://github.com/nodejs/node",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код Node.js, issues, RFC",
        rating: "⭐⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "github", "repository", "official", "офіційний", "репозиторій"]
    },
    {
        name: "Node.js Blog (Official)",
        url: "https://nodejs.org/en/blog/",
        status: "Офіційний блог",
        purpose: "Офіційні статті Node.js: новини, релізи, зміни",
        rating: "⭐⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "blog", "official", "news", "офіційний", "блог", "новини", "статті"]
    },
    {
        name: "Express.js Documentation",
        url: "https://expressjs.com/",
        status: "Популярний фреймворк",
        purpose: "Найпопулярніший веб‑фреймворк для Node.js",
        rating: "⭐⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "express", "framework", "web", "фреймворк"]
    },
    {
        name: "NestJS Documentation",
        url: "https://docs.nestjs.com/",
        status: "Популярний фреймворк",
        purpose: "Прогресивний фреймворк для Node.js, побудований на TypeScript",
        rating: "⭐⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "nestjs", "framework", "typescript", "фреймворк"]
    },
    {
        name: "Koa.js Documentation",
        url: "https://koajs.com/",
        status: "Популярний фреймворк",
        purpose: "Мінімалістичний веб‑фреймворк для Node.js",
        rating: "⭐⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "koa", "framework", "web", "фреймворк"]
    },
    {
        name: "Fastify Documentation",
        url: "https://www.fastify.io/docs/latest/",
        status: "Популярний фреймворк",
        purpose: "Високопродуктивний веб‑фреймворк для Node.js",
        rating: "⭐⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "fastify", "framework", "web", "фреймворк"]
    },
    {
        name: "Node.js Design Patterns (Book)",
        url: "https://www.nodejsdesignpatterns.com/",
        status: "Авторитетна книга",
        purpose: "Класична книга по архітектурі та патернах Node.js",
        rating: "⭐⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "book", "design patterns", "learning", "книга", "архітектура", "навчання"]
    },
    {
        name: "Node.js Best Practices (GitHub)",
        url: "https://github.com/goldbergyoni/nodebestpractices",
        status: "Авторитетний ресурс",
        purpose: "Найпопулярніший репозиторій з найкращими практиками Node.js",
        rating: "⭐⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "best practices", "github", "guide", "гітхаб", "репозиторій"]
    },
    {
        name: "W3Schools.com — Node.js Tutorial",
        url: "https://www.w3schools.com/nodejs/",
        status: "Навчальний ресурс",
        purpose: "Просте навчання Node.js для початківців",
        rating: "⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "w3schools", "tutorial", "learning", "beginner", "уроки", "навчання", "для початківців"]
    },
    {
        name: "W3SchoolsUA — Node.js Підручник",
        url: "https://w3schoolsua.github.io/nodejs/index.html",
        status: "Навчальний ресурс",
        purpose: "Уроки Node.js для початківців українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "w3schoolsua", "tutorial", "learning", "beginner", "уроки", "навчання", "для початківців", "українською"]
    },
    {
        name: "Node.js Tutorial — TutorialsPoint",
        url: "https://www.tutorialspoint.com/nodejs/",
        status: "Навчальний ресурс",
        purpose: "Базові уроки по Node.js з прикладами",
        rating: "⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "tutorials", "examples", "learning", "уроки", "навчання"]
    },
    {
        name: "Node.js — GeeksForGeeks",
        url: "https://www.geeksforgeeks.org/nodejs/",
        status: "Навчальний ресурс",
        purpose: "Велика база статей та прикладів по Node.js",
        rating: "⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "tutorials", "examples", "learning"]
    },
    {
        name: "Вікіпедія (укр) — Node.js",
        url: "https://uk.wikipedia.org/wiki/Node.js",
        status: "Україномовний ресурс",
        purpose: "Огляд Node.js українською: історія, архітектура, застосування",
        rating: "⭐⭐⭐⭐",
        category: "nodejs",
        tags: ["nodejs", "ukrainian", "encyclopedia", "overview", "verified", "українською", "вікіпедія"]
    },
    /* ---------------- FRONTEND: REACT ---------------- */
    {
        name: "React — Official Website",
        url: "https://react.dev/",
        status: "Офіційний сайт",
        purpose: "Головний портал React: документація, гіди, API, навчання",
        rating: "⭐⭐⭐⭐⭐",
        category: "frontend",
        tags: ["react", "official", "docs", "frontend", "library", "офіційна", "документація"]
    },
    {
        name: "React — Legacy Docs",
        url: "https://legacy.reactjs.org/",
        status: "Офіційна документація",
        purpose: "Стара документація React (до React 18)",
        rating: "⭐⭐⭐⭐⭐",
        category: "frontend",
        tags: ["react", "legacy", "docs", "офіційна", "документація"]
    },
    {
        name: "React GitHub Repository",
        url: "https://github.com/facebook/react",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код React, RFC, issues",
        rating: "⭐⭐⭐⭐⭐",
        category: "frontend",
        tags: ["react", "github", "repository", "офіційний", "репозиторій"]
    },
    /* ---------------- FRONTEND: VUE ---------------- */
    {
        name: "Vue.js — Official Website",
        url: "https://vuejs.org/",
        status: "Офіційний сайт",
        purpose: "Головний портал Vue: документація, гіди, API",
        rating: "⭐⭐⭐⭐⭐",
        category: "frontend",
        tags: ["vue", "official", "docs", "frontend", "framework", "офіційна", "документація"]
    },
    {
        name: "Vue.js GitHub Repository",
        url: "https://github.com/vuejs/core",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код Vue 3",
        rating: "⭐⭐⭐⭐⭐",
        category: "frontend",
        tags: ["vue", "github", "repository", "офіційна", "репозиторій"]
    },
    /* ---------------- FRONTEND: ANGULAR ---------------- */
    {
        name: "Angular — Official Website",
        url: "https://angular.dev/",
        status: "Офіційний сайт",
        purpose: "Головний портал Angular: документація, гіди, API",
        rating: "⭐⭐⭐⭐⭐",
        category: "frontend",
        tags: ["angular", "official", "docs", "frontend", "framework", "офіційна", "документація", "портал"]
    },
    {
        name: "Angular GitHub Repository",
        url: "https://github.com/angular/angular",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код Angular, RFC, issues",
        rating: "⭐⭐⭐⭐⭐",
        category: "frontend",
        tags: ["angular", "github", "repository", "офіційна", "документація", "репозиторій"]
    },
    /* ---------------- FRONTEND: JQUERY ---------------- */
    {
        name: "jQuery — Official Website",
        url: "https://jquery.com/",
        status: "Офіційний сайт",
        purpose: "Головний портал jQuery: документація, API, завантаження",
        rating: "⭐⭐⭐⭐⭐",
        category: "frontend",
        tags: ["jquery", "official", "docs", "library", "офіційна", "документація"]
    },
    {
        name: "jQuery API Documentation",
        url: "https://api.jquery.com/",
        status: "Офіційна документація",
        purpose: "Повний довідник API jQuery",
        rating: "⭐⭐⭐⭐⭐",
        category: "frontend",
        tags: ["jquery", "api", "docs", "офіційна", "документація"]
    },
    {
        name: "jQuery GitHub Repository",
        url: "https://github.com/jquery/jquery",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код jQuery",
        rating: "⭐⭐⭐⭐⭐",
        category: "frontend",
        tags: ["jquery", "github", "repository", "офіційна", "документація", "репозиторій"]
    },
    /* ---------------- ДОДАТКОВІ АВТОРИТЕТНІ РЕСУРСИ ---------------- */
    {
        name: "MDN Web Docs — Frontend",
        url: "https://developer.mozilla.org/en-US/docs/Web",
        status: "Авторитетна документація",
        purpose: "Найкращий довідник по HTML, CSS, JavaScript, API",
        rating: "⭐⭐⭐⭐⭐",
        category: "frontend",
        tags: ["frontend", "mdn", "docs", "html", "css", "javascript", "офіційна", "документація"]
    },
    {
        name: "W3Schools — Frontend Tutorials",
        url: "https://www.w3schools.com/",
        status: "Навчальний ресурс",
        purpose: "Просте навчання HTML, CSS, JS, React",
        rating: "⭐⭐⭐⭐",
        category: "frontend",
        tags: ["frontend", "tutorial", "learning", "навчання", "уроки"]
    },
    {
        name: "freeCodeCamp — Frontend Development",
        url: "https://www.freecodecamp.org/learn/",
        status: "Популярний навчальний ресурс",
        purpose: "Безкоштовні курси з HTML, CSS, JS, React",
        rating: "⭐⭐⭐⭐⭐",
        category: "frontend",
        tags: ["frontend", "freecodecamp", "learning", "courses", "курси", "навчання"]
    },
    /* ---------------- УКРАЇНОМОВНІ ПЕРЕВІРЕНІ РЕСУРСИ ---------------- */
    {
        name: "Вікіпедія (укр) — React",
        url: "https://uk.wikipedia.org/wiki/React",
        status: "Україномовний ресурс",
        purpose: "Огляд React українською",
        rating: "⭐⭐⭐⭐",
        category: "frontend",
        tags: ["react", "ukrainian", "encyclopedia", "verified", "вікіпедія"]
    },
    {
        name: "Вікіпедія (укр) — Vue.js",
        url: "https://uk.wikipedia.org/wiki/Vue.js",
        status: "Україномовний ресурс",
        purpose: "Огляд Vue українською",
        rating: "⭐⭐⭐⭐",
        category: "frontend",
        tags: ["vue", "ukrainian", "encyclopedia", "verified", "вікіпедія"]
    },
    {
        name: "Вікіпедія (укр) — Angular",
        url: "https://uk.wikipedia.org/wiki/Angular",
        status: "Україномовний ресурс",
        purpose: "Огляд Angular українською",
        rating: "⭐⭐⭐⭐",
        category: "frontend",
        tags: ["angular", "ukrainian", "encyclopedia", "verified", "вікіпедія"]
    },
    {
        name: "Вікіпедія (укр) — jQuery",
        url: "https://uk.wikipedia.org/wiki/JQuery",
        status: "Україномовний ресурс",
        purpose: "Огляд jQuery українською",
        rating: "⭐⭐⭐⭐",
        category: "frontend",
        tags: ["jquery", "ukrainian", "encyclopedia", "verified", "вікіпедія"]
    },
    /* ---------------- BACKEND: DJANGO ---------------- */
    {
        name: "Django — Official Website",
        url: "https://www.djangoproject.com/",
        status: "Офіційний сайт",
        purpose: "Головний портал Django: документація, релізи, новини",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["django", "official", "docs", "python", "framework", "офіційна", "документація"]
    },
    {
        name: "Django Documentation",
        url: "https://docs.djangoproject.com/en/stable/",
        status: "Офіційна документація",
        purpose: "Повний офіційний довідник Django: ORM, views, templates, security",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["django", "docs", "official", "reference", "офіційна", "документація"]
    },
    {
        name: "Django GitHub Repository",
        url: "https://github.com/django/django",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код Django, issues, RFC",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["django", "github", "repository", "офіційний", "репозиторій"]
    },
    /* ---------------- BACKEND: SPRING ---------------- */
    {
        name: "Spring Framework — Official Website",
        url: "https://spring.io/",
        status: "Офіційний сайт",
        purpose: "Головний портал Spring: документація, проєкти, гіди",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["spring", "java", "official", "framework"]
    },
    {
        name: "Spring Framework Documentation",
        url: "https://docs.spring.io/spring-framework/docs/current/reference/html/",
        status: "Офіційна документація",
        purpose: "Документація Spring Core: DI, MVC, Beans, Context",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["spring", "docs", "official", "reference"]
    },
    {
        name: "Spring Boot Documentation",
        url: "https://docs.spring.io/spring-boot/docs/current/reference/html/",
        status: "Офіційна документація",
        purpose: "Документація Spring Boot: автоконфігурація, REST, Actuator",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["spring boot", "java", "docs", "official"]
    },
    {
        name: "Spring GitHub Repository",
        url: "https://github.com/spring-projects/spring-framework",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код Spring Framework",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["spring", "github", "repository"]
    },
    /* ---------------- BACKEND: LARAVEL ---------------- */
    {
        name: "Laravel — Official Website",
        url: "https://laravel.com/",
        status: "Офіційний сайт",
        purpose: "Головний портал Laravel: документація, новини, екосистема",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["laravel", "php", "official", "framework"]
    },
    {
        name: "Laravel Documentation",
        url: "https://laravel.com/docs",
        status: "Офіційна документація",
        purpose: "Повний довідник Laravel: routing, Eloquent, Blade, queues",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["laravel", "docs", "official", "reference"]
    },
    {
        name: "Laravel GitHub Repository",
        url: "https://github.com/laravel/laravel",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код Laravel",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["laravel", "github", "repository"]
    },
    /* ---------------- BACKEND: EXPRESS ---------------- */
    {
        name: "Express.js — Official Website",
        url: "https://expressjs.com/",
        status: "Офіційний сайт",
        purpose: "Головний портал Express: документація, API, гіди",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["express", "nodejs", "official", "framework"]
    },
    {
        name: "Express.js GitHub Repository",
        url: "https://github.com/expressjs/express",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код Express.js",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["express", "github", "repository"]
    },
    /* ---------------- ДОДАТКОВІ АВТОРИТЕТНІ РЕСУРСИ ---------------- */
    {
        name: "MDN Web Docs — Backend",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side",
        status: "Авторитетна документація",
        purpose: "Огляд серверних технологій: Python, Node.js, бази даних",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["backend", "mdn", "docs", "server"]
    },
    {
        name: "freeCodeCamp — Backend Development",
        url: "https://www.freecodecamp.org/learn/",
        status: "Популярний навчальний ресурс",
        purpose: "Безкоштовні курси з Node.js, APIs, Python",
        rating: "⭐⭐⭐⭐⭐",
        category: "backend",
        tags: ["backend", "freecodecamp", "learning", "courses"]
    },
    {
        name: "W3Schools — Backend Tutorials",
        url: "https://www.w3schools.com/",
        status: "Навчальний ресурс",
        purpose: "Просте навчання серверних технологій",
        rating: "⭐⭐⭐⭐",
        category: "backend",
        tags: ["backend", "tutorial", "learning"]
    },
    /* ---------------- УКРАЇНОМОВНІ ПЕРЕВІРЕНІ РЕСУРСИ ---------------- */
    {
        name: "Вікіпедія (укр) — Django",
        url: "https://uk.wikipedia.org/wiki/Django",
        status: "Україномовний ресурс",
        purpose: "Огляд Django українською",
        rating: "⭐⭐⭐⭐",
        category: "backend",
        tags: ["django", "ukrainian", "encyclopedia", "verified"]
    },
    {
        name: "Вікіпедія (укр) — Spring Framework",
        url: "https://uk.wikipedia.org/wiki/Spring_Framework",
        status: "Україномовний ресурс",
        purpose: "Огляд Spring українською",
        rating: "⭐⭐⭐⭐",
        category: "backend",
        tags: ["spring", "ukrainian", "encyclopedia", "verified"]
    },
    {
        name: "Вікіпедія (укр) — Laravel",
        url: "https://uk.wikipedia.org/wiki/Laravel",
        status: "Україномовний ресурс",
        purpose: "Огляд Laravel українською",
        rating: "⭐⭐⭐⭐",
        category: "backend",
        tags: ["laravel", "ukrainian", "encyclopedia", "verified"]
    },
    {
        name: "Вікіпедія (укр) — Express.js",
        url: "https://uk.wikipedia.org/wiki/Express.js",
        status: "Україномовний ресурс",
        purpose: "Огляд Express українською",
        rating: "⭐⭐⭐⭐",
        category: "backend",
        tags: ["express", "ukrainian", "encyclopedia", "verified"]
    },
    /* ---------------- CLOUD: AWS ---------------- */
    {
        name: "AWS — Official Website",
        url: "https://aws.amazon.com/",
        status: "Офіційний сайт",
        purpose: "Головний портал AWS: сервіси, продукти, документація, навчання",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["aws", "cloud", "official", "homepage"]
    },
    {
        name: "AWS Documentation Overview",
        url: "https://aws.amazon.com/documentation-overview/",
        status: "Офіційна документація",
        purpose: "Повний огляд документації AWS: compute, storage, networking, AI",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["aws", "docs", "official", "reference"]
    },
    {
        name: "AWS Architecture Center",
        url: "https://aws.amazon.com/architecture/",
        status: "Офіційний ресурс",
        purpose: "Архітектурні патерни, whitepapers, best practices",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["aws", "architecture", "best practices"]
    },
    {
        name: "AWS Well-Architected Framework",
        url: "https://aws.amazon.com/architecture/well-architected/",
        status: "Офіційний стандарт",
        purpose: "Фреймворк для побудови надійних cloud‑архітектур",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["aws", "well-architected", "standard"]
    },
    {
        name: "W3Schools.com — AWS Cloud Practitioner Tutorial",
        url: "https://www.w3schools.com/aws/",
        status: "Навчальний ресурс",
        purpose: "Уроки по AWS Cloud для початківців",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["aws", "w3schools", "learning", "lessons", "for beginners", "уроки", "для початківців"]
    },
    {
        name: "W3SchoolsUA — AWS Cloud Practitioner Підручник",
        url: "https://w3schoolsua.github.io/aws/index.html",
        status: "Навчальний ресурс",
        purpose: "Уроки по AWS Cloud для початківців українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["aws", "w3schools", "learning", "lessons", "for beginners", "уроки", "для початківців", "українською"]
    },
    /* ---------------- CLOUD: AZURE ---------------- */
    {
        name: "Microsoft Azure — Official Website",
        url: "https://azure.microsoft.com/",
        status: "Офіційний сайт",
        purpose: "Головний портал Azure: сервіси, продукти, документація",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["azure", "cloud", "official", "homepage"]
    },
    {
        name: "Azure Documentation",
        url: "https://learn.microsoft.com/en-us/azure/",
        status: "Офіційна документація",
        purpose: "Повний довідник Azure: compute, storage, networking, AI",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["azure", "docs", "official", "reference"]
    },
    {
        name: "Azure Architecture Center",
        url: "https://learn.microsoft.com/en-us/azure/architecture/",
        status: "Офіційний ресурс",
        purpose: "Архітектурні гіди, best practices, cloud‑patterns",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["azure", "architecture", "best practices"]
    },
    {
        name: "Azure vs GCP — Official Comparison",
        url: "https://learn.microsoft.com/en-us/azure/architecture/gcp-professional/services",
        status: "Офіційний ресурс",
        purpose: "Порівняння Azure та Google Cloud від Microsoft",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["azure", "gcp", "comparison", "official"]
    },
    /* ---------------- CLOUD: GOOGLE CLOUD (GCP) ---------------- */
    {
        name: "Google Cloud — Official Website",
        url: "https://cloud.google.com/",
        status: "Офіційний сайт",
        purpose: "Головний портал GCP: сервіси, продукти, документація",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["gcp", "google cloud", "cloud", "official"]
    },
    {
        name: "Google Cloud Documentation",
        url: "https://cloud.google.com/docs",
        status: "Офіційна документація",
        purpose: "Повний довідник GCP: compute, storage, networking, AI",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["gcp", "docs", "official", "reference"]
    },
    {
        name: "Google Cloud Architecture Framework",
        url: "https://cloud.google.com/architecture/framework",
        status: "Офіційний ресурс",
        purpose: "Архітектурні принципи та best practices GCP",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["gcp", "architecture", "best practices"]
    },
    /* ---------------- ДОДАТКОВІ АВТОРИТЕТНІ РЕСУРСИ ---------------- */
    {
        name: "Dataquest — Cloud Providers Overview",
        url: "https://www.dataquest.io/blog/cloud-providers-aws-azure-gcp/",
        status: "Аналітичний ресурс",
        purpose: "Огляд AWS, Azure, GCP та їх ключових сервісів",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["cloud", "aws", "azure", "gcp", "analysis"]
    },
    {
        name: "DataCamp — AWS vs Azure vs GCP",
        url: "https://www.datacamp.com/blog/aws-vs-azure-vs-gcp",
        status: "Аналітичний ресурс",
        purpose: "Порівняння трьох провідних cloud‑платформ",
        rating: "⭐⭐⭐⭐⭐",
        category: "cloud",
        tags: ["cloud", "comparison", "aws", "azure", "gcp"]
    },
    /* ---------------- УКРАЇНОМОВНІ ПЕРЕВІРЕНІ РЕСУРСИ ---------------- */
    {
        name: "Вікіпедія (укр) — Хмарні обчислення",
        url: "https://uk.wikipedia.org/wiki/Хмарні_обчислення",
        status: "Україномовний ресурс",
        purpose: "Огляд cloud‑технологій українською",
        rating: "⭐⭐⭐⭐",
        category: "cloud",
        tags: ["cloud", "ukrainian", "encyclopedia", "verified"]
    },
    {
        name: "Вікіпедія (укр) — Amazon Web Services",
        url: "https://uk.wikipedia.org/wiki/Amazon_Web_Services",
        status: "Україномовний ресурс",
        purpose: "Огляд AWS українською",
        rating: "⭐⭐⭐⭐",
        category: "cloud",
        tags: ["aws", "ukrainian", "encyclopedia", "verified"]
    },
    {
        name: "Вікіпедія (укр) — Microsoft Azure",
        url: "https://uk.wikipedia.org/wiki/Microsoft_Azure",
        status: "Україномовний ресурс",
        purpose: "Огляд Azure українською",
        rating: "⭐⭐⭐⭐",
        category: "cloud",
        tags: ["azure", "ukrainian", "encyclopedia", "verified"]
    },
    {
        name: "Вікіпедія (укр) — Google Cloud Platform",
        url: "https://uk.wikipedia.org/wiki/Google_Cloud_Platform",
        status: "Україномовний ресурс",
        purpose: "Огляд GCP українською",
        rating: "⭐⭐⭐⭐",
        category: "cloud",
        tags: ["gcp", "ukrainian", "encyclopedia", "verified"]
    },
    /* ---------------- AI / MACHINE LEARNING ---------------- */
    /* ОФІЦІЙНІ ПЛАТФОРМИ ТА СТАНДАРТИ */
    {
        name: "Microsoft AI Learning Resources",
        url: "https://learn.microsoft.com/en-us/ai/ai-resources/",
        status: "Офіційна платформа",
        purpose: "Офіційні ресурси Microsoft для AI/ML, навчання, документації, інструментів",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "ml", "microsoft", "official", "learning"]
    },
    {
        name: "Microsoft AI — Copilot",
        url: "https://learn.microsoft.com/en-us/copilot/",
        status: "Офіційна платформа",
        purpose: "Офіційні ресурси Microsoft для AI/ML, навчання, документації, інструментів",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "ml", "microsoft", "official", "learning", "copilot"]
    },
    {
        name: "Google Machine Learning Resources",
        url: "https://developers.google.com/machine-learning/resources",
        status: "Офіційна документація",
        purpose: "Офіційні ресурси Google з ML, LLM, безпеки AI",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "ml", "google", "official", "learning"]
    },
    {
        name: "OWASP GenAI Security Project",
        url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        status: "Офіційний стандарт",
        purpose: "Безпека генеративного AI, ризики LLM, рекомендації",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "security", "owasp", "llm", "official"]
    },
    /* ФРЕЙМВОРКИ ТА БІБЛІОТЕКИ */
    {
        name: "TensorFlow — Official Documentation",
        url: "https://www.tensorflow.org/",
        status: "Офіційна документація",
        purpose: "Головний фреймворк ML від Google",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "ml", "tensorflow", "deep learning"]
    },
    {
        name: "PyTorch — Official Documentation",
        url: "https://pytorch.org/docs/stable/index.html",
        status: "Офіційна документація",
        purpose: "Фреймворк глибинного навчання від Meta",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "ml", "pytorch", "deep learning"]
    },
    {
        name: "HuggingFace — Transformers",
        url: "https://huggingface.co/docs/transformers/index",
        status: "Офіційна документація",
        purpose: "Найпопулярніша бібліотека LLM та NLP",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "ml", "huggingface", "transformers", "llm"]
    },
    {
        name: "Scikit‑Learn — Official Documentation",
        url: "https://scikit-learn.org/stable/",
        status: "Офіційна документація",
        purpose: "Класичні ML‑алгоритми: класифікація, регресія, кластеризація",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "ml", "scikit-learn", "python"]
    },
    /* МОДЕЛІ ТА API */
    {
        name: "OpenAI — Official Documentation",
        url: "https://platform.openai.com/docs",
        status: "Офіційна документація",
        purpose: "Документація API, моделі GPT, інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "openai", "gpt", "api"]
    },
    {
        name: "Anthropic Claude — Official Documentation",
        url: "https://docs.anthropic.com/",
        status: "Офіційна документація",
        purpose: "Документація Claude, API, моделі",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "anthropic", "claude", "api"]
    },
    {
        name: "Claude Developer Platform",
        url: "https://platform.claude.com/docs/en/home",
        status: "Офіційна документація",
        purpose: "Документація Claude, API, моделі",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "anthropic", "claude", "api", "developer"]
    },
    {
        name: "Google Gemini — Official Documentation",
        url: "https://ai.google.dev/",
        status: "Офіційна документація",
        purpose: "Документація моделей Gemini, API, інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "google", "gemini", "api"]
    },
    {
        name: "Google Gemini — API Documentation",
        url: "https://ai.google.dev/gemini-api/docs",
        status: "Офіційна документація",
        purpose: "Документація моделей Gemini, API, інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "google", "gemini", "api", "docs"]
    },
    {
        name: "Perplexity — AI Model",
        url: "https://www.perplexity.ai/",
        status: "Офіційна платформа",
        purpose: "Модель штучного інтелекту",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "perplexity", "learning", "api", "docs"]
    },
    {
        name: "DeepSeek — AI Model",
        url: "https://api-docs.deepseek.com/",
        status: "Офіційна документація",
        purpose: "Документація моделі DeepSeek",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "deepseek", "learning", "api", "docs"]
    },
    {
        name: "Grok — AI Model",
        url: "https://x.ai/api",
        status: "Офіційна документація",
        purpose: "Документація моделі Grok",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "grok", "learning", "api", "docs", "elon", "mask"]
    },
    /* НАВЧАЛЬНІ РЕСУРСИ */
    {
        name: "W3Schools.com — AI Tutorial",
        url: "https://www.w3schools.com/ai/",
        status: "Навчальний ресурс",
        purpose: "Просте навчання AI, ML, нейронних мереж",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "tutorial", "learning"]
    },
    {
        name: "W3Schools.com — Machine Learning Tutorial",
        url: "https://www.w3schools.com/python/python_ml_getting_started.asp",
        status: "Навчальний ресурс",
        purpose: "ML на Python: моделі, алгоритми, приклади",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["w3schools", "ai", "ml", "tutorial", "python"]
    },
    {
        name: "W3SchoolsUA — AI Підручник (українською)",
        url: "https://w3schoolsua.github.io/ai/index.html",
        status: "Україномовний ресурс",
        purpose: "Українські уроки з AI, ML, Python, Data Science",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["w3schoolsua", "ai", "ml", "ukrainian", "tutorial", "verified", "уроки", "для початківців", "українською", "машинне", "навчання", "штучний", "інтелект"]
    },
    {
        name: "freeCodeCamp — Machine Learning",
        url: "https://www.freecodecamp.org/learn/",
        status: "Популярний навчальний ресурс",
        purpose: "Безкоштовні курси з ML, Python, нейронних мереж",
        rating: "⭐⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "ml", "learning", "courses"]
    },
    /* УКРАЇНОМОВНІ ПЕРЕВІРЕНІ РЕСУРСИ */
    {
        name: "Вікіпедія (укр) — Штучний інтелект",
        url: "https://uk.wikipedia.org/wiki/Штучний_інтелект",
        status: "Україномовний ресурс",
        purpose: "Огляд AI українською",
        rating: "⭐⭐⭐⭐",
        category: "ai",
        tags: ["ai", "ukrainian", "encyclopedia", "verified"]
    },
    {
        name: "Вікіпедія (укр) — Машинне навчання",
        url: "https://uk.wikipedia.org/wiki/Машинне_навчання",
        status: "Україномовний ресурс",
        purpose: "Огляд ML українською",
        rating: "⭐⭐⭐⭐",
        category: "ai",
        tags: ["ml", "ukrainian", "encyclopedia", "verified"]
    },
    /* ---------------- DATABASES: POSTGRESQL ---------------- */
    {
        name: "PostgreSQL — Official Website",
        url: "https://www.postgresql.org/",
        status: "Офіційний сайт",
        purpose: "Головний портал PostgreSQL: документація, завантаження, новини",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["postgresql", "official", "database", "docs"]
    },
    {
        name: "PostgreSQL Documentation",
        url: "https://www.postgresql.org/docs/",
        status: "Офіційна документація",
        purpose: "Повний довідник PostgreSQL: SQL, конфігурація, оптимізація",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["postgresql", "docs", "official", "reference"]
    },
    {
        name: "PostgreSQL GitHub Repository",
        url: "https://github.com/postgres/postgres",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код PostgreSQL",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["postgresql", "github", "repository"]
    },
    /* ---------------- DATABASES: MYSQL ---------------- */
    {
        name: "MySQL — Official Website",
        url: "https://www.mysql.com/",
        status: "Офіційний сайт",
        purpose: "Головний портал MySQL: продукти, документація, завантаження",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["mysql", "official", "database"]
    },
    {
        name: "MySQL Documentation",
        url: "https://dev.mysql.com/doc/",
        status: "Офіційна документація",
        purpose: "Повний довідник MySQL: SQL, адміністрування, реплікація",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["mysql", "docs", "official", "reference"]
    },
    {
        name: "MySQL GitHub Repository",
        url: "https://github.com/mysql/mysql-server",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код MySQL Server",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["mysql", "github", "repository"]
    },
    /* ---------------- DATABASES: MONGODB ---------------- */
    {
        name: "MongoDB — Official Website",
        url: "https://www.mongodb.com/",
        status: "Офіційний сайт",
        purpose: "Головний портал MongoDB: продукти, документація, хмарні сервіси",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["mongodb", "official", "database", "nosql"]
    },
    {
        name: "MongoDB Documentation",
        url: "https://www.mongodb.com/docs/",
        status: "Офіційна документація",
        purpose: "Документація MongoDB: CRUD, індекси, агрегації",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["mongodb", "docs", "official", "reference"]
    },
    {
        name: "MongoDB GitHub Repository",
        url: "https://github.com/mongodb/mongo",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код MongoDB",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["mongodb", "github", "repository"]
    },
    /* ---------------- DATABASES: REDIS ---------------- */
    {
        name: "Redis — Official Website",
        url: "https://redis.io/",
        status: "Офіційний сайт",
        purpose: "Головний портал Redis: документація, модулі, інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["redis", "official", "database", "in-memory"]
    },
    {
        name: "Redis Documentation",
        url: "https://redis.io/docs/",
        status: "Офіційна документація",
        purpose: "Документація Redis: команди, конфігурація, кластери",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["redis", "docs", "official", "reference"]
    },
    {
        name: "Redis GitHub Repository",
        url: "https://github.com/redis/redis",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код Redis",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["redis", "github", "repository"]
    },
    /* ---------------- ДОДАТКОВІ АВТОРИТЕТНІ РЕСУРСИ ---------------- */
    {
        name: "MDN Web Docs — Databases",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Database",
        status: "Авторитетна документація",
        purpose: "Огляд баз даних, SQL, NoSQL",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["database", "mdn", "docs"]
    },
    {
        name: "W3Schools — SQL Tutorial",
        url: "https://www.w3schools.com/sql/",
        status: "Навчальний ресурс",
        purpose: "Просте навчання SQL",
        rating: "⭐⭐⭐⭐",
        category: "databases",
        tags: ["sql", "tutorial", "learning"]
    },
    {
        name: "W3Schools — MongoDB Tutorial",
        url: "https://www.w3schools.com/mongodb/",
        status: "Навчальний ресурс",
        purpose: "Основи MongoDB",
        rating: "⭐⭐⭐⭐",
        category: "databases",
        tags: ["mongodb", "tutorial", "learning"]
    },
    {
        name: "W3SchoolsUA — MongoDB Підручник",
        url: "https://w3schoolsua.github.io/mongodb/index.html",
        status: "Україномовний ресурс",
        purpose: "Уроки MongoDB для початківців українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "databases",
        tags: ["підручник", "w3schoolsua", "mongodb", "ukrainian", "tutorial", "уроки", "для початківців", "українською"]
    },
    /* ---------------- УКРАЇНОМОВНІ ПЕРЕВІРЕНІ РЕСУРСИ ---------------- */
    {
        name: "Вікіпедія (укр) — PostgreSQL",
        url: "https://uk.wikipedia.org/wiki/PostgreSQL",
        status: "Україномовний ресурс",
        purpose: "Огляд PostgreSQL українською",
        rating: "⭐⭐⭐⭐",
        category: "databases",
        tags: ["postgresql", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — MySQL",
        url: "https://uk.wikipedia.org/wiki/MySQL",
        status: "Україномовний ресурс",
        purpose: "Огляд MySQL українською",
        rating: "⭐⭐⭐⭐",
        category: "databases",
        tags: ["mysql", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — MongoDB",
        url: "https://uk.wikipedia.org/wiki/MongoDB",
        status: "Україномовний ресурс",
        purpose: "Огляд MongoDB українською",
        rating: "⭐⭐⭐⭐",
        category: "databases",
        tags: ["mongodb", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — Redis",
        url: "https://uk.wikipedia.org/wiki/Redis",
        status: "Україномовний ресурс",
        purpose: "Огляд Redis українською",
        rating: "⭐⭐⭐⭐",
        category: "databases",
        tags: ["redis", "ukrainian", "encyclopedia"]
    },
    /* ---------------- DEVOPS ---------------- */
    /* ОФІЦІЙНІ ДЖЕРЕЛА ТА СТАНДАРТИ */
    {
        name: "DevOps — Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/devops/",
        status: "Офіційна документація",
        purpose: "Офіційні матеріали Microsoft по DevOps, CI/CD, GitOps, інструментах",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "microsoft", "official", "docs", "cicd", "офіційний", "стандарт"]
    },
    {
        name: "AWS DevOps Documentation",
        url: "https://aws.amazon.com/devops/",
        status: "Офіційна документація",
        purpose: "DevOps‑практики та інструменти AWS: CI/CD, CloudFormation, CodePipeline",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "aws", "cloud", "official", "офіційна", "документація"]
    },
    {
        name: "Google Cloud DevOps",
        url: "https://cloud.google.com/devops",
        status: "Офіційна документація",
        purpose: "DevOps‑гайди Google: SRE, CI/CD, автоматизація",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "google", "sre", "cloud", "official", "офіційна", "документація"]
    },
    {
        name: "DevOps — Red Hat",
        url: "https://www.redhat.com/en/topics/devops",
        status: "Офіційний ресурс",
        purpose: "DevOps‑підхід, інструменти, автоматизація, контейнеризація",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "redhat", "linux", "automation", "офіційна", "документація"]
    },
    /* CI/CD ТА АВТОМАТИЗАЦІЯ */
    {
        name: "Jenkins Documentation",
        url: "https://www.jenkins.io/doc/",
        status: "Офіційна документація",
        purpose: "Документація Jenkins — найпопулярнішої CI/CD системи",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "jenkins", "cicd", "automation", "офіційна", "документація"]
    },
    {
        name: "GitHub Actions Documentation",
        url: "https://docs.github.com/en/actions",
        status: "Офіційна документація",
        purpose: "Автоматизація CI/CD у GitHub",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "github", "actions", "cicd", "офіційна", "документація"]
    },
    {
        name: "GitLab CI/CD Documentation",
        url: "https://docs.gitlab.com/ee/ci/",
        status: "Офіційна документація",
        purpose: "CI/CD пайплайни GitLab",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "gitlab", "cicd", "automation", "офіційна", "документація"]
    },
    /* КОНТЕЙНЕРИ ТА ОРКЕСТРАЦІЯ */
    {
        name: "Docker Documentation",
        url: "https://docs.docker.com/",
        status: "Офіційна документація",
        purpose: "Документація Docker: контейнери, Dockerfile, Compose",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "docker", "containers", "official", "офіційна", "документація"]
    },
    {
        name: "Kubernetes Documentation",
        url: "https://kubernetes.io/docs/",
        status: "Офіційна документація",
        purpose: "Документація Kubernetes: деплой, сервіс‑меш, масштабування",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "kubernetes", "k8s", "orchestration", "офіційна", "документація"]
    },
    {
        name: "Helm Documentation",
        url: "https://helm.sh/docs/",
        status: "Офіційна документація",
        purpose: "Пакетний менеджер для Kubernetes",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "helm", "kubernetes", "charts", "офіційна", "документація"]
    },
    /* ІНФРАСТРУКТУРА ЯК КОД (IaC) */
    {
        name: "Terraform Documentation",
        url: "https://developer.hashicorp.com/terraform/docs",
        status: "Офіційна документація",
        purpose: "Інфраструктура як код для будь‑яких хмар",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "terraform", "iac", "hashicorp", "офіційна", "документація"]
    },
    {
        name: "Ansible Documentation",
        url: "https://docs.ansible.com/",
        status: "Офіційна документація",
        purpose: "Автоматизація конфігурацій та розгортання",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "ansible", "automation", "iac", "офіційна", "документація"]
    },
    {
        name: "Puppet Documentation",
        url: "https://www.puppet.com/docs",
        status: "Офіційна документація",
        purpose: "Конфігураційний менеджмент для великих інфраструктур",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "puppet", "automation", "iac", "офіційна", "документація"]
    },
    /* SRE (Site Reliability Engineering) */
    {
        name: "Google SRE Book (Official)",
        url: "https://sre.google/books/",
        status: "Офіційна книга",
        purpose: "Книга Google про SRE — основа сучасного DevOps",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "sre", "google", "book", "офіційна", "книга"]
    },
    {
        name: "The DevOps Handbook",
        url: "https://itrevolution.com/product/the-devops-handbook/",
        status: "Авторитетна книга",
        purpose: "Одна з найважливіших книг по DevOps",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "book", "handbook", "best practices", "навчання", "книга"]
    },
    /* СПОСТЕРЕЖЕННЯ, ЛОГІНГ, МОНІТОРИНГ */
    {
        name: "Prometheus Documentation",
        url: "https://prometheus.io/docs/",
        status: "Офіційна документація",
        purpose: "Моніторинг та алертинг для DevOps",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "prometheus", "monitoring", "офіційна", "документація"]
    },
    {
        name: "Grafana Documentation",
        url: "https://grafana.com/docs/",
        status: "Офіційна документація",
        purpose: "Візуалізація метрик, дашборди",
        rating: "⭐⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "grafana", "monitoring", "visualization", "офіційна", "документація"]
    },
    /* УКРАЇНОМОВНІ ПЕРЕВІРЕНІ РЕСУРСИ */
    {
        name: "Вікіпедія (укр) — DevOps",
        url: "https://uk.wikipedia.org/wiki/DevOps",
        status: "Україномовний ресурс",
        purpose: "Огляд DevOps українською: історія, принципи, інструменти",
        rating: "⭐⭐⭐⭐",
        category: "devops",
        tags: ["devops", "ukrainian", "encyclopedia", "overview", "verified", "вікіпедія", "українською"]
    },
    /* ---------------- Web API ---------------- */
    {
        name: "MDN Web Docs — Web APIs",
        url: "https://developer.mozilla.org/docs/Web/API",
        status: "Де-факто стандарт документації",
        purpose: "Документація по браузерним API",
        rating: "⭐⭐⭐⭐⭐",
        category: "api",
        tags: ["mdn", "web", "api", "docs", "документація", "браузери", "Mozilla", "стандарт", "специфікація", "standard"]
    },
    {
        name: "WHATWG Fetch Standard",
        url: "https://fetch.spec.whatwg.org/",
        status: "Офіційний",
        purpose: "Стандарт Fetch API",
        rating: "⭐⭐⭐⭐",
        category: "api",
        tags: ["fetch", "web", "whatwg", "oficial", "офіційний", "сайт", "html", "стандарт", "специфікація", "standard"]
    },
    {
        name: "WHATWG URL Standard",
        url: "https://url.spec.whatwg.org/",
        status: "Офіційний",
        purpose: "Стандарт URL API",
        rating: "⭐⭐⭐⭐",
        category: "api",
        tags: ["url", "web", "whatwg", "oficial", "офіційний", "сайт", "html", "стандарт", "специфікація", "браузери"]
    },
    /* ---------------- REST ---------------- */
    {
        name: "REST — Roy Fielding Dissertation",
        url: "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm",
        status: "Офіційне джерело",
        purpose: "Оригінальна робота Роя Філдінга, де описано REST",
        rating: "⭐⭐⭐⭐⭐",
        category: "api",
        tags: ["rest", "official", "architecture", "fielding"]
    },
    {
        name: "REST API Tutorial",
        url: "https://restfulapi.net/",
        status: "Авторитетний ресурс",
        purpose: "Докладні пояснення REST, HTTP‑методів, статус‑кодів",
        rating: "⭐⭐⭐⭐⭐",
        category: "api",
        tags: ["rest", "tutorial", "http"]
    },
    {
        name: "MDN Web Docs — REST",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
        status: "Авторитетна документація",
        purpose: "Огляд REST від Mozilla MDN",
        rating: "⭐⭐⭐⭐⭐",
        category: "api",
        tags: ["rest", "mdn", "docs"]
    },
    /* ---------------- GRAPHQL ---------------- */
    {
        name: "GraphQL — Official Website",
        url: "https://graphql.org/",
        status: "Офіційний сайт",
        purpose: "Головний портал GraphQL: документація, гіди, API",
        rating: "⭐⭐⭐⭐⭐",
        category: "api",
        tags: ["graphql", "official", "docs"]
    },
    {
        name: "GraphQL Specification",
        url: "https://spec.graphql.org/",
        status: "Офіційна специфікація",
        purpose: "Формальна специфікація GraphQL",
        rating: "⭐⭐⭐⭐⭐",
        category: "api",
        tags: ["graphql", "specification", "standard"]
    },
    {
        name: "GraphQL GitHub Repository",
        url: "https://github.com/graphql/graphql-spec",
        status: "Офіційний репозиторій",
        purpose: "Специфікація GraphQL, RFC, issues",
        rating: "⭐⭐⭐⭐⭐",
        category: "api",
        tags: ["graphql", "github", "repository"]
    },
    /* ---------------- gRPC ---------------- */
    {
        name: "gRPC — Official Documentation",
        url: "https://grpc.io/docs/",
        status: "Офіційна документація",
        purpose: "Документація gRPC: концепції, API, приклади",
        rating: "⭐⭐⭐⭐⭐",
        category: "api",
        tags: ["grpc", "official", "docs"]
    },
    {
        name: "gRPC GitHub Repository",
        url: "https://github.com/grpc/grpc",
        status: "Офіційний репозиторій",
        purpose: "Вихідний код gRPC",
        rating: "⭐⭐⭐⭐⭐",
        category: "api",
        tags: ["grpc", "github", "repository"]
    },
    /* ---------------- API DESIGN & BEST PRACTICES ---------------- */
    {
        name: "Microsoft REST API Guidelines",
        url: "https://github.com/microsoft/api-guidelines",
        status: "Офіційний стандарт",
        purpose: "REST‑гайдлайни Microsoft",
        rating: "⭐⭐⭐⭐⭐",
        category: "api",
        tags: ["rest", "microsoft", "guidelines"]
    },
    {
        name: "Google API Design Guide",
        url: "https://cloud.google.com/apis/design",
        status: "Офіційна документація",
        purpose: "API‑гайдлайни Google",
        rating: "⭐⭐⭐⭐⭐",
        category: "api",
        tags: ["api", "google", "design"]
    },
    {
        name: "OpenAPI Specification",
        url: "https://www.openapis.org/",
        status: "Офіційний стандарт",
        purpose: "Стандарт опису REST API",
        rating: "⭐⭐⭐⭐⭐",
        category: "api",
        tags: ["rest", "openapi", "specification"]
    },
    /* ---------------- НАВЧАЛЬНІ РЕСУРСИ ---------------- */
    {
        name: "W3Schools — REST API Tutorial",
        url: "https://www.w3schools.com/js/js_api_fetch.asp",
        status: "Навчальний ресурс",
        purpose: "Основи REST API через Fetch API",
        rating: "⭐⭐⭐⭐",
        category: "api",
        tags: ["rest", "w3schools", "tutorial"]
    },
    /* ---------------- УКРАЇНОМОВНІ ПЕРЕВІРЕНІ РЕСУРСИ ---------------- */
    {
        name: "Вікіпедія (укр) — REST",
        url: "https://uk.wikipedia.org/wiki/REST",
        status: "Україномовний ресурс",
        purpose: "Огляд REST українською",
        rating: "⭐⭐⭐⭐",
        category: "api",
        tags: ["rest", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — GraphQL",
        url: "https://uk.wikipedia.org/wiki/GraphQL",
        status: "Україномовний ресурс",
        purpose: "Огляд GraphQL українською",
        rating: "⭐⭐⭐⭐",
        category: "api",
        tags: ["graphql", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — gRPC",
        url: "https://uk.wikipedia.org/wiki/GRPC",
        status: "Україномовний ресурс",
        purpose: "Огляд gRPC українською",
        rating: "⭐⭐⭐⭐",
        category: "api",
        tags: ["grpc", "ukrainian", "encyclopedia"]
    },
    /* ---------------- BIG DATA — ОФІЦІЙНІ ДЖЕРЕЛА ---------------- */
    {
        name: "Oracle Big Data Documentation",
        url: "https://docs.oracle.com/en/bigdata/",
        status: "Офіційна документація",
        purpose: "Офіційні матеріали Oracle з Big Data, Hadoop, Kafka, NoSQL",
        rating: "⭐⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["big data", "oracle", "official", "docs"]
    },
    {
        name: "Microsoft Azure — Data Engineering Learning Path",
        url: "https://learn.microsoft.com/en-us/training/paths/get-started-data-engineering/",
        status: "Офіційна документація",
        purpose: "Офіційний курс Microsoft з Data Engineering",
        rating: "⭐⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["azure", "data engineering", "official", "learning"]
    },
    {
        name: "Databricks — Big Book of Data Engineering",
        url: "https://www.databricks.com/resources/ebook/big-book-of-data-engineering",
        status: "Офіційний ресурс",
        purpose: "Найавторитетніший гайд з Data Engineering",
        rating: "⭐⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["databricks", "data engineering", "official", "ebook"]
    },
    /* ---------------- BIG DATA — ТЕХНОЛОГІЇ ---------------- */
    {
        name: "Apache Hadoop — Official Documentation",
        url: "https://hadoop.apache.org/docs/",
        status: "Офіційна документація",
        purpose: "Документація Hadoop: HDFS, MapReduce, YARN",
        rating: "⭐⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["hadoop", "apache", "big data", "docs"]
    },
    {
        name: "Apache Spark — Official Documentation",
        url: "https://spark.apache.org/docs/latest/",
        status: "Офіційна документація",
        purpose: "Документація Spark: SQL, MLlib, Streaming",
        rating: "⭐⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["spark", "apache", "big data", "docs"]
    },
    {
        name: "Apache Kafka — Official Documentation",
        url: "https://kafka.apache.org/documentation/",
        status: "Офіційна документація",
        purpose: "Документація Kafka: streaming, messaging, connectors",
        rating: "⭐⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["kafka", "apache", "streaming", "docs"]
    },
    {
        name: "Apache Airflow — Official Documentation",
        url: "https://airflow.apache.org/docs/",
        status: "Офіційна документація",
        purpose: "Оркестрація пайплайнів даних",
        rating: "⭐⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["airflow", "apache", "orchestration", "docs"]
    },
    {
        name: "Apache Flink — Official Documentation",
        url: "https://nightlies.apache.org/flink/flink-docs-master/",
        status: "Офіційна документація",
        purpose: "Стрімінгова обробка даних у реальному часі",
        rating: "⭐⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["flink", "apache", "streaming", "docs"]
    },
    /* ---------------- DATA ENGINEERING — ПРАКТИКА ---------------- */
    {
        name: "GitHub — Big Data Engineering Roadmap",
        url: "https://github.com/theengineerguy-yt/Big-Data-Engineer-Roadmap-with-Free-Resources",
        status: "Авторитетний ресурс",
        purpose: "Роадмап Data Engineer з безкоштовними ресурсами",
        rating: "⭐⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["data engineering", "roadmap", "github"]
    },
    {
        name: "Informatica — What is Big Data Engineering?",
        url: "https://www.informatica.com/resources/articles/what-is-big-data-engineering.html.html",
        status: "Аналітичний ресурс",
        purpose: "Огляд Big Data Engineering та ключових концепцій",
        rating: "⭐⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["big data", "data engineering", "analysis"]
    },
    /* ---------------- НАВЧАЛЬНІ РЕСУРСИ ---------------- */
    {
        name: "W3Schools — SQL Tutorial",
        url: "https://www.w3schools.com/sql/",
        status: "Навчальний ресурс",
        purpose: "Основи SQL — ключова навичка Data Engineer",
        rating: "⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["sql", "tutorial", "learning"]
    },
    {
        name: "W3Schools — Python for Data",
        url: "https://www.w3schools.com/python/python_ml_getting_started.asp",
        status: "Навчальний ресурс",
        purpose: "Python для ML та обробки даних",
        rating: "⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["python", "data", "tutorial"]
    },
    {
        name: "W3SchoolsUA — SQL, Python, Data (Українською)",
        url: "https://w3schoolsua.github.io/python/index.html",
        status: "Україномовний ресурс",
        purpose: "Українські уроки SQL, Python, Data Science",
        rating: "⭐⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["w3schoolsua", "sql", "python", "ukrainian", "tutorial", "українською"]
    },
    {
        name: "Вікіпедія (укр) — Big Data",
        url: "https://uk.wikipedia.org/wiki/Великі_дані",
        status: "Україномовний ресурс",
        purpose: "Огляд Big Data українською",
        rating: "⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["big data", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — Data Engineering",
        url: "https://uk.wikipedia.org/wiki/Інженерія_даних",
        status: "Україномовний ресурс",
        purpose: "Огляд Data Engineering українською",
        rating: "⭐⭐⭐⭐",
        category: "bigdata",
        tags: ["data engineering", "ukrainian", "encyclopedia"]
    },
    /* ---------------- DATA SCIENCE — ОФІЦІЙНІ ПЛАТФОРМИ ---------------- */
    {
        name: "Microsoft Fabric — Data Science",
        url: "https://learn.microsoft.com/en-us/fabric/data-science/",
        status: "Офіційна документація",
        purpose: "Офіційні матеріали Microsoft з Data Science, ML, аналітики",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["data science", "microsoft", "official", "docs"]
    },
    {
        name: "Google — Data Science & Machine Learning",
        url: "https://developers.google.com/machine-learning",
        status: "Офіційна документація",
        purpose: "Офіційні ресурси Google з ML, Data Science, аналітики",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["google", "data science", "ml", "official"]
    },
    {
        name: "IBM Data Science",
        url: "https://www.ibm.com/analytics/data-science",
        status: "Офіційний ресурс",
        purpose: "Матеріали IBM з Data Science, AI, аналітики",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["ibm", "data science", "analytics", "official"]
    },
    /* ---------------- DATA SCIENCE — ІНСТРУМЕНТИ ТА БІБЛІОТЕКИ ---------------- */
    {
        name: "NumPy — Official Documentation",
        url: "https://numpy.org/doc/",
        status: "Офіційна документація",
        purpose: "Бібліотека для наукових обчислень у Python",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["numpy", "python", "official", "docs"]
    },
    {
        name: "Pandas — Official Documentation",
        url: "https://pandas.pydata.org/docs/",
        status: "Офіційна документація",
        purpose: "Бібліотека для аналізу даних у Python",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["pandas", "python", "data analysis", "official"]
    },
    {
        name: "SciPy — Official Documentation",
        url: "https://docs.scipy.org/doc/scipy/",
        status: "Офіційна документація",
        purpose: "Наукові обчислення, статистика, оптимізація",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["scipy", "python", "official", "docs"]
    },
    {
        name: "Matplotlib — Official Documentation",
        url: "https://matplotlib.org/stable/contents.html",
        status: "Офіційна документація",
        purpose: "Візуалізація даних у Python",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["matplotlib", "python", "visualization", "official"]
    },
    {
        name: "Seaborn — Official Documentation",
        url: "https://seaborn.pydata.org/",
        status: "Офіційна документація",
        purpose: "Статистична візуалізація даних",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["seaborn", "python", "visualization", "official"]
    },
    {
        name: "Jupyter — Official Documentation",
        url: "https://jupyter.org/",
        status: "Офіційна документація",
        purpose: "Jupyter Notebooks — основний інструмент Data Scientist",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["jupyter", "notebooks", "python", "official"]
    },
    /* ---------------- DATA SCIENCE — ПЛАТФОРМИ ТА ПРАКТИКА ---------------- */
    {
        name: "Kaggle — Learn Data Science",
        url: "https://www.kaggle.com/learn",
        status: "Авторитетний ресурс",
        purpose: "Курси, змагання, датасети",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["kaggle", "learning", "datasets", "competitions"]
    },
    {
        name: "Datacamp — Data Science Courses",
        url: "https://www.datacamp.com/",
        status: "Навчальна платформа",
        purpose: "Курси з Python, R, SQL, Data Science",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["datacamp", "courses", "data science"]
    },
    {
        name: "Analytics Vidhya",
        url: "https://www.analyticsvidhya.com/",
        status: "Авторитетний ресурс",
        purpose: "Статті, гайди, туторіали з Data Science",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["analytics", "data science", "learning"]
    },
    /* ---------------- DATA ANALYTICS ---------------- */
    {
        name: "Google Analytics Academy",
        url: "https://analytics.google.com/analytics/academy/",
        status: "Офіційний ресурс",
        purpose: "Курси з веб‑аналітики від Google",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["analytics", "google", "official"]
    },
    {
        name: "Microsoft Power BI Documentation",
        url: "https://learn.microsoft.com/en-us/power-bi/",
        status: "Офіційна документація",
        purpose: "Аналітика, BI, візуалізація даних",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["power bi", "analytics", "microsoft", "official"]
    },
    {
        name: "Tableau — Official Documentation",
        url: "https://help.tableau.com/current/guides/e-learning/en-us/tableau_overview.htm",
        status: "Офіційна документація",
        purpose: "Візуалізація та аналітика даних",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["tableau", "analytics", "official"]
    },
    /* ---------------- НАВЧАЛЬНІ РЕСУРСИ ---------------- */
    {
        name: "W3Schools.com — Data Science Tutorial",
        url: "https://www.w3schools.com/datascience/",
        status: "Навчальний ресурс",
        purpose: "Основи Data Science, Python, статистика",
        rating: "⭐⭐⭐⭐",
        category: "datascience",
        tags: ["data science", "tutorial", "w3schools"]
    },
    {
        name: "W3Schools.com — Python for Data",
        url: "https://www.w3schools.com/python/python_ml_getting_started.asp",
        status: "Навчальний ресурс",
        purpose: "ML та аналіз даних на Python",
        rating: "⭐⭐⭐⭐",
        category: "datascience",
        tags: ["python", "ml", "tutorial"]
    },
    {
        name: "W3SchoolsUA — Data Science Підручник",
        url: "https://w3schoolsua.github.io/datascience/index.html",
        status: "Україномовний ресурс",
        purpose: "Українські уроки Python, SQL, Data Science",
        rating: "⭐⭐⭐⭐⭐",
        category: "datascience",
        tags: ["data science", "ukrainian", "tutorial", "українською", "наука про дані", "уроки"]
    },
    /* ---------------- УКРАЇНОМОВНІ ПЕРЕВІРЕНІ РЕСУРСИ ---------------- */
    {
        name: "Вікіпедія (укр) — Data Science",
        url: "https://uk.wikipedia.org/wiki/Data_science",
        status: "Україномовний ресурс",
        purpose: "Огляд Data Science українською",
        rating: "⭐⭐⭐⭐",
        category: "datascience",
        tags: ["data science", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — Аналітика даних",
        url: "https://uk.wikipedia.org/wiki/Аналіз_даних",
        status: "Україномовний ресурс",
        purpose: "Огляд Data Analytics українською",
        rating: "⭐⭐⭐⭐",
        category: "datascience",
        tags: ["analytics", "ukrainian", "encyclopedia"]
    },
    /* ---------------- Tools ---------------- */
    {
        name: "Can I Use",
        url: "https://caniuse.com/",
        status: "Авторитетний",
        purpose: "Підтримка фіч у браузерах",
        rating: "⭐⭐⭐⭐⭐",
        category: "tools",
        tags: ["tools", "caniuse", "онлайн", "підтримка", "стандарт", "інструменти", "html", "перевірка", "сумісність", "браузери"]
    },
    {
        name: "W3C Markup Validation Service",
        url: "https://validator.w3.org/",
        status: "Офіційний",
        purpose: "Валідатор HTML",
        rating: "⭐⭐⭐⭐⭐",
        category: "tools",
        tags: ["tools", "validator", "онлайн", "w3", "стандарт", "інструменти", "html", "офіційний", "валідатор"]
    },
    {
        name: "ESLint",
        url: "https://eslint.org/",
        status: "Де-факто стандарт",
        purpose: "Лінтер JavaScript",
        rating: "⭐⭐⭐⭐⭐",
        category: "tools",
        tags: ["tools", "eslint", "онлайн", "лінтер", "стандарт", "інструменти", "javascript", "js"]
    },
    {
        name: "Prettier",
        url: "https://prettier.io/",
        status: "Популярний інструмент",
        purpose: "Форматування коду",
        rating: "⭐⭐⭐⭐⭐",
        category: "tools",
        tags: ["tools", "prettier", "онлайн", "форматування", "коду", "інструменти", "кодування"]
    },
    {
        name: "CodePen",
        url: "https://codepen.io/",
        status: "Онлайн‑редактор",
        purpose: "Швидке тестування HTML/CSS/JS",
        rating: "⭐⭐⭐⭐",
        category: "tools",
        tags: ["tools", "codepen", "онлайн", "редактор", "коду", "інструменти"]
    },
    {
        name: "BeautifyTools",
        url: "https://beautifytools.com/",
        status: "Добірка інструментів",
        purpose: "Різні інструменти для кодування",
        rating: "⭐⭐⭐⭐",
        category: "tools",
        tags: ["tools", "beautify", "добірка", "інструменти", "онлайн", "покращення", "код", "кодування"]
    },
    {
        name: "Validator.schema.org",
        url: "https://validator.schema.org/",
        status: "Валідатор schema.org",
        purpose: "Перевірка валідності schema.org",
        rating: "⭐⭐⭐⭐⭐",
        category: "tools",
        tags: ["tools", "schema", "validator", "інструменти", "онлайн", "валідатор", "перевірка", "валідність"]
    },
    {
        name: "JSONFormatter",
        url: "https://jsonformatter.curiousconcept.com/",
        status: "Інструменти для роботи з JSON",
        purpose: "Робота з JSON-файлами",
        rating: "⭐⭐⭐⭐⭐",
        category: "tools",
        tags: ["tools", "json", "робота", "інструменти", "онлайн", "валідатор", "перевірка", "валідність"]
    },
    {
        name: "Search.Google - Розширені результаті",
        url: "https://search.google.com/test/rich-results",
        status: "Перевірка підтримки розширених результатів",
        purpose: "Чи підтримує ваша сторінка розширені результати?",
        rating: "⭐⭐⭐⭐⭐",
        category: "tools",
        tags: ["tools", "search", "google", "інструменти", "онлайн", "розширені", "результати", "перевірка", "тест"]
    },
    /* ---------------- Security ---------------- */
    {
        name: "OWASP Cheat Sheet Series",
        url: "https://cheatsheetseries.owasp.org/",
        status: "Де-факто стандарт",
        purpose: "Найкращі практики безпеки",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "standard", "owasp", "таблиці", "безпека"]
    },
    {
        name: "OWASP Top 10",
        url: "https://owasp.org/www-project-top-ten/",
        status: "Офіційний",
        purpose: "10 найкритичніших ризиків безпеки",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "top", "oficial", "owasp", "oficial", "безпека"]
    },
    {
        name: "MDN — Web Security",
        url: "https://developer.mozilla.org/docs/Web/Security",
        status: "Де-факто стандарт документації",
        purpose: "Документація по безпеці веб‑додатків",
        rating: "⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "web", "mdn", "стандарт", "безпека"]
    },
    {
        name: "Google Web Fundamentals — Security",
        url: "https://web.dev/secure/",
        status: "Офіційний ресурс Google",
        purpose: "Рекомендації по безпеці",
        rating: "⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "web", "google", "офіційний", "рекомендації", "безпека"]
    },
    /* ---------------- SECURITY / CYBERSECURITY ---------------- */
    /* ОФІЦІЙНІ ОРГАНІЗАЦІЇ ТА СТАНДАРТИ */
    {
        name: "NIST Cybersecurity Framework (CSF)",
        url: "https://www.nist.gov/cyberframework",
        status: "Офіційний стандарт",
        purpose: "Головний міжнародний фреймворк кібербезпеки: Identify, Protect, Detect, Respond, Recover",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "nist", "csf", "standard", "official", "офіційний", "стандарт"]
    },
    {
        name: "NIST Special Publications (SP 800 Series)",
        url: "https://csrc.nist.gov/publications/sp800",
        status: "Офіційна документація",
        purpose: "Стандарти кібербезпеки: криптографія, мережі, ризики, хмарні системи",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "nist", "sp800", "standards", "official", "офіційний", "документація"]
    },
    {
        name: "ISO/IEC 27001 Information Security Standard",
        url: "https://www.iso.org/isoiec-27001-information-security.html",
        status: "Офіційний стандарт",
        purpose: "Міжнародний стандарт управління інформаційною безпекою",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "iso27001", "standard", "official", "офіційний", "стандарт"]
    },
    {
        name: "OWASP (Open Worldwide Application Security Project)",
        url: "https://owasp.org/",
        status: "Офіційна організація",
        purpose: "Найавторитетніші ресурси з безпеки веб‑додатків",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "owasp", "web", "application security"]
    },
    {
        name: "OWASP Top 10",
        url: "https://owasp.org/www-project-top-ten/",
        status: "Офіційний стандарт",
        purpose: "Топ‑10 критичних вразливостей веб‑додатків",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["owasp", "top10", "vulnerabilities"]
    },
    {
        name: "OWASP ASVS",
        url: "https://owasp.org/www-project-application-security-verification-standard/",
        status: "Офіційний стандарт",
        purpose: "Стандарт перевірки безпеки застосунків",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["owasp", "asvs", "standard"]
    },
    {
        name: "OWASP SAMM",
        url: "https://owasp.org/www-project-samm/",
        status: "Офіційний стандарт",
        purpose: "Модель зрілості безпеки розробки",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["owasp", "samm", "security"]
    },
    /* ОФІЦІЙНІ ДЕРЖАВНІ РЕСУРСИ */
    {
        name: "CISA — Cybersecurity & Infrastructure Security Agency",
        url: "https://www.cisa.gov/",
        status: "Офіційна агенція",
        purpose: "Попередження загроз, рекомендації, інструменти, аналіз вразливостей",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "cisa", "government", "official", "офіційна", "безпека"]
    },
    {
        name: "ENISA — European Union Agency for Cybersecurity",
        url: "https://www.enisa.europa.eu/",
        status: "Офіційна агенція",
        purpose: "Європейські стандарти, рекомендації та аналітика кібербезпеки",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "enisa", "eu", "official", "офіційний", "безпека"]
    },
    /* ІНСТРУМЕНТИ ТА ПЛАТФОРМИ */
    {
        name: "Kali Linux Documentation",
        url: "https://www.kali.org/docs/",
        status: "Офіційна документація",
        purpose: "Документація найпопулярнішого дистрибутива для пентесту",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "kali", "pentest", "linux", "офіційний", "безпека", "документація"]
    },
    {
        name: "Metasploit Framework Documentation",
        url: "https://docs.metasploit.com/",
        status: "Офіційна документація",
        purpose: "Документація Metasploit — інструменту для тестування безпеки",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "metasploit", "pentest", "exploitation", "офіційний", "безпека", "фреймворк"]
    },
    {
        name: "Burp Suite Documentation",
        url: "https://portswigger.net/burp/documentation",
        status: "Офіційна документація",
        purpose: "Тестування безпеки веб‑додатків",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["burp suite", "web security", "pentest"]
    },
    {
        name: "Wireshark Documentation",
        url: "https://www.wireshark.org/docs/",
        status: "Офіційна документація",
        purpose: "Аналіз мережевого трафіку, безпека мереж",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "wireshark", "network", "analysis", "офіційний", "безпека", "документація"]
    },
    {
        name: "Shodan Documentation",
        url: "https://help.shodan.io/",
        status: "Офіційна документація",
        purpose: "Пошукова система для пристроїв IoT та відкритих портів",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "shodan", "iot", "scanning", "офіційний", "безпека", "документація"]
    },
    /* ---------------- CLOUD SECURITY ---------------- */
    {
        name: "AWS Security Documentation",
        url: "https://aws.amazon.com/security/",
        status: "Офіційна документація",
        purpose: "Безпека AWS: IAM, KMS, Shield, WAF",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["aws", "cloud security"]
    },
    {
        name: "Azure Security Documentation",
        url: "https://learn.microsoft.com/en-us/azure/security/",
        status: "Офіційна документація",
        purpose: "Безпека Azure: Identity, Defender, Governance",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["azure", "cloud security"]
    },
    {
        name: "Google Cloud Security",
        url: "https://cloud.google.com/security",
        status: "Офіційна документація",
        purpose: "Безпека GCP: IAM, DLP, Chronicle",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["gcp", "cloud security"]
    },
    /* НАВЧАЛЬНІ РЕСУРСИ */
    {
        name: "MITRE ATT&CK Framework",
        url: "https://attack.mitre.org/",
        status: "Авторитетний ресурс",
        purpose: "Каталог технік атак хакерів та методів захисту",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "mitre", "attack", "framework", "фреймворк"]
    },
    {
        name: "Cybersecurity — IBM Security Learning Academy",
        url: "https://www.securitylearningacademy.com/",
        status: "Авторитетний навчальний ресурс",
        purpose: "Безкоштовні курси з кібербезпеки від IBM",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "ibm", "learning", "courses", "безпека", "навчання"]
    },
    {
        name: "Cybrary",
        url: "https://www.cybrary.it/",
        status: "Популярний навчальний ресурс",
        purpose: "Курси з кібербезпеки, SOC, pentest, forensics",
        rating: "⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "cybrary", "learning", "courses", "навчання", "кібербезпека", "курси"]
    },
    {
        name: "SANS Institute",
        url: "https://www.sans.org/",
        status: "Авторитетна організація",
        purpose: "Найвідоміші курси та стандарти кібербезпеки",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "sans", "training", "certification", "курси", "безпека"]
    },
    {
        name: "W3Schools.com — Cyber Security Tutorial",
        url: "https://www.w3schools.com/cybersecurity/",
        status: "Навчальний ресурс",
        purpose: "Навчальний курс по Кібербезпеці",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "w3schools", "learning", "lessons", "навчання", "уроки", "для початківців"]
    },
    /* УКРАЇНОМОВНІ ПЕРЕВІРЕНІ РЕСУРСИ */
    {
        name: "W3SchoolsUA — Cyber Security Підручник",
        url: "https://w3schoolsua.github.io/cybersecurity/index.html",
        status: "Навчальний ресурс",
        purpose: "Навчальний курс по Кібербезпеці українською",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "w3schoolsua", "learning", "lessons", "навчання", "уроки", "для початківців", "українською"]
    },
    {
        name: "Вікіпедія (укр) — Кібербезпека",
        url: "https://uk.wikipedia.org/wiki/Кібербезпека",
        status: "Україномовний ресурс",
        purpose: "Огляд кібербезпеки українською: поняття, стандарти, загрози",
        rating: "⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "ukrainian", "encyclopedia", "overview", "verified", "українською", "безпека"]
    },
    {
        name: "CERT-UA — Державний центр реагування на кіберінциденти",
        url: "https://cert.gov.ua/",
        status: "Офіційний український ресурс",
        purpose: "Офіційні попередження, рекомендації та аналітика кіберзагроз",
        rating: "⭐⭐⭐⭐⭐",
        category: "security",
        tags: ["security", "ukraine", "cert", "official", "cybersecurity", "українською", "безпека"]
    },
    /* ---------------- LINUX — ОФІЦІЙНІ ДЖЕРЕЛА ---------------- */
    {
        name: "Linux Kernel — Official Website",
        url: "https://www.kernel.org/",
        status: "Офіційний сайт",
        purpose: "Головний портал Linux Kernel: релізи, документація",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["linux", "kernel", "official"]
    },
    {
        name: "Linux Documentation Project",
        url: "https://tldp.org/",
        status: "Авторитетна документація",
        purpose: "Документація Linux: HOWTO, керівництва, FAQ",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["linux", "docs", "tldp"]
    },
    {
        name: "Ubuntu Documentation",
        url: "https://help.ubuntu.com/",
        status: "Офіційна документація",
        purpose: "Документація Ubuntu: адміністрування, налаштування, сервери",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["linux", "ubuntu", "docs"]
    },
    {
        name: "Red Hat Enterprise Linux Documentation",
        url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/",
        status: "Офіційна документація",
        purpose: "Документація RHEL: безпека, адміністрування, сервери",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["linux", "redhat", "enterprise"]
    },
    {
        name: "Arch Linux Wiki",
        url: "https://wiki.archlinux.org/",
        status: "Авторитетний ресурс",
        purpose: "Найдетальніша документація Linux у світі",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["linux", "arch", "wiki"]
    },
    /* ---------------- WINDOWS — ОФІЦІЙНІ ДЖЕРЕЛА ---------------- */
    {
        name: "Microsoft Windows Documentation",
        url: "https://learn.microsoft.com/en-us/windows/",
        status: "Офіційна документація",
        purpose: "Документація Windows: адміністрування, безпека, системні інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["windows", "microsoft", "docs"]
    },
    {
        name: "Windows Command Line Documentation",
        url: "https://learn.microsoft.com/en-us/windows/terminal/command-line",
        status: "Офіційна документація",
        purpose: "Командний рядок Windows, PowerShell, Terminal",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["windows", "cli", "powershell"]
    },
    {
        name: "PowerShell Documentation",
        url: "https://learn.microsoft.com/en-us/powershell/",
        status: "Офіційна документація",
        purpose: "Документація PowerShell: команди, модулі, автоматизація",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["powershell", "windows", "automation"]
    },
    /* ---------------- UNIX — ОФІЦІЙНІ ДЖЕРЕЛА ---------------- */
    {
        name: "The Open Group — UNIX Certification",
        url: "https://www.opengroup.org/certifications/unix",
        status: "Офіційний стандарт",
        purpose: "Офіційний стандарт UNIX та сертифікація",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["unix", "standard", "official"]
    },
    {
        name: "FreeBSD Documentation",
        url: "https://docs.freebsd.org/",
        status: "Офіційна документація",
        purpose: "Документація FreeBSD: ядро, мережі, системні інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["unix", "freebsd", "docs"]
    },
    {
        name: "OpenBSD Documentation",
        url: "https://www.openbsd.org/faq/index.html",
        status: "Офіційна документація",
        purpose: "Документація OpenBSD: безпека, мережі, системні утиліти",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["unix", "openbsd", "security"]
    },
    {
        name: "NetBSD Documentation",
        url: "https://www.netbsd.org/docs/",
        status: "Офіційна документація",
        purpose: "Документація NetBSD: системи, драйвери, мережі",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["unix", "netbsd", "docs"]
    },
    /* ---------------- ДОДАТКОВІ АВТОРИТЕТНІ РЕСУРСИ ---------------- */
    {
        name: "MDN Web Docs — Operating System Concepts",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Operating_system",
        status: "Авторитетна документація",
        purpose: "Огляд операційних систем",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["os", "mdn", "docs"]
    },
    {
        name: "GeeksForGeeks — Operating Systems",
        url: "https://www.geeksforgeeks.org/operating-systems/",
        status: "Навчальний ресурс",
        purpose: "Розширені уроки з ОС: процеси, пам’ять, файлові системи",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["os", "learning", "tutorial"]
    },
    /* ---------------- iOS — ОФІЦІЙНІ ДЖЕРЕЛА ---------------- */
    {
        name: "Apple Developer — iOS",
        url: "https://developer.apple.com/ios/",
        status: "Офіційний сайт",
        purpose: "Головний портал iOS: SDK, документація, інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["ios", "apple", "official", "docs"]
    },
    {
        name: "iOS Developer Documentation",
        url: "https://developer.apple.com/documentation/",
        status: "Офіційна документація",
        purpose: "Повний довідник API для iOS, iPadOS, macOS",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["ios", "documentation", "api", "official"]
    },
    {
        name: "Human Interface Guidelines (iOS)",
        url: "https://developer.apple.com/design/human-interface-guidelines/",
        status: "Офіційний гайд",
        purpose: "Офіційні правила дизайну для iOS",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["ios", "design", "guidelines"]
    },
    /* ---------------- macOS — ОФІЦІЙНІ ДЖЕРЕЛА ---------------- */
    {
        name: "Apple Developer — macOS",
        url: "https://developer.apple.com/macos/",
        status: "Офіційний сайт",
        purpose: "Головний портал macOS: SDK, документація, інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["macos", "apple", "official", "docs"]
    },
    {
        name: "macOS Developer Documentation",
        url: "https://developer.apple.com/documentation/macos-release-notes",
        status: "Офіційна документація",
        purpose: "Документація macOS, API, release notes",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["macos", "documentation", "official"]
    },
    {
        name: "Apple Security — Platform Security",
        url: "https://support.apple.com/guide/security/welcome/web",
        status: "Офіційний ресурс",
        purpose: "Офіційна документація з безпеки iOS/macOS",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["apple", "security", "official"]
    },
    /* ---------------- ANDROID — ОФІЦІЙНІ ДЖЕРЕЛА ---------------- */
    {
        name: "Android Developers — Official Website",
        url: "https://developer.android.com/",
        status: "Офіційний сайт",
        purpose: "Головний портал Android: SDK, документація, інструменти",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["android", "google", "official", "docs"]
    },
    {
        name: "Android API Reference",
        url: "https://developer.android.com/reference",
        status: "Офіційна документація",
        purpose: "Повний довідник Android API",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["android", "api", "reference"]
    },
    {
        name: "Android Open Source Project (AOSP)",
        url: "https://source.android.com/",
        status: "Офіційний ресурс",
        purpose: "Вихідний код Android, архітектура, компоненти",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["android", "aosp", "opensource"]
    },
    {
        name: "Android Security Documentation",
        url: "https://source.android.com/security",
        status: "Офіційна документація",
        purpose: "Офіційні матеріали з безпеки Android",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["android", "security", "official"]
    },
    /* ---------------- ДОДАТКОВІ АВТОРИТЕТНІ РЕСУРСИ ---------------- */
    {
        name: "MDN Web Docs — Mobile Web",
        url: "https://developer.mozilla.org/en-US/docs/Web/Guide/Mobile",
        status: "Авторитетна документація",
        purpose: "Розробка для мобільних платформ",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["mobile", "mdn", "docs"]
    },
    {
        name: "GeeksForGeeks — Mobile Operating Systems",
        url: "https://www.geeksforgeeks.org/mobile-operating-systems/",
        status: "Навчальний ресурс",
        purpose: "Огляд мобільних ОС: Android, iOS",
        rating: "⭐⭐⭐⭐⭐",
        category: "os",
        tags: ["mobile", "os", "learning"]
    },
    /* ---------------- УКРАЇНОМОВНІ ПЕРЕВІРЕНІ РЕСУРСИ ---------------- */
    {
        name: "Вікіпедія (укр) — Linux",
        url: "https://uk.wikipedia.org/wiki/Linux",
        status: "Україномовний ресурс",
        purpose: "Огляд Linux українською",
        rating: "⭐⭐⭐⭐",
        category: "os",
        tags: ["linux", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — Windows",
        url: "https://uk.wikipedia.org/wiki/Microsoft_Windows",
        status: "Україномовний ресурс",
        purpose: "Огляд Windows українською",
        rating: "⭐⭐⭐⭐",
        category: "os",
        tags: ["windows", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — Unix",
        url: "https://uk.wikipedia.org/wiki/Unix",
        status: "Україномовний ресурс",
        purpose: "Огляд Unix українською",
        rating: "⭐⭐⭐⭐",
        category: "os",
        tags: ["unix", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — iOS",
        url: "https://uk.wikipedia.org/wiki/IOS",
        status: "Україномовний ресурс",
        purpose: "Огляд iOS українською",
        rating: "⭐⭐⭐⭐",
        category: "os",
        tags: ["ios", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — macOS",
        url: "https://uk.wikipedia.org/wiki/MacOS",
        status: "Україномовний ресурс",
        purpose: "Огляд macOS українською",
        rating: "⭐⭐⭐⭐",
        category: "os",
        tags: ["macos", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — Android",
        url: "https://uk.wikipedia.org/wiki/Android",
        status: "Україномовний ресурс",
        purpose: "Огляд Android українською",
        rating: "⭐⭐⭐⭐",
        category: "os",
        tags: ["android", "ukrainian", "encyclopedia"]
    },
    /* ---------------- ОФІЦІЙНІ СТАНДАРТИ ІНТЕРНЕТ---------------- */
    {
        name: "IETF — Internet Engineering Task Force",
        url: "https://www.ietf.org/",
        status: "Офіційна організація",
        purpose: "Головний орган стандартизації Інтернету",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["ietf", "internet standards", "official"]
    },
    {
        name: "IETF RFC Index",
        url: "https://www.rfc-editor.org/rfc-index/",
        status: "Офіційний стандарт",
        purpose: "Усі RFC: TCP/IP, HTTP, DNS, SMTP, TLS, IPv6",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["rfc", "protocols", "official"]
    },
    {
        name: "IEEE Standards Association",
        url: "https://standards.ieee.org/",
        status: "Офіційний стандарт",
        purpose: "Стандарти Ethernet, Wi‑Fi (802.11), Bluetooth",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["ieee", "ethernet", "wifi", "standards"]
    },
    /* ---------------- ОСНОВНІ ПРОТОКОЛИ ---------------- */
    {
        name: "TCP/IP Guide (Official Online Edition)",
        url: "http://www.tcpipguide.com/",
        status: "Авторитетний ресурс",
        purpose: "Повний довідник TCP/IP, протоколів та архітектури мереж",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["tcp", "ip", "protocols"]
    },
    {
        name: "DNS — IETF RFC 1034/1035",
        url: "https://www.rfc-editor.org/rfc/rfc1035",
        status: "Офіційний стандарт",
        purpose: "Офіційна специфікація DNS",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["dns", "rfc", "protocol"]
    },
    {
        name: "HTTP — MDN Web Docs",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
        status: "Авторитетна документація",
        purpose: "Документація HTTP/1.1, HTTP/2, HTTP/3",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["http", "mdn", "protocol"]
    },
    {
        name: "TLS — IETF RFC 5246 / 8446",
        url: "https://www.rfc-editor.org/rfc/rfc8446",
        status: "Офіційний стандарт",
        purpose: "Офіційна специфікація TLS 1.3",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["tls", "security", "rfc"]
    },
    {
        name: "BGP — IETF RFC 4271",
        url: "https://www.rfc-editor.org/rfc/rfc4271",
        status: "Офіційний стандарт",
        purpose: "Офіційна специфікація Border Gateway Protocol",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["bgp", "routing", "rfc"]
    },
    {
        name: "IPv6 — IETF RFC 8200",
        url: "https://www.rfc-editor.org/rfc/rfc8200",
        status: "Офіційний стандарт",
        purpose: "Офіційна специфікація IPv6",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["ipv6", "rfc", "protocol"]
    },
    /* ---------------- DNS / INTERNET INFRASTRUCTURE ---------------- */
    {
        name: "ICANN — Internet Corporation for Assigned Names and Numbers",
        url: "https://www.icann.org/",
        status: "Офіційна організація",
        purpose: "Управління доменами, DNS‑коренем, IP‑адресами",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["icann", "dns", "internet"]
    },
    {
        name: "Cloudflare Learning Center — Networking",
        url: "https://www.cloudflare.com/learning/",
        status: "Авторитетний ресурс",
        purpose: "Протоколи, мережі, CDN, безпека",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["networking", "cloudflare", "learning"]
    },
    /* ---------------- ВИРОБНИКИ МЕРЕЖЕВОГО ОБЛАДНАННЯ ---------------- */
    {
        name: "Cisco Networking Academy",
        url: "https://www.netacad.com/",
        status: "Офіційна платформа",
        purpose: "Найпопулярніші курси з мереж та протоколів",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["cisco", "networking", "academy"]
    },
    {
        name: "Cisco Documentation",
        url: "https://www.cisco.com/c/en/us/support/index.html",
        status: "Офіційна документація",
        purpose: "Документація Cisco IOS, маршрутизація, протоколи",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["cisco", "docs", "routing"]
    },
    {
        name: "Juniper Networks Documentation",
        url: "https://www.juniper.net/documentation/",
        status: "Офіційна документація",
        purpose: "Документація JunOS, маршрутизація, протоколи",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["juniper", "docs", "routing"]
    },
    /* ---------------- ДОДАТКОВІ АВТОРИТЕТНІ РЕСУРСИ ---------------- */

    {
        name: "MDN Web Docs — Network Concepts",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Network",
        status: "Авторитетна документація",
        purpose: "Огляд мережевих концепцій",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["networking", "mdn", "docs"]
    },
    {
        name: "GeeksForGeeks — Computer Networks",
        url: "https://www.geeksforgeeks.org/computer-network-tutorials/",
        status: "Навчальний ресурс",
        purpose: "Протоколи, моделі OSI/TCP-IP, маршрутизація",
        rating: "⭐⭐⭐⭐⭐",
        category: "networking",
        tags: ["networking", "tutorial", "learning"]
    },
    /* ---------------- УКРАЇНОМОВНІ ПЕРЕВІРЕНІ РЕСУРСИ ---------------- */
    {
        name: "Вікіпедія (укр) — Комп’ютерна мережа",
        url: "https://uk.wikipedia.org/wiki/Комп%27ютерна_мережа",
        status: "Україномовний ресурс",
        purpose: "Огляд мережевих технологій українською",
        rating: "⭐⭐⭐⭐",
        category: "networking",
        tags: ["networking", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — Протокол зв’язку",
        url: "https://uk.wikipedia.org/wiki/Протокол_зв%27язку",
        status: "Україномовний ресурс",
        purpose: "Огляд мережевих протоколів українською",
        rating: "⭐⭐⭐⭐",
        category: "networking",
        tags: ["protocols", "ukrainian", "encyclopedia"]
    },
    /* ---------- Software Architecture / Design Patterns --------- */
    {
        name: "Awesome Software and Architectural Design Patterns",
        url: "https://github.com/DovAmir/awesome-design-patterns",
        status: "Авторитетний каталог",
        purpose: "Найповніше зібрання патернів проєктування та архітектури",
        rating: "⭐⭐⭐⭐⭐",
        category: "architecture",
        tags: ["design patterns", "architecture", "github", "catalog"]
    },
    {
        name: "List of Software Architecture Styles and Patterns — Wikipedia",
        url: "https://en.wikipedia.org/wiki/List_of_software_architecture_styles_and_patterns",
        status: "Енциклопедичний ресурс",
        purpose: "Офіційний список архітектурних стилів і патернів",
        rating: "⭐⭐⭐⭐⭐",
        category: "architecture",
        tags: ["architecture", "patterns", "wikipedia"]
    },
    {
        name: "Software Architectural Patterns in System Design — GeeksForGeeks",
        url: "https://www.geeksforgeeks.org/system-design/design-patterns-architecture/",
        status: "Навчальний ресурс",
        purpose: "Огляд архітектурних патернів: Layered, Microservices, CQRS, EDA",
        rating: "⭐⭐⭐⭐⭐",
        category: "architecture",
        tags: ["architecture", "patterns", "system design"]
    },
    {
        name: "Design Patterns in Software Development — Nature Research Intelligence",
        url: "https://www.nature.com/research-intelligence/nri-topic-summaries/design-patterns-in-software-development-micro-79746",
        status: "Науковий ресурс",
        purpose: "Науковий огляд ролі патернів у розробці ПЗ",
        rating: "⭐⭐⭐⭐⭐",
        category: "architecture",
        tags: ["design patterns", "research", "nature"]
    },
    /* ---------------- КЛАСИЧНІ ПАТЕРНИ ---------------- */
    {
        name: "Gang of Four — Design Patterns (GoF)",
        url: "https://en.wikipedia.org/wiki/Design_Patterns",
        status: "Класичний ресурс",
        purpose: "Огляд патернів GoF: Creational, Structural, Behavioral",
        rating: "⭐⭐⭐⭐⭐",
        category: "architecture",
        tags: ["gof", "design patterns", "classic"]
    },
    {
        name: "Martin Fowler — Patterns of Enterprise Application Architecture",
        url: "https://martinfowler.com/eaaCatalog/",
        status: "Офіційний ресурс",
        purpose: "Патерни корпоративної архітектури від Мартіна Фаулера",
        rating: "⭐⭐⭐⭐⭐",
        category: "architecture",
        tags: ["architecture", "enterprise", "fowler"]
    },
    {
        name: "Martin Fowler — Microservices",
        url: "https://martinfowler.com/microservices/",
        status: "Офіційний ресурс",
        purpose: "Опис архітектурного стилю Microservices",
        rating: "⭐⭐⭐⭐⭐",
        category: "architecture",
        tags: ["microservices", "architecture", "fowler"]
    },
    /* ---------------- АРХІТЕКТУРНІ ПАТЕРНИ ---------------- */
    {
        name: "Microsoft Cloud Design Patterns",
        url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/",
        status: "Офіційна документація",
        purpose: "Патерни для масштабованих хмарних систем",
        rating: "⭐⭐⭐⭐⭐",
        category: "architecture",
        tags: ["cloud", "architecture", "patterns", "microsoft"]
    },
    {
        name: "AWS Architecture Patterns",
        url: "https://aws.amazon.com/architecture/",
        status: "Офіційний ресурс",
        purpose: "Архітектурні патерни AWS: event-driven, microservices, serverless",
        rating: "⭐⭐⭐⭐⭐",
        category: "architecture",
        tags: ["aws", "architecture", "patterns"]
    },
    {
        name: "Google Cloud Architecture Framework",
        url: "https://cloud.google.com/architecture/framework",
        status: "Офіційний ресурс",
        purpose: "Архітектурні принципи та патерни Google Cloud",
        rating: "⭐⭐⭐⭐⭐",
        category: "architecture",
        tags: ["gcp", "architecture", "patterns"]
    },
    /* ---------------- ДОДАТКОВІ АВТОРИТЕТНІ РЕСУРСИ ---------------- */
    {
        name: "Refactoring Guru — Design Patterns",
        url: "https://refactoring.guru/design-patterns",
        status: "Навчальний ресурс",
        purpose: "Візуальні пояснення патернів GoF",
        rating: "⭐⭐⭐⭐⭐",
        category: "architecture",
        tags: ["design patterns", "refactoring", "learning"]
    },
    {
        name: "Clean Architecture — Robert C. Martin (Uncle Bob)",
        url: "https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html",
        status: "Офіційний ресурс",
        purpose: "Опис Clean Architecture",
        rating: "⭐⭐⭐⭐⭐",
        category: "architecture",
        tags: ["clean architecture", "uncle bob"]
    },
    {
        name: "The Twelve-Factor App",
        url: "https://12factor.net/",
        status: "Офіційний ресурс",
        purpose: "12 принципів побудови масштабованих застосунків",
        rating: "⭐⭐⭐⭐⭐",
        category: "architecture",
        tags: ["architecture", "cloud", "best practices"]
    },
    /* ---------------- УКРАЇНОМОВНІ РЕСУРСИ ---------------- */
    {
        name: "Вікіпедія (укр) — Патерн проєктування",
        url: "https://uk.wikipedia.org/wiki/Патерн_проєктування",
        status: "Україномовний ресурс",
        purpose: "Огляд патернів проєктування українською",
        rating: "⭐⭐⭐⭐",
        category: "architecture",
        tags: ["design patterns", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — Архітектура програмного забезпечення",
        url: "https://uk.wikipedia.org/wiki/Архітектура_програмного_забезпечення",
        status: "Україномовний ресурс",
        purpose: "Огляд архітектури ПЗ українською",
        rating: "⭐⭐⭐⭐",
        category: "architecture",
        tags: ["architecture", "ukrainian", "encyclopedia"]
    },
    /* ---------------- Algorithms & Data Structures ---------------- */
    {
        name: "The Algorithms — Open Source Algorithms Library",
        url: "https://the-algorithms.com/",
        status: "Авторитетний ресурс",
        purpose: "Найбільша у світі open‑source колекція алгоритмів у 30+ мовах",
        rating: "⭐⭐⭐⭐⭐",
        category: "algorithms",
        tags: ["algorithms", "data structures", "open source"]
    },
    {
        name: "Open Data Structures — Official Textbook",
        url: "https://opendatastructures.org/",
        status: "Офіційний підручник",
        purpose: "Безкоштовний підручник зі структурами даних (Java, C++, Python)",
        rating: "⭐⭐⭐⭐⭐",
        category: "algorithms",
        tags: ["data structures", "textbook", "official"]
    },
    {
        name: "NIST DADS — Dictionary of Algorithms and Data Structures",
        url: "https://nvlpubs.nist.gov/nistpubs/ir/2020/NIST.IR.8318.pdf",
        status: "Офіційний ресурс",
        purpose: "Офіційний словник алгоритмів і структур даних від NIST",
        rating: "⭐⭐⭐⭐⭐",
        category: "algorithms",
        tags: ["nist", "dictionary", "algorithms"]
    },
    {
        name: "Algorithms, 4th Edition — Sedgewick & Wayne",
        url: "https://algs4.cs.princeton.edu/home/",
        status: "Офіційний сайт",
        purpose: "Офіційні матеріали до найпопулярнішого підручника з алгоритмів",
        rating: "⭐⭐⭐⭐⭐",
        category: "algorithms",
        tags: ["algorithms", "textbook", "princeton"]
    },
    {
        name: "OpenDSA — Interactive Data Structures & Algorithms",
        url: "https://opendsa.cs.vt.edu/ODSA/Books/eu_book/html/index.html",
        status: "Офіційний ресурс",
        purpose: "Інтерактивний підручник з алгоритмів та структур даних",
        rating: "⭐⭐⭐⭐⭐",
        category: "algorithms",
        tags: ["interactive", "algorithms", "data structures"]
    },
    /* ---------------- ДОДАТКОВІ АВТОРИТЕТНІ РЕСУРСИ ---------------- */
    {
        name: "GeeksForGeeks — Algorithms",
        url: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
        status: "Навчальний ресурс",
        purpose: "Алгоритми, структури даних, задачі, пояснення",
        rating: "⭐⭐⭐⭐⭐",
        category: "algorithms",
        tags: ["algorithms", "learning", "tutorial"]
    },
    {
        name: "GeeksForGeeks — Data Structures",
        url: "https://www.geeksforgeeks.org/data-structures/",
        status: "Навчальний ресурс",
        purpose: "Повний довідник структур даних",
        rating: "⭐⭐⭐⭐⭐",
        category: "algorithms",
        tags: ["data structures", "learning", "tutorial"]
    },
    {
        name: "MIT OpenCourseWare — Introduction to Algorithms",
        url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/",
        status: "Авторитетний курс",
        purpose: "Офіційний курс MIT з алгоритмів",
        rating: "⭐⭐⭐⭐⭐",
        category: "algorithms",
        tags: ["mit", "algorithms", "course"]
    },
    {
        name: "Stanford — Algorithms Specialization",
        url: "https://www.coursera.org/specializations/algorithms",
        status: "Авторитетний курс",
        purpose: "Один з найкращих курсів з алгоритмів у світі",
        rating: "⭐⭐⭐⭐⭐",
        category: "algorithms",
        tags: ["stanford", "algorithms", "course"]
    },
    /* ---------------- УКРАЇНОМОВНІ РЕСУРСИ ---------------- */
    {
        name: "Вікіпедія (укр) — Алгоритм",
        url: "https://uk.wikipedia.org/wiki/Алгоритм",
        status: "Україномовний ресурс",
        purpose: "Огляд алгоритмів українською",
        rating: "⭐⭐⭐⭐",
        category: "algorithms",
        tags: ["algorithm", "ukrainian", "encyclopedia"]
    },
    {
        name: "Вікіпедія (укр) — Структура даних",
        url: "https://uk.wikipedia.org/wiki/Структура_даних",
        status: "Україномовний ресурс",
        purpose: "Огляд структур даних українською",
        rating: "⭐⭐⭐⭐",
        category: "algorithms",
        tags: ["data structures", "ukrainian", "encyclopedia"]
    },
    /* -------------- РЕДАКТОРИ КОДУ - IDE -------------- */
    {
        name: "Visual Studio Code",
        url: "https://code.visualstudio.com/",
        status: "Офіційний сайт",
        purpose: "Найпопулярніший безплатний редактор коду від Microsoft",
        price: "Безплатний",
        ukrainian_ui: "Так (є українська локалізація)",
        type: "Редактор коду",
        rating: "⭐⭐⭐⭐⭐",
        category: "editors",
        tags: ["vscode", "editor", "free", "microsoft"]
    },
    {
        name: "Visual Studio (Community / Pro / Enterprise)",
        url: "https://visualstudio.microsoft.com/",
        status: "Офіційний сайт",
        purpose: "Потужна IDE для .NET, C#, C++, Python",
        price: "Community — безплатна, Pro/Enterprise — платні",
        ukrainian_ui: "Так (є українська локалізація)",
        type: "IDE",
        rating: "⭐⭐⭐⭐⭐",
        category: "editors",
        tags: ["visual studio", "ide", "microsoft"]
    },
    /* ---------------- JETBRAINS IDEs ---------------- */
    {
        name: "IntelliJ IDEA",
        url: "https://www.jetbrains.com/idea/",
        status: "Офіційний сайт",
        purpose: "Найкраща IDE для Java та Kotlin",
        price: "Платна (є безплатна Community Edition)",
        ukrainian_ui: "Ні",
        type: "IDE",
        rating: "⭐⭐⭐⭐⭐",
        category: "editors",
        tags: ["intellij", "java", "kotlin", "ide"]
    },
    {
        name: "PyCharm",
        url: "https://www.jetbrains.com/pycharm/",
        status: "Офіційний сайт",
        purpose: "IDE для Python",
        price: "Платна (є безплатна Community Edition)",
        ukrainian_ui: "Ні",
        type: "IDE",
        rating: "⭐⭐⭐⭐⭐",
        category: "editors",
        tags: ["pycharm", "python", "ide"]
    },
    {
        name: "WebStorm",
        url: "https://www.jetbrains.com/webstorm/",
        status: "Офіційний сайт",
        purpose: "IDE для JavaScript, TypeScript, React, Vue, Angular",
        price: "Платна",
        ukrainian_ui: "Ні",
        type: "IDE",
        rating: "⭐⭐⭐⭐⭐",
        category: "editors",
        tags: ["webstorm", "javascript", "ide"]
    },
    {
        name: "PhpStorm",
        url: "https://www.jetbrains.com/phpstorm/",
        status: "Офіційний сайт",
        purpose: "IDE для PHP",
        price: "Платна",
        ukrainian_ui: "Ні",
        type: "IDE",
        rating: "⭐⭐⭐⭐⭐",
        category: "editors",
        tags: ["phpstorm", "php", "ide"]
    },
    {
        name: "CLion",
        url: "https://www.jetbrains.com/clion/",
        status: "Офіційний сайт",
        purpose: "IDE для C/C++",
        price: "Платна",
        ukrainian_ui: "Ні",
        type: "IDE",
        rating: "⭐⭐⭐⭐⭐",
        category: "editors",
        tags: ["clion", "cpp", "ide"]
    },
    {
        name: "Rider",
        url: "https://www.jetbrains.com/rider/",
        status: "Офіційний сайт",
        purpose: "IDE для .NET",
        price: "Платна",
        ukrainian_ui: "Ні",
        type: "IDE",
        rating: "⭐⭐⭐⭐⭐",
        category: "editors",
        tags: ["rider", "dotnet", "ide"]
    },
    /* ---------------- ANDROID / APP DEVELOPMENT ---------------- */
    {
        name: "Android Studio",
        url: "https://developer.android.com/studio",
        status: "Офіційний сайт",
        purpose: "Офіційна IDE для Android",
        price: "Безплатна",
        ukrainian_ui: "Ні",
        type: "IDE",
        rating: "⭐⭐⭐⭐⭐",
        category: "editors",
        tags: ["android studio", "android", "ide"]
    },
    {
        name: "Xcode",
        url: "https://developer.apple.com/xcode/",
        status: "Офіційний сайт",
        purpose: "Офіційна IDE для iOS/macOS",
        price: "Безплатна",
        ukrainian_ui: "Ні",
        type: "IDE",
        rating: "⭐⭐⭐⭐⭐",
        category: "editors",
        tags: ["xcode", "ios", "macos", "ide"]
    },
    /* ---------------- ЛЕГКІ РЕДАКТОРИ ---------------- */
    {
        name: "Sublime Text",
        url: "https://www.sublimetext.com/",
        status: "Офіційний сайт",
        purpose: "Швидкий редактор коду",
        price: "Умовно безплатний (платна ліцензія)",
        ukrainian_ui: "Ні",
        type: "Редактор коду",
        rating: "⭐⭐⭐⭐",
        category: "editors",
        tags: ["sublime", "editor"]
    },
    {
        name: "Notepad++",
        url: "https://notepad-plus-plus.org/",
        status: "Офіційний сайт",
        purpose: "Легкий редактор коду для Windows",
        price: "Безплатний",
        ukrainian_ui: "Так (є українська локалізація)",
        type: "Редактор коду",
        rating: "⭐⭐⭐⭐⭐",
        category: "editors",
        tags: ["notepad++", "editor", "free"]
    },
    {
        name: "Atom (архівований)",
        url: "https://github.com/atom/atom",
        status: "Офіційний репозиторій",
        purpose: "Колишній редактор коду від GitHub",
        price: "Безплатний",
        ukrainian_ui: "Ні",
        type: "Редактор коду",
        rating: "⭐⭐⭐⭐",
        category: "editors",
        tags: ["atom", "editor"]
    },
    {
        name: "Brackets",
        url: "https://brackets.io/",
        status: "Офіційний сайт",
        purpose: "Редактор коду для веб‑розробки",
        price: "Безплатний",
        ukrainian_ui: "Ні",
        type: "Редактор коду",
        rating: "⭐⭐⭐⭐",
        category: "editors",
        tags: ["brackets", "editor"]
    },
    /* ---------------- ПРОФЕСІЙНІ IDE ---------------- */
    {
        name: "Eclipse IDE",
        url: "https://www.eclipse.org/",
        status: "Офіційний сайт",
        purpose: "IDE для Java, C/C++, PHP",
        price: "Безплатна",
        ukrainian_ui: "Ні",
        type: "IDE",
        rating: "⭐⭐⭐⭐",
        category: "editors",
        tags: ["eclipse", "java", "ide"]
    },
    {
        name: "NetBeans",
        url: "https://netbeans.apache.org/",
        status: "Офіційний сайт",
        purpose: "IDE для Java, PHP, C++",
        price: "Безплатна",
        ukrainian_ui: "Ні",
        type: "IDE",
        rating: "⭐⭐⭐⭐",
        category: "editors",
        tags: ["netbeans", "java", "ide"]
    },
    {
        name: "Code::Blocks",
        url: "https://www.codeblocks.org/",
        status: "Офіційний сайт",
        purpose: "IDE для C/C++",
        price: "Безплатна",
        ukrainian_ui: "Ні",
        type: "IDE",
        rating: "⭐⭐⭐⭐",
        category: "editors",
        tags: ["codeblocks", "cpp", "ide"]
    },
    {
        name: "Qt Creator",
        url: "https://www.qt.io/product/development-tools",
        status: "Офіційний сайт",
        purpose: "IDE для C++ та Qt‑додатків",
        price: "Безплатна / Платна (залежить від ліцензії)",
        ukrainian_ui: "Ні",
        type: "IDE",
        rating: "⭐⭐⭐⭐",
        category: "editors",
        tags: ["qt", "cpp", "ide"]
    },
    /* ---------------- ВЕБ‑РЕДАКТОРИ ---------------- */
    {
        name: "CodePen",
        url: "https://codepen.io/",
        status: "Офіційний сайт",
        purpose: "Онлайн‑редактор HTML/CSS/JS",
        price: "Безплатний / Платний PRO",
        ukrainian_ui: "Ні",
        type: "Онлайн‑редактор",
        rating: "⭐⭐⭐⭐⭐",
        category: "editors",
        tags: ["codepen", "web", "editor"]
    },
    {
        name: "JSFiddle",
        url: "https://jsfiddle.net/",
        status: "Офіційний сайт",
        purpose: "Онлайн‑редактор JavaScript",
        price: "Безплатний",
        ukrainian_ui: "Ні",
        type: "Онлайн‑редактор",
        rating: "⭐⭐⭐⭐",
        category: "editors",
        tags: ["jsfiddle", "javascript", "editor"]
    },
    {
        name: "Replit",
        url: "https://replit.com/",
        status: "Офіційний сайт",
        purpose: "Онлайн IDE для 50+ мов",
        price: "Безплатний / Платний",
        ukrainian_ui: "Ні",
        type: "Онлайн‑IDE",
        rating: "⭐⭐⭐⭐⭐",
        category: "editors",
        tags: ["replit", "ide", "online"]
    }
];
// Фільтрація по категорії
function getSourcesByCategory(category) {
    return sourcesData.filter(src => src.category === category);
}