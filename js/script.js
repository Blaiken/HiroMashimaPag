// FUNCIÓN DEL MENÚ DESPLEGABLE:

document.getElementById("toggleDropdown").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    var submenu = this.nextElementSibling;
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
});

// DETECTAR CLICS FUERA DEL MENÚ Y CERRARLO:

document.addEventListener("click", function(event) {
    var submenu = document.querySelector(".submenu");
    var toggleDropdown = document.getElementById("toggleDropdown");

    // Verifica si el clic ocurrió fuera del menú desplegable
    if (!toggleDropdown.contains(event.target) && !submenu.contains(event.target)) {
        submenu.style.display = "none";
    }
});