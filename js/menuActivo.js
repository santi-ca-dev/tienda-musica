function activateMenuItem() {
    const currentPath = window.location.pathname.split('/').pop(); 
    const menuLinks = document.querySelectorAll(".main-menu .menu-items a");

    menuLinks.forEach(link => {
        const linkHref = link.getAttribute("href").split('/').pop(); 
        if (linkHref === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}
