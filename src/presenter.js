import Auto from "./sumador.js";

let cadena = document.querySelector("#cadena");
const button = document.querySelector("#addBtn");
const res = document.querySelector("#resp");
let auto

button.addEventListener("click", (event) => {
  event.preventDefault();
  auto = new Auto();
  let respuesta = auto.mover(cadena.value)
  res.innerHTML = "<p>" + respuesta + "</p>" 
});