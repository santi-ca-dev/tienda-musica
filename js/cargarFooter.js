function loadFooter() {
    const footerContainer = document.querySelector("#footer-container");

    fetch("/tienda-musica/plantillas/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el footer");
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Error:", error);
            footerContainer.innerHTML = "<p>Error al cargar el footer.</p>";
        });
}

document.addEventListener("DOMContentLoaded", loadFooter);