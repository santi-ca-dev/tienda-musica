function activateMenuItem() {
    const currentPath = window.location.pathname; // Obtiene la ruta actual
    const menuLinks = document.querySelectorAll(".main-menu .menu-items a");

    menuLinks.forEach(link => {
        // Compara la ruta actual con el atributo href
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active"); // Agrega la clase active al enlace actual
        } else {
            link.classList.remove("active"); // Asegura que otros enlaces no tengan la clase
        }
    });
}
