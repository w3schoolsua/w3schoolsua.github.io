(function generateSitemap() {

    // 1. Базовий URL сайту
    const SITE = "https://w3schoolsua.github.io/";

    // 2. Список сторінок (автоматично з категорій)
    // Ти можеш додавати нові категорії — генератор сам їх підхопить
    const pages = [
        "index.html",
        "references/html.html",
        "references/css.html",
        "references/js.html",
        "references/sql.html",
        "references/python.html",
        "references/api.html",
        "references/tools.html",
        "references/security.html"
    ];

    // 3. Якщо є sourcesData — додаємо всі URL з нього
    let dynamicUrls = [];
    if (Array.isArray(window.sourcesData)) {
        dynamicUrls = window.sourcesData
            .filter(src => src.url)
            .map(src => src.url);
    }

    // 4. Формуємо XML
    const urls = pages.map(p => SITE + p).concat(dynamicUrls);

    const xml =
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `
  <url>
    <loc>${u}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join("")}
</urlset>`;

    // 5. Виводимо у консоль (ти копіюєш і вставляєш у sitemap.xml)
    console.log("=== GENERATED SITEMAP.XML ===");
    console.log(xml);
    console.log("================================");

})();