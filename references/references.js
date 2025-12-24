/* ============================================================
   references.js — пошук, теги, хмара, категорії, тема, сортування
   Працює з const sourcesData з data.js
   ============================================================ */

/* -------------------------------
   0. Допоміжні функції
-------------------------------- */

function getAllTags() {
    if (typeof sourcesData === "undefined") return [];
    const set = new Set();
    sourcesData.forEach(src => {
        (src.tags || []).forEach(t => set.add(t));
    });
    return Array.from(set).sort();
}

function createTagBadge(tag) {
    const span = document.createElement("span");
    span.className = "tag-badge";
    span.textContent = tag;
    return span;
}

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text, query) {
    if (!query) return text;
    const escaped = escapeRegExp(query);
    const regex = new RegExp(escaped, "gi");
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
}

/* -------------------------------
   1. Рендер фільтрів і хмари тегів
-------------------------------- */

function renderTagFilters() {
    const container = document.getElementById("tagFilters");
    if (!container || typeof sourcesData === "undefined") return;

    const tags = getAllTags();
    container.innerHTML = "";

    tags.forEach(tag => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = tag;
        checkbox.addEventListener("change", globalSearchSources);

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(tag));
        container.appendChild(label);
    });
}

function renderTagCloud() {
    const container = document.getElementById("tagCloud");
    if (!container || typeof sourcesData === "undefined") return;

    const tags = getAllTags();
    container.innerHTML = "";

    tags.forEach(tag => {
        const badge = createTagBadge(tag);
        badge.style.cursor = "pointer";
        badge.addEventListener("click", () => {
            const tagInput = document.getElementById("tagSearch");
            if (tagInput) tagInput.value = tag;
            globalSearchSources();
        });
        container.appendChild(badge);
    });
}

/* -------------------------------
   2. Глобальний пошук (текст + теги)
-------------------------------- */

function globalSearchSources() {
    if (typeof sourcesData === "undefined") return;

    const textInput = document.getElementById("globalSearch");
    const tagInput = document.getElementById("tagSearch");
    const resultsContainer = document.getElementById("globalSearchResults");
    const table = document.getElementById("globalSearchTable");

    if (!resultsContainer || !table || !table.tBodies[0]) return;

    const tbody = table.tBodies[0];

    const textFilter = (textInput && textInput.value ? textInput.value : "").toLowerCase().trim();
    const tagFilter = (tagInput && tagInput.value ? tagInput.value : "").toLowerCase().trim();

    const checkedTags = [];
    const tagFiltersContainer = document.getElementById("tagFilters");
    if (tagFiltersContainer) {
        const inputs = tagFiltersContainer.querySelectorAll("input[type='checkbox']:checked");
        inputs.forEach(inp => checkedTags.push(inp.value.toLowerCase()));
    }

    if (!textFilter && !tagFilter && checkedTags.length === 0) {
        resultsContainer.style.display = "none";
        tbody.innerHTML = "";
        return;
    }

    const results = sourcesData.filter(src => {
        const baseText = (
            (src.name || "") + " " +
            (src.status || "") + " " +
            (src.purpose || "") + " " +
            (src.category || "")
        ).toLowerCase();

        const tagsArr = src.tags || [];
        const tagsText = tagsArr.join(" ").toLowerCase();

        const matchText = textFilter ? baseText.includes(textFilter) : true;
        const matchTagInput = tagFilter ? tagsText.includes(tagFilter) : true;

        let matchCheckedTags = true;
        if (checkedTags.length > 0) {
            matchCheckedTags = checkedTags.every(t => tagsText.includes(t));
        }

        return matchText && matchTagInput && matchCheckedTags;
    });

    tbody.innerHTML = "";

    results.forEach(src => {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        const a = document.createElement("a");
        a.href = src.url;
        a.target = "_blank";
        a.innerHTML = highlightText(src.name || "", textFilter);
        tdName.appendChild(a);

        const tdCategory = document.createElement("td");
        tdCategory.innerHTML = highlightText((src.category || "").toUpperCase(), textFilter);

        const tdPurpose = document.createElement("td");
        tdPurpose.innerHTML = highlightText(src.purpose || "", textFilter);

        const tdRating = document.createElement("td");
        tdRating.textContent = src.rating || "";

        const tdTags = document.createElement("td");
        (src.tags || []).forEach(tag => {
            const badge = createTagBadge(tag);
            if (tagFilter && tag.toLowerCase().includes(tagFilter)) {
                badge.classList.add("highlight");
            }
            tdTags.appendChild(badge);
        });

        tr.appendChild(tdName);
        tr.appendChild(tdCategory);
        tr.appendChild(tdPurpose);
        tr.appendChild(tdRating);
        tr.appendChild(tdTags);

        tbody.appendChild(tr);
    });

    resultsContainer.style.display = "block";

    enableTableSorting("globalSearchTable");
}

/* -------------------------------
   3. Автогенерація категорій
-------------------------------- */

const categoriesMeta = {
    html: { title: "HTML", icon: "📄", description: "Стандарти, документація, навчальні ресурси.", url: "html.html" },
    css: { title: "CSS", icon: "🎨", description: "Специфікації, довідники, гіди.", url: "css.html" },
    js: { title: "JavaScript", icon: "⚙️", description: "ECMAScript, документація, навчання.", url: "js.html" },
    api: { title: "Web API", icon: "🌐", description: "Браузерні API та стандарти.", url: "api.html" },
    tools: { title: "Інструменти", icon: "🛠️", description: "Валідатори, редактори, утиліти.", url: "tools.html" },
    security: { title: "Безпека", icon: "🔒", description: "OWASP, рекомендації, стандарти.", url: "security.html" }
};

