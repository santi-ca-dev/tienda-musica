document.addEventListener('DOMContentLoaded', () => {
    // Obtener el número de la página actual desde la URL
    const productList = [
        "djnanobot",
        "mixsummer2023",
        "electricdream",
        "djjam",
        "technohits",
        "djbot",
        "djsharky",
        "djrabbit",
        "afterwork",
        "goodvibes",
        
    ];

    const currentPath = window.location.pathname.split('/').pop().split('.')[0];
    const currentIndex = productList.indexOf(currentPath);
    // Obtener el número de la página actual desde la URL
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const allButton = document.querySelector('.all');
    // Configurar el enlace del botón "Anterior"
    if (currentIndex > 0) {
        prevButton.href = `/paginas/discos/${productList[currentIndex - 1]}.html`;
    } else {
        prevButton.style.visibility = 'hidden';
    }
    // Configurar el enlace del botón "Siguiente"
    if (currentIndex < productList.length - 1) {
        nextButton.href = `/paginas/discos/${productList[currentIndex + 1]}.html`;
    } else {
        nextButton.style.visibility = 'hidden';
    }
    // Configurar el enlace del botón "Siguiente"
    allButton.href = `/paginas/productos.html`;
});
