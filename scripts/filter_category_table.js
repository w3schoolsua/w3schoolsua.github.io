// Фільтрація рядків таблиці за текстом із поля пошуку
function filterCategoryTable(id){
    let f=document.getElementById("tableSearch").value.toLowerCase();
    let r=document.getElementById(id).getElementsByTagName("tr");
    for(let i=1;i<r.length;i++){
        r[i].style.display=r[i].innerText.toLowerCase().includes(f)?"":"none";
    }
}