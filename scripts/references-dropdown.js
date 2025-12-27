(function () {

    function initDropdown() {
        if (typeof sourcesData === "undefined") {
            setTimeout(initDropdown, 50);
            return;
        }

        const menu = document.getElementById("dropdownMenu");
        if (!menu) return;

        // Унікальні категорії
        const categories = [...new Set(sourcesData.map(s => s.category))];

        const currentPage = location.pathname.split("/").pop().replace(".html", "");

        // Генерація пунктів меню
        menu.innerHTML = categories.map(c => `
            <a href="${c}.html" class="${c === currentPage ? 'active' : ''}">
                ${c.toUpperCase()}
            </a>
        `).join("");

        updateDropdownTheme();
    }

    // Показ/приховування меню
    window.toggleDropdown = function () {
        const menu = document.getElementById("dropdownMenu");
        const btn = document.getElementById("refsBtn");
        const arrow = document.getElementById("arrow");
        if (!menu || !btn || !arrow) return;

        const rect = btn.getBoundingClientRect();
        menu.style.left = rect.left + "px";
        menu.style.top = (rect.bottom + window.scrollY) + "px";

        menu.classList.toggle("show");
        arrow.textContent = menu.classList.contains("show") ? "▲" : "▼";
    };

    // Закриття при кліку поза меню
    document.addEventListener("click", function (e) {
        const menu = document.getElementById("dropdownMenu");
        const btn = document.getElementById("refsBtn");
        const arrow = document.getElementById("arrow");
        if (!menu || !btn || !arrow) return;

        if (!e.target.closest("#dropdownMenu") && !e.target.closest("#refsBtn")) {
            menu.classList.remove("show");
            arrow.textContent = "▼";
        }
    });

    // Оновлення теми
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

    // Запуск
    initDropdown();

})();