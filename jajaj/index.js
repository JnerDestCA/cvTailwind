const boton = document.getElementById("btn-presioname");
const ventana = document.getElementById("contenedor-oculto");
const audio = document.getElementById("mi-audio");

// Al presionar el botón: mostramos todo y suena la música
boton.onclick = function () {
  ventana.style.display = "flex";
  audio.play();
};

// Al hacer clic en el contenedor (fuera de la imagen)
ventana.onclick = function (e) {
  // Verificamos que el click sea al fondo y no a la imagen misma
  if (e.target !== document.getElementById("img-jaja")) {
    ventana.style.display = "none";
    audio.pause();
    audio.currentTime = 0; // Reinicia la música para la próxima vez
  }
};
