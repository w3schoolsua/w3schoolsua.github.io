// /references/references.js

// Генерація таблиці для конкретної категорії
function renderCategoryTable(category, tableId) {
    const table = document.getElementById(tableId);
    if (!table) return;

    const sources = getSourcesByCategory(category);

    // Створюємо заголовок, якщо його немає
    if (!table.tHead) {
        const thead = table.createTHead();
        const row = thead.insertRow();
        const headers = ["Назва", "Статус", "Призначення", "Рівень"];
        headers.forEach(text => {
            const th = document.createElement("th");
            th.textContent = text;
            row.appendChild(th);
        });
    }

    const tbody = table.tBodies[0] || table.createTBody();
    tbody.innerHTML = "";

    sources.forEach(src => {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        const a = document.createElement("a");
        a.href = src.url;
        a.target = "_blank";
        a.textContent = src.name;
        tdName.appendChild(a);

        const tdStatus = document.createElement("td");
        tdStatus.textContent = src.status;

        const tdPurpose = document.createElement("td");
        tdPurpose.textContent = src.purpose;

        const tdRating = document.createElement("td");
        tdRating.textContent = src.rating;

        tr.appendChild(tdName);
        tr.appendChild(tdStatus);
        tr.appendChild(tdPurpose);
        tr.appendChild(tdRating);

        tbody.appendChild(tr);
    });
}

// Глобальний пошук по всіх джерелах
function globalSearchSources() {
    const input = document.getElementById("globalSearch");
    if (!input) return;

    const filter = input.value.toLowerCase();
    const resultsContainer = document.getElementById("globalSearchResults");
    const table = document.getElementById("globalSearchTable");
    const tbody = table.tBodies[0];

    if (!filter) {
        resultsContainer.style.display = "none";
        tbody.innerHTML = "";
        return;
    }

    const results = sourcesData.filter(src => {
        const text = (src.name + " " + src.status + " " + src.purpose + " " + src.category).toLowerCase();
        return text.includes(filter);
    });

    tbody.innerHTML = "";

    results.forEach(src => {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        const a = document.createElement("a");
        a.href = src.url;
        a.target = "_blank";
        a.textContent = src.name;
        tdName.appendChild(a);

        const tdCategory = document.createElement("td");
        tdCategory.textContent = src.category.toUpperCase();

        const tdPurpose = document.createElement("td");
        tdPurpose.textContent = src.purpose;

        const tdRating = document.createElement("td");
        tdRating.textContent = src.rating;

        tr.appendChild(tdName);
        tr.appendChild(tdCategory);
        tr.appendChild(tdPurpose);
        tr.appendChild(tdRating);

        tbody.appendChild(tr);
    });

    resultsContainer.style.display = results.length ? "block" : "none";
}