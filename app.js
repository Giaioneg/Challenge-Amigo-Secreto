// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim(); // Elimina espacios extras

  if (nombre === "") {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  amigos.push(nombre);
  input.value = ""; // Limpia el campo después de añadir el nombre

  let lista = document.getElementById("listaAmigos");
  let nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nombre;
  lista.appendChild(nuevoElemento);
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes ingresar al menos dos amigos para sortear.");
    return;
  }

  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  let resultado = document.getElementById("resultado");
  resultado.textContent = amigoSorteado;
}