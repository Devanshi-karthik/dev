(function(){document.cookie = "necessary-cookie= value";
let child = document.createElement("li");
child.textContent = "External script 3 got executed which sets Necessary cookies.";
if (document.getElementById("script-info")) {
    document.getElementById("script-info").appendChild(child);
} else {
    window.addEventListener('DOMContentLoaded', () => {
        document.getElementById("script-info").appendChild(child);
    });
}})();

