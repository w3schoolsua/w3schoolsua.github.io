<!--Автоматичне відображення поточного року-->
    document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("current-year").textContent = new Date().getFullYear();
});