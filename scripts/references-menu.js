// Універсальний генератор меню
// scripts/references-menu.js

(function () {
    // Чекаємо, поки DOM буде готовий
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initMenu);
    } else {
        initMenu();
    }

    function initMenu() {
        if (!Array.isArray(window.referencesMenuItems)) {
            console.warn("referencesMenuItems не знайдено або має неправильний формат.");
            return;
        }

        // Контейнер меню: <nav id="references-menu"></nav>
        var container = document.getElementById("references-menu");
        if (!container) {
            console.warn("Елемент з id='references-menu' не знайдено.");
            return;
        }

        var currentPath = location.pathname.replace(/\/+$/, ""); // без кінцевого /
        var ul = document.createElement("ul");
        ul.className = "references-menu-list";

        window.referencesMenuItems.forEach(function (item) {
            var li = document.createElement("li");
            li.className = "references-menu-item";

            var a = document.createElement("a");
            a.href = item.href;
            a.textContent = item.label;
            a.title = item.title;

            // Підсвічування активної сторінки
            var itemPath = item.href.replace(/\/+$/, "");
            if (itemPath === currentPath) {
                li.classList.add("active");
            }

            li.appendChild(a);
            ul.appendChild(li);
        });

        container.innerHTML = "";
        container.appendChild(ul);
    }
})();