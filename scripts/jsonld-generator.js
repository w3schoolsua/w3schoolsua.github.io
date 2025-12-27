(function generateJSONLD() {

    function waitForSourcesData(callback) {
        if (window.sourcesData) callback();
        else setTimeout(() => waitForSourcesData(callback), 50);
    }

    waitForSourcesData(() => {

        const pageUrl = location.href;
        const siteUrl = "https://w3schoolsua.github.io/";
        const pageName = document.title || "W3SchoolsUA";

        function addSchema(obj) {
            const script = document.createElement("script");
            script.type = "application/ld+json";
            script.textContent = JSON.stringify(obj);
            document.head.appendChild(script);
        }

        /* WebSite + SearchAction */
        addSchema({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "W3SchoolsUA",
            "url": siteUrl,
            "potentialAction": {
                "@type": "SearchAction",
                "target": siteUrl + "search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        });

        /* BreadcrumbList */
        const parts = pageUrl.replace(siteUrl, "").split("/").filter(Boolean);
        addSchema({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": parts.map((p, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": decodeURIComponent(p.replace(".html", "")),
                "item": siteUrl + parts.slice(0, i + 1).join("/")
            }))
        });

        /* FAQPage */
        addSchema({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": window.sourcesData.slice(0, 10).map(src => ({
                "@type": "Question",
                "name": `Що таке ${src.name}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": src.purpose || src.status || "Офіційне джерело"
                }
            }))
        });

        /* ItemList */
        addSchema({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Каталог офіційних джерел",
            "url": pageUrl,
            "numberOfItems": window.sourcesData.length,
            "itemListElement": window.sourcesData.map((src, i) => ({
                "@type": "CreativeWork",
                "position": i + 1,
                "name": src.name,
                "url": src.url,
                "about": src.purpose || src.status || src.category
            }))
        });

        /* Article (кожен елемент) */
        window.sourcesData.forEach(src => {
            addSchema({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": src.name,
                "url": src.url,
                "about": src.category || "web",
                "description": src.purpose || src.status || "",
                "author": { "@type": "Organization", "name": "W3SchoolsUA" },
                "publisher": { "@type": "Organization", "name": "W3SchoolsUA", "url": siteUrl }
            });
        });

    });

})();