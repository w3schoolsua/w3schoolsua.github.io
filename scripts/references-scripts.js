// references scripts
    function generateDropdownCategories() {
    const menu = document.getElementById("dropdownMenu");
    if (!menu || typeof sourcesData === "undefined") return;

    const categories = [...new Set(sourcesData.map(s => s.category))];
    const currentPage = location.pathname.split("/").pop().replace(".html", "");

    menu.innerHTML = categories.map(c => `
        <a href="${c}.html" class="${c === currentPage ? 'active' : ''}">
            ${c.toUpperCase()}
        </a>
    `).join("");

    // вибір теми світла/темна
    if (document.body.classList.contains("dark-mode")) {
    menu.classList.remove("light");
} else {
    menu.classList.add("light");
}
}
    generateDropdownCategories();

    function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    const btn = document.getElementById("refsBtn");
    const arrow = document.getElementById("arrow");
    if (!menu || !btn || !arrow) return;

    // позиціонування ПІД кнопкою
    const rect = btn.getBoundingClientRect();
    menu.style.left = rect.left + "px";
    menu.style.top = (rect.bottom + window.scrollY) + "px";

    menu.classList.toggle("show");
    arrow.textContent = menu.classList.contains("show") ? "▲" : "▼";
}

    // закриття при кліку поза меню
    document.addEventListener("click", function(e) {
    const menu = document.getElementById("dropdownMenu");
    const btn = document.getElementById("refsBtn");
    const arrow = document.getElementById("arrow");
    if (!menu || !btn || !arrow) return;

    if (!e.target.closest("#dropdownMenu") && !e.target.closest("#refsBtn")) {
    menu.classList.remove("show");
    arrow.textContent = "▼";
}
});

    // оновлення теми
    function updateDropdownTheme() {
    const menu = document.getElementById("dropdownMenu");
    if (!menu) return;

    if (document.body.classList.contains("dark-mode")) {
    menu.classList.remove("light");
} else {
    menu.classList.add("light");
}
}
    setInterval(updateDropdownTheme, 300);