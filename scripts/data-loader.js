(function loadCategoryData() {
    const page = location.pathname.split("/").pop().replace(".html", "");
    const dataUrl = `/data/${page}.js`;

    const script = document.createElement("script");
    script.src = dataUrl;
    script.onload = () => console.log(`Loaded data: ${dataUrl}`);
    script.onerror = () => console.warn(`Data file not found: ${dataUrl}`);
    document.head.appendChild(script);
})();