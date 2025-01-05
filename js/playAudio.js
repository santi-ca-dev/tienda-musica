function playAudio(audioId) {
    // Seleccionar todos los audios y spans
    const audios = document.querySelectorAll('audio');
    const spans = document.querySelectorAll('.galeria-3d span');

    // Seleccionar el audio actual
    const selectedAudio = document.getElementById(audioId);
    const currentSpan = selectedAudio.parentElement;

    // Si el audio actual está reproduciéndose, se pausa
    if (!selectedAudio.paused) {
        selectedAudio.pause(); // Pausa el audio
        currentSpan.classList.remove('playing'); // Quita la clase "playing"
        return; // Sale de la función
    }

    // Pausar otros audios y quitar clases "playing"
    audios.forEach(audio => {
        audio.pause();
    });

    spans.forEach(span => span.classList.remove('playing'));

    // Reproducir el audio seleccionado desde su posición actual
    selectedAudio.play();
    currentSpan.classList.add('playing'); // Añadir efecto visual
}
