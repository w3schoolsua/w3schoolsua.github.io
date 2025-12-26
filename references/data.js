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
        name: "MDN Web Docs — HTML",
        url: "https://developer.mozilla.org/docs/Web/HTML",
        status: "Де-факто стандарт документації",
        purpose: "Найповніша документація по HTML",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["mdn", "web", "html", "docs", "стандарт", "standard", "документація", "офіційна", "приклади", "навчання"]
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
        name: "Web.dev (від Google Chrome Team)",
        url: "https://web.dev/learn/html/",
        status: "Навчальний ресурс",
        purpose: "Освітній ресурс від розробників браузера Chrome",
        rating: "⭐⭐⭐⭐⭐",
        category: "html",
        tags: ["web", "підручник", "html", "для початківців", "google", "chrome", "уроки", "безплатні", "приклади", "навчання"]
    },
    {
        name: "W3C HTML Validator",
        url: "https://validator.w3.org/",
        status: "Офіційний",
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
        status: "Офіційний",
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
        status: "Офіційний",
        purpose: "Перевірка валідності CSS",
        rating: "⭐⭐⭐⭐",
        category: "css",
        tags: ["w3c", "css", "validator", "перевірка", "валідність", "каскадні", "таблиці", "стилі", "помилки", "офіційний"]
    },
    /* ---------------- JavaScript ---------------- */
    {
        name: "MDN Web Docs — JavaScript",
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
        status: "Де-факто стандарт документації",
        purpose: "Докладна документація по JS",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["mdn", "script", "lang", "specification", "docs", "javascript", "документація", "js", "офіційна"]
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
        name: "ECMAScript Language Specification",
        url: "https://tc39.es/ecma262/",
        status: "Офіційний стандарт",
        purpose: "Стандарт мови JavaScript",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["ecma", "script", "lang", "specification", "oficial", "javascript", "standard", "js", "офіційні"]
    },
    {
        name: "TC39 Proposals",
        url: "https://github.com/tc39/proposals",
        status: "Офіційний",
        purpose: "Пропозиції нових можливостей JS",
        rating: "⭐⭐⭐⭐",
        category: "js",
        tags: ["TC39", "proposals", "пропозиції", "нові", "можливості", "javascript", "github", "js", "офіційні"]
    },
    {
        name: "ECMAScript® Internationalization API Specification",
        url: "https://tc39.es/ecma402/",
        status: "Офіційний",
        purpose: "Офіційний стандарт для роботи з локалізацією, форматуванням дат, чисел, валют тощо",
        rating: "⭐⭐⭐⭐",
        category: "js",
        tags: ["TC39", "internationalization", "api", "ecma", "стандарти", "javascript", "локалізація", "js", "офіційні"]
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
        name: "W3Schools.com — JavaScript",
        url: "https://w3schools.com/js/",
        status: "Навчальний ресурс",
        purpose: "Уроки, приклади та пояснення JavaScript",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["w3schools", "оригінал", "для початківців", "уроки", "підручник", "навчання", "приклади", "js", "tutorial", "javascript"]
    },
    {
        name: "DevDocs — JavaScript Reference",
        url: "https://devdocs.io/javascript/",
        status: "Навчальний ресурс",
        purpose: "Зручний офлайн‑орієнтований довідник, який агрегує документацію MDN",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["mdn", "агрегатор", "документація", "довідка", "довідник", "навчання", "приклади", "js", "tutorial", "javascript"]
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
        name: "Node.js Documentation",
        url: "https://nodejs.org/en/docs",
        status: "Офіційна документація",
        purpose: "Офіційна документація середовища виконання JavaScript поза браузером",
        rating: "⭐⭐⭐⭐⭐",
        category: "js",
        tags: ["javascript", "js", "nodejs", "офіційна", "документація", "середовище", "розробка", "навчання", "додатки", "сервер"]
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