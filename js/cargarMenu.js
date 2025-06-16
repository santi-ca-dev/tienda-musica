function loadMenu(callback) {
    const menuContainer = document.querySelector("#menu-container");

    // Cambiar la ruta para que incluya el prefijo del repositorio
    fetch("/tienda-musica/plantillas/menu.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el menú");
            }
            return response.text();
        })
        .then(data => {
            menuContainer.innerHTML = data;
            if (typeof callback === "function") {
                callback(); // Llamar a la función después de cargar el menú
            }
        })
        .catch(error => {
            console.error("Error al cargar el menú:", error);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadMenu(() => {
        activateMenuItem(); // Llamar a la función para activar el enlace correcto
    });
});
