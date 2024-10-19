/*script for Excel*/
function copyFormulas(elementId){
    /* Get the text field */
    var copyText = document.getElementById(elementId);
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value)
        .then(() => { alert('Range copied to clipboard.\nIt can now be pasted into the Excel spreadsheet.') })
        .catch((error) => { alert(`Copy failed! ${error}`) })
}