function loadFooter() {
    const menuContainer = document.querySelector("#footer-container");
    fetch("/plantillas/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el menú");
            }
            return response.text();
        })
        .then(data => {
            menuContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Error:", error);
            menuContainer.innerHTML = "<p>Error al cargar el menú.</p>";
        });
}

// Ejecutar la función cuando la página cargue
document.addEventListener("DOMContentLoaded", loadFooter);