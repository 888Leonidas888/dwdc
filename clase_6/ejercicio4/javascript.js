const btnInvest = document.getElementById("btnInvest");

//cancelamos el evento por defecto del boton enviar, para evitar la recarga de la página
//agregamos el evento click y le pasamos la función flecha
//usamos la función para leer e invertir la cadena.

btnInvest.addEventListener("click", (e) => {
  e.preventDefault();
  const txtContent = document.getElementById("txtContent").value;
  const txtResult = document.getElementById("txtResult");

  let newContent = "";

  for (let t = txtContent.length - 1; t >= 0; t--) {
    newContent = newContent + txtContent[t];
  }

  txtResult.value = newContent;
});

//Con este botón limpiamos los input
function clearAll() {
  document.getElementById("txtResult").value = "";
  document.getElementById("txtContent").value = "";
}
