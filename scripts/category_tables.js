
    /* Автоматичне визначення категорії з URL */
    function getCategoryFromURL() {
    const file = location.pathname.split("/").pop(); // html.html → html
    return file.replace(".html", "");
}

    /* Дані для заголовків */
    const categoryInfo = {
    html: { title: "HTML", subtitle: "Офіційні стандарти, документація, навчальні ресурси" },
    css: { title: "CSS", subtitle: "Специфікації, довідники, гіди" },
    js: { title: "JavaScript", subtitle: "ECMAScript, документація, навчання" },
    api: { title: "Web API", subtitle: "Браузерні API та стандарти" },
    tools: { title: "Інструменти", subtitle: "Валідатори, редактори, утиліти" },
    security: { title: "Безпека", subtitle: "OWASP, рекомендації, стандарти" },
    python: { title: "Python", subtitle: "Документація, стандарти, навчальні ресурси" }
};

    /* Ініціалізація сторінки */
    function initCategoryPage() {
    const category = getCategoryFromURL();
    const info = categoryInfo[category];

    if (info) {
    document.getElementById("pageTitle").textContent = `Рекомендовані джерела по ${info.title} — W3SchoolsUA`;
    document.getElementById("breadcrumbName").textContent = info.title;
    document.getElementById("categoryTitle").textContent = `Рекомендовані джерела по ${info.title}`;
    document.getElementById("categorySubtitle").textContent = info.subtitle;

    document.getElementById("metaDescription").content =
    `Найкращі та найавторитетніші джерела по ${info.title}.`;
    document.getElementById("metaKeywords").content =
    `${info.title}, документація, стандарти, навчання, W3SchoolsUA`;
}

    renderCategoryTable(category, "sourcesTable");
}

    /* Поточний рік відображається на сайті */
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("current-year").textContent = new Date().getFullYear();
    });