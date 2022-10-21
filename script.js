function displayTooltip(elementId) {
    document.getElementById(elementId).style.visibility = "visible"
}

function hideTooltip(elementId) {
    document.getElementById(elementId).style.visibility = "hidden"
}

function snackbar(element) {
    var x = document.getElementById(element);
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function copyText() {
    navigator.clipboard.writeText("madibye ✿#5040");
}