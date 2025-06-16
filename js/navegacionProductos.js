document.addEventListener('DOMContentLoaded', () => {
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

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const allButton = document.querySelector('.all');

    if (currentIndex > 0) {
        prevButton.href = `/tienda-musica/paginas/discos/${productList[currentIndex - 1]}.html`;
    } else {
        prevButton.style.visibility = 'hidden';
    }

    if (currentIndex < productList.length - 1) {
        nextButton.href = `/tienda-musica/paginas/discos/${productList[currentIndex + 1]}.html`;
    } else {
        nextButton.style.visibility = 'hidden';
    }

    allButton.href = `/tienda-musica/paginas/productos.html`;
});