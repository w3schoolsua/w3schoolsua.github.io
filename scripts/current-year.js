// Автоматичне відображення поточного року
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
// Дата оновлення сторінки
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("updated-time");

  const date = new Date(document.lastModified);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  // Формат для атрибуту datetime: рррр-мм-дд
  const datetimeValue = `${year}-${month}-${day}`;

  // Формат для відображення: дд.мм.рррр
  const displayValue = `${day}.${month}.${year}`;

  el.setAttribute("datetime", datetimeValue);
  el.textContent = displayValue;
});