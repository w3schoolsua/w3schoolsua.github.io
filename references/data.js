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
        name: "W3SchoolsUA — HTML",
        url: "https://w3schoolsua.github.io/html/index.html",
        status: "Навчальний ресурс українською",
        purpose: "Приклади та пояснення HTML",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["w3schools", "підручник", "html", "для початківців", "українською", "web", "уроки", "безплатні", "приклади", "задачі"]
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
        url: "https://www.w3.org/Style/CSS/",
        status: "Офіційний сайт",
        purpose: "Офіційні специфікації CSS",
        rating: "⭐⭐⭐⭐",
        category: "css",
        tags: ["w3c", "docs", "css", "spec", "standard", "code", "стандарти", "style", "oficial", "стилі"]
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
        name: "W3SchoolsUA — CSS",
        url: "https://w3schoolsua.github.io/css/index.html",
        status: "Навчальний ресурс",
        purpose: "Уроки по CSS, приклади та пояснення",
        rating: "⭐⭐⭐⭐⭐",
        category: "css",
        tags: ["w3schools", "css", "сайт", "уроки", "підручник", "ua", "для початківців", "українською", "tutorial", "стилі"]
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
        name: "W3Schools SQL Tutorial",
        url: "https://www.w3schools.com/sql/",
        category: "sql",
        status: "Навчальний ресурс",
        purpose: "Уроки, приклади, довідники",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["sql", "tutorials", "lessons", "w3schools", "підручник", "мова", "навчання", "уроки"]
    },
    {
        name: "W3SchoolsUA — SQL",
        url: "https://w3schoolsua.github.io/sql/index.html",
        category: "sql",
        status: "Навчальний ресурс",
        purpose: "Уроки, приклади, довідники українською",
        rating: "⭐⭐⭐⭐⭐",
        tags: ["sql", "w3schools", "підручник", "мова", "навчання", "уроки", "для початківців", "українською", "github", "ua"]
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
    }
];
// Фільтрація по категорії
function getSourcesByCategory(category) {
    return sourcesData.filter(src => src.category === category);
}