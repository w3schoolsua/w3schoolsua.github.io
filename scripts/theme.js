// scripts/theme.js

const THEME_KEY = "w3schoolsua-theme"; // ключ у localStorage

function applyTheme(theme) {
    const body = document.body;
    const icon = document.getElementById("themeIcon");

    if (theme === "dark") {
        body.classList.add("dark-mode");
        if (icon) icon.textContent = "☀️";
    } else {
        body.classList.remove("dark-mode");
        if (icon) icon.textContent = "🌙";
    }
}

function getSavedTheme() {
    try {
        return localStorage.getItem(THEME_KEY);
    } catch (e) {
        return null;
    }
}

function saveTheme(theme) {
    try {
        localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
        // тихо ігноруємо
    }
}

// Викликається з кнопки (через toggleThemeIcon у references.js або прямо)
function toggleTheme() {
    const isDark = document.body.classList.contains("dark-mode");
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
    saveTheme(newTheme);
}

// Ініціалізація теми при завантаженні сторінки
document.addEventListener("DOMContentLoaded", function () {
    const saved = getSavedTheme();
    if (saved === "dark") {
        applyTheme("dark");
    } else {
        applyTheme("light");
    }
})

// Перемикач теми з іконкою
function toggleThemeIcon() {
    toggleTheme(); // з глобального theme.js
    const icon = document.getElementById("themeIcon");
    if (document.body.classList.contains("dark-mode")) {
        icon.textContent = "☀️";
    } else {
        icon.textContent = "🌙";
    }
}

// Ініціалізація іконки теми при завантаженні
document.addEventListener("DOMContentLoaded", function() {
    renderCategoriesFromData();
    const icon = document.getElementById("themeIcon");
    if (document.body.classList.contains("dark-mode")) {
        icon.textContent = "☀️";
    } else {
        icon.textContent = "🌙";
    }
});