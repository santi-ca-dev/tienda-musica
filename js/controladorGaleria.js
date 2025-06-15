document.addEventListener('DOMContentLoaded', () => {
  const galeria = document.querySelector('.galeria-3d');
  const boton = document.getElementById('boton-playpause');
  let enRotacion = true;

  const iconoPause = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
         viewBox="0 0 24 24" stroke-width="1.5"
         stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
    </svg>`;

  const iconoReanudar = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
         viewBox="0 0 24 24" stroke-width="1.5"
         stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 
            3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 
            13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>`;

  // Mostrar icono inicial
  boton.innerHTML = iconoPause;

  window.alternarReproduccion = () => {
    enRotacion = !enRotacion;
    galeria.classList.toggle('pausada');
    boton.innerHTML = enRotacion ? iconoPause : iconoReanudar;
  };
});
