// /references/data.js

// Базова структура джерела:
// {
//   name: "Назва",
//   url: "https://...",
//   status: "Офіційний / Неофіційний / Де-факто стандарт",
//   purpose: "Короткий опис",
//   rating: "⭐⭐⭐⭐⭐",
//   category: "html" | "css" | "js" | "api" | "tools" | "security"
// }

const sourcesData = [

    /* ---------------- HTML ---------------- */

    {
        name: "WHATWG HTML Living Standard",
        url: "https://html.spec.whatwg.org/",
        status: "Офіційний стандарт",
        purpose: "Єдиний актуальний стандарт HTML",
        rating: "⭐⭐⭐⭐⭐",
        category: "html"
    },
    {
        name: "MDN Web Docs — HTML",
        url: "https://developer.mozilla.org/docs/Web/HTML",
        status: "Де-факто стандарт документації",
        purpose: "Найповніша документація по HTML",
        rating: "⭐⭐⭐⭐⭐",
        category: "html"
    },
    {
        name: "W3SchoolsUA — HTML",
        url: "https://w3schoolsua.github.io/html/index.html",
        status: "Навчальний ресурс українською",
        purpose: "Приклади та пояснення HTML",
        rating: "⭐⭐⭐⭐⭐",
        category: "html"
    },
    {
        name: "W3C HTML Validator",
        url: "https://validator.w3.org/",
        status: "Офіційний",
        purpose: "Перевірка валідності HTML",
        rating: "⭐⭐⭐⭐",
        category: "html"
    },

    /* ---------------- CSS ---------------- */

    {
        name: "MDN Web Docs — CSS",
        url: "https://developer.mozilla.org/docs/Web/CSS",
        status: "Де-факто стандарт документації",
        purpose: "Докладна документація по CSS",
        rating: "⭐⭐⭐⭐⭐",
        category: "css"
    },
    {
        name: "W3C CSS Specifications",
        url: "https://www.w3.org/Style/CSS/",
        status: "Офіційний",
        purpose: "Офіційні специфікації CSS",
        rating: "⭐⭐⭐⭐",
        category: "css"
    },
    {
        name: "Can I Use — CSS",
        url: "https://caniuse.com/css",
        status: "Авторитетний",
        purpose: "Підтримка CSS‑функцій у браузерах",
        rating: "⭐⭐⭐⭐⭐",
        category: "css"
    },
    {
        name: "W3SchoolsUA — CSS",
        url: "https://w3schoolsua.github.io/css/index.html",
        status: "Навчальний ресурс",
        purpose: "Приклади та пояснення CSS",
        rating: "⭐⭐⭐⭐⭐",
        category: "css"
    },
    {
        name: "W3C CSS Validator",
        url: "https://jigsaw.w3.org/css-validator/",
        status: "Офіційний",
        purpose: "Перевірка валідності CSS",
        rating: "⭐⭐⭐⭐",
        category: "css"
    },

    /* ---------------- JavaScript ---------------- */

    {
        name: "MDN Web Docs — JavaScript",
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
        status: "Де-факто стандарт документації",
        purpose: "Докладна документація по JS",
        rating: "⭐⭐⭐⭐⭐",
        category: "js"
    },
    {
        name: "ECMAScript Language Specification",
        url: "https://tc39.es/ecma262/",
        status: "Офіційний стандарт",
        purpose: "Стандарт мови JavaScript",
        rating: "⭐⭐⭐⭐⭐",
        category: "js"
    },
    {
        name: "TC39 Proposals",
        url: "https://github.com/tc39/proposals",
        status: "Офіційний",
        purpose: "Пропозиції нових можливостей JS",
        rating: "⭐⭐⭐⭐",
        category: "js"
    },
    {
        name: "W3SchoolsUA — JavaScript",
        url: "https://w3schoolsua.github.io/js/index.html",
        status: "Навчальний ресурс",
        purpose: "Приклади та пояснення JS",
        rating: "⭐⭐⭐⭐⭐",
        category: "js"
    },

    /* ---------------- Web API ---------------- */

    {
        name: "MDN Web Docs — Web APIs",
        url: "https://developer.mozilla.org/docs/Web/API",
        status: "Де-факто стандарт документації",
        purpose: "Документація по браузерним API",
        rating: "⭐⭐⭐⭐⭐",
        category: "api"
    },
    {
        name: "WHATWG Fetch Standard",
        url: "https://fetch.spec.whatwg.org/",
        status: "Офіційний",
        purpose: "Стандарт Fetch API",
        rating: "⭐⭐⭐⭐",
        category: "api"
    },
    {
        name: "WHATWG URL Standard",
        url: "https://url.spec.whatwg.org/",
        status: "Офіційний",
        purpose: "Стандарт URL API",
        rating: "⭐⭐⭐⭐",
        category: "api"
    },

    /* ---------------- Tools ---------------- */

    {
        name: "Can I Use",
        url: "https://caniuse.com/",
        status: "Авторитетний",
        purpose: "Підтримка фіч у браузерах",
        rating: "⭐⭐⭐⭐⭐",
        category: "tools"
    },
    {
        name: "W3C Markup Validation Service",
        url: "https://validator.w3.org/",
        status: "Офіційний",
        purpose: "Валідатор HTML",
        rating: "⭐⭐⭐⭐",
        category: "tools"
    },
    {
        name: "ESLint",
        url: "https://eslint.org/",
        status: "Де-факто стандарт",
        purpose: "Лінтер JavaScript",
        rating: "⭐⭐⭐⭐⭐",
        category: "tools"
    },
    {
        name: "Prettier",
        url: "https://prettier.io/",
        status: "Популярний інструмент",
        purpose: "Форматування коду",
        rating: "⭐⭐⭐⭐⭐",
        category: "tools"
    },
    {
        name: "CodePen",
        url: "https://codepen.io/",
        status: "Онлайн‑редактор",
        purpose: "Швидке тестування HTML/CSS/JS",
        rating: "⭐⭐⭐⭐",
        category: "tools"
    },
    {
        name: "BeautifyTools",
        url: "https://beautifytools.com/",
        status: "Добірка інструментів",
        purpose: "Різні інструменти для кодування",
        rating: "⭐⭐⭐⭐",
        category: "tools"
    },

    /* ---------------- Security ---------------- */

    {
        name: "OWASP Cheat Sheet Series",
        url: "https://cheatsheetseries.owasp.org/",
        status: "Де-факто стандарт",
        purpose: "Найкращі практики безпеки",
        rating: "⭐⭐⭐⭐⭐",
        category: "security"
    },
    {
        name: "OWASP Top 10",
        url: "https://owasp.org/www-project-top-ten/",
        status: "Офіційний",
        purpose: "10 найкритичніших ризиків безпеки",
        rating: "⭐⭐⭐⭐⭐",
        category: "security"
    },
    {
        name: "MDN — Web Security",
        url: "https://developer.mozilla.org/docs/Web/Security",
        status: "Де-факто стандарт документації",
        purpose: "Документація по безпеці веб‑додатків",
        rating: "⭐⭐⭐⭐",
        category: "security"
    },
    {
        name: "Google Web Fundamentals — Security",
        url: "https://web.dev/secure/",
        status: "Офіційний ресурс Google",
        purpose: "Рекомендації по безпеці",
        rating: "⭐⭐⭐⭐",
        category: "security"
    }

];

// Фільтрація по категорії
function getSourcesByCategory(category) {
    return sourcesData.filter(src => src.category === category);
}