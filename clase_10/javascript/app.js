const showGallery = document.getElementsByClassName("gallery-container")[0];

const btnToggle = document.getElementsByClassName("switch")[0];
btnToggle.addEventListener("click", (e) => {
  e.preventDefault();
  const hideDiv = document.getElementsByClassName("image-slider")[0];
  let displayValue = hideDiv.style.display;
  if (displayValue === "none") {
    hideDiv.style.display = "flex";
    btnToggle.textContent = "vista galeria";
    showGallery.style = "none";
  } else {
    hideDiv.style.display = "none";
    btnToggle.textContent = "vista slider";
    showGallery.style.display = "flex";
  }
});

// Declarar un array con las rutas de las imágenes
let images = [
  "./img/pygame-iniciese-en-el-desarrollo-de-videojuegos-en-python-9782409041938_XL.jpg",
  "./img/programacion-shell-en-unix.jpg",
  "./img/google-ads-cree-y-optimice-sus-campanas-publicitarias-para-impulsar-su-visibilidad.jpg",
  "./img/aprender-la-programacion-orientada-a-objetos-con-el-lenguaje-java.jpg",
];

// Declarar una variable para llevar el índice de la imagen actual
let currentImageIndex = 0;

// Seleccionar los elementos del DOM que se van a manipular
let img = document.querySelector("img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

// Definir una función que cambie la imagen según el índice
function changeImage() {
  img.src = images[currentImageIndex];
}

// Definir una función que incremente el índice y lo mantenga dentro del rango del array
function nextImage() {
  currentImageIndex++;
  if (currentImageIndex > images.length - 1) {
    currentImageIndex = 0;
  }
}

// Definir una función que decremente el índice y lo mantenga dentro del rango del array
function prevImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
}

// Asignar manejadores de eventos a los botones para cambiar la imagen al hacer clic
prev.addEventListener("click", function () {
  prevImage();
  changeImage();
});

next.addEventListener("click", function () {
  nextImage();
  changeImage();
});