function renderCategoriesFromData() {
    const grid = document.getElementById("categoryGrid");
    if (!grid || typeof sourcesData === "undefined") return;

    const categories = new Set(sourcesData.map(s => s.category));
    grid.innerHTML = "";

    categories.forEach(cat => {
        const meta = categoriesMeta[cat];
        if (!meta) return;

        const item = document.createElement("div");
        item.className = "category-item";

        const card = document.createElement("div");
        card.className = "category-card";
        card.onclick = () => location.href = meta.url;

        const icon = document.createElement("div");
        icon.className = "category-icon";
        icon.textContent = meta.icon;

        const title = document.createElement("h3");
        title.textContent = meta.title;

        const desc = document.createElement("p");
        desc.textContent = meta.description;

        card.appendChild(icon);
        card.appendChild(title);
        card.appendChild(desc);
        item.appendChild(card);
        grid.appendChild(item);
    });
}

/* -------------------------------
   4. Сортування таблиці
-------------------------------- */

function enableTableSorting(tableId) {
    const table = document.getElementById(tableId);
    if (!table) return;

    const headers = table.querySelectorAll("thead th");

    headers.forEach((th, index) => {
        th.style.cursor = "pointer";

        th.addEventListener("click", () => {
            const tbody = table.tBodies[0];
            const rows = Array.from(tbody.querySelectorAll("tr"));
            const isAsc = th.classList.toggle("asc");

            rows.sort((a, b) => {
                const aText = a.children[index].textContent.trim().toLowerCase();
                const bText = b.children[index].textContent.trim().toLowerCase();
                return isAsc ? aText.localeCompare(bText) : bText.localeCompare(aText);
            });

            tbody.innerHTML = "";
            rows.forEach(row => tbody.appendChild(row));
        });
    });
}

/* -------------------------------
   5. Перемикач теми
-------------------------------- */

function toggleThemeIcon() {
    if (typeof toggleTheme === "function") {
        toggleTheme(); // з theme.js
    }
}

/* -------------------------------
   6. Таблиці категорій (html.html, css.html тощо)
-------------------------------- */

/**
 * Рендерить таблицю для конкретної категорії
 * category  — 'html', 'css', 'js', 'api', 'tools', 'security'
 * tableId   — id таблиці на сторінці (наприклад, 'sourcesTable')
 */
function renderCategoryTable(category, tableId) {
    if (typeof sourcesData === "undefined") return;

    const table = document.getElementById(tableId);
    if (!table) return;

    // Очищаємо таблицю
    table.innerHTML = "";

    // Створюємо заголовок таблиці
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headers = ["Назва", "Статус", "Призначення", "Рівень"];
    headers.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    // Фільтруємо джерела по категорії
    const items = sourcesData.filter(src => src.category === category);

    items.forEach(src => {
        const tr = document.createElement("tr");

        // Назва
        const tdName = document.createElement("td");
        const a = document.createElement("a");
        a.href = src.url;
        a.target = "_blank";
        a.textContent = src.name || "";
        tdName.appendChild(a);

        // Статус
        const tdStatus = document.createElement("td");
        tdStatus.textContent = src.status || "";

        // Призначення
        const tdPurpose = document.createElement("td");
        tdPurpose.textContent = src.purpose || "";

        // Рівень
        const tdRating = document.createElement("td");
        tdRating.textContent = src.rating || "";

        tr.appendChild(tdName);
        tr.appendChild(tdStatus);
        tr.appendChild(tdPurpose);
        tr.appendChild(tdRating);

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    // Вмикаємо сортування по кліку на заголовок
    enableTableSorting(tableId);
}

/**
 * Фільтрація таблиці категорії з підсвічуванням знайденого
 * tableId   — id таблиці
 * inputId   — id поля вводу (наприклад, 'tableSearch')
 */
function filterCategoryTable(tableId, inputId) {
    const input = document.getElementById(inputId);
    const table = document.getElementById(tableId);
    if (!input || !table) return;

    const filter = (input.value || "").toLowerCase().trim();
    const tbody = table.tBodies[0];
    if (!tbody) return;

    const rows = Array.from(tbody.querySelectorAll("tr"));

    rows.forEach(row => {
        const cells = Array.from(row.children);
        const rowText = row.textContent.toLowerCase();

        // Показати/сховати рядок
        if (!filter || rowText.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

        // Підсвічування в кожній комірці
        cells.forEach((cell, cellIndex) => {
            // Для першої колонки з посиланням зберігаємо <a>
            if (cellIndex === 0) {
                const link = cell.querySelector("a");
                if (link) {
                    const originalText = link.textContent;
                    if (!filter) {
                        link.textContent = originalText;
                    } else {
                        link.innerHTML = highlightText(originalText, filter);
                    }
                }
            } else {
                // Для інших комірок працюємо як раніше
                const originalText = cell.textContent;
                if (!filter) {
                    cell.textContent = originalText;
                } else {
                    cell.innerHTML = highlightText(originalText, filter);
                }
            }
        });
    });
}
/* -------------------------------
   7. Ініціалізація
-------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    renderTagFilters();
    renderTagCloud();
    renderCategoriesFromData();
});