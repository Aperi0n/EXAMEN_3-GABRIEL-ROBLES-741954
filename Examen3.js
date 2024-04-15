let randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100

const guesses = document.querySelector(".guesses"); // Selecciona el párrafo con la clase "guesses" del HTML
const lastResult = document.querySelector(".lastResult"); // Selecciona el párrafo con la clase "lastResult" del HTML
const lowOrHi = document.querySelector(".lowOrHi"); // Selecciona el párrafo con la clase "lowOrHi" del HTML

const guessSubmit = document.querySelector(".guessSubmit"); // Selecciona el botón "Enviar respuesta" del HTML
const guessField = document.querySelector(".guessField"); // Selecciona el campo de entrada "guessField" del HTML

let guessCount = 1; // Variable para llevar la cuenta de los intentos del jugador (inicializada en 1)
let resetButton; // Variable para almacenar el botón "Iniciar nuevo juego" (inicialmente sin valor)

function checkGuess() // Esta función es un marcador de posición y no se usa en la lógica actual del juego
{
  alert("Soy un marcador de posición"); // alert("Soy un marcador de posición");
}

checkGuess(); // Llama a la función checkGuess() (marcador de posición) una vez al inicio

let name = "Bingo"; // Variable para almacenar el nombre 
name; // Imprime la variable hello en la consola
let hello = " dice hola!"; // Variable para almacenar un saludo
hello; // Imprime la variable hello en la consola
let greeting = "¡" + name + hello; // Crea un saludo completo combinando las variables name y hello
greeting; // Imprime la variable greeting en la consola

name += " dice hola!"; // Concatena un nuevo saludo a la variable name

name = name + " dice hola!"; // Reemplaza el valor de name por una cadena que incluye el saludo

function checkGuess() // Esta es la función principal que verifica los intentos del jugador

{
  let userGuess = Number(guessField.value);   // Convierte el valor del campo guessField a un número

  if (guessCount === 1) { 
    guesses.textContent = "Intentos anteriores: ";   // Si es el primer intento, inicializa el texto del párrafo "guesses"

  }
  guesses.textContent += userGuess + " ";   // Agrega el intento actual del usuario al texto del párrafo "guesses"


  if (userGuess === randomNumber) {   // Comprueba si el intento del usuario es correcto
    lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";     // Muestra un mensaje de victoria
    lastResult.style.backgroundColor = "green";     // Establece el color de fondo del mensaje de victoria a verde
    lowOrHi.textContent = ""; // Limpia el texto del párrafo "lowOrHi"
    setGameOver(); // Llama a la función setGameOver para finalizar el juego
  } else if (guessCount === 10) { // Si es el último intento (décimo), muestra un mensaje de derrota
    lastResult.textContent = "¡¡¡Fin del juego!!!";
    setGameOver(); // Llama a la función setGameOver para finalizar el juego
  } else {
    lastResult.textContent = "¡Incorrecto!"; // Si el intento es incorrecto y quedan intentos
    lastResult.style.backgroundColor = "red"; // Establece el color de fondo del mensaje de error a rojo
    if (userGuess < randomNumber) { // Proporciona una pista al usuario si el intento es muy bajo
      lowOrHi.textContent = "¡El número es muy bajo!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "¡El número es muy grande!"; // Proporciona una pista al usuario si el intento es muy alto
    }
  }

  guessCount++; // Incrementa la variable guessCount para llevar la cuenta de los intentos
  guessField.value = ""; // Limpia el campo de entrada "guessField" para el siguiente intento
  guessField.focus(); // Coloca el cursor en el campo de entrada "guessField" para el siguiente intento
}

guessCount === 1; // Comprueba si es el primer intento

guessSubmit.addEventListener("click", checkGuess); // Agrega un detector de eventos "click" al botón "Enviar respuesta"

function setGameOver() { // Función para deshabilitar los elementos del juego y crear el botón "Iniciar nuevo juego"
  guessField.disabled = true; // Deshabilita el campo de entrada "guessField"
  guessSubmit.disabled = true; // Deshabilita el botón "Enviar respuesta"
  resetButton = document.createElement("button"); // Crea un elemento botón
  resetButton.textContent = "Iniciar nuevo juego"; // Establece el texto del botón a "Iniciar nuevo juego"
  document.body.append(resetButton); // Agrega el botón al final del cuerpo del documento (contenedor principal)
  resetButton.addEventListener("click", resetGame); // Agrega un detector de eventos "click" al botón "Iniciar nuevo juego"
}

function resetGame() { // Función para reiniciar el juego
  guessCount = 1; // Reinicia la variable de intentos a 1

  const resetParas = document.querySelectorAll(".resultParas p"); // Selecciona todos los párrafos dentro del elemento con clase "resultParas"
  for (let i = 0; i < resetParas.length; i++) { 
    resetParas[i].textContent = ""; // Recorre todos los párrafos seleccionados y limpia su contenido
  }

  resetButton.parentNode.removeChild(resetButton); // Elimina el botón "Iniciar nuevo juego" de su elemento padre

  guessField.disabled = false; // Habilita nuevamente el campo de entrada "guessField"
  guessSubmit.disabled = false; // Habilita nuevamente el botón "Enviar respuesta"
  guessField.value = ""; // Limpia el campo de entrada "guessField"
  guessField.focus(); // Coloca el cursor en el campo de entrada "guessField" para el siguiente intento

  lastResult.style.backgroundColor = "white"; // Cambia el color de fondo del mensaje de resultado a blanco (limpia estilos)

  randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un nuevo número aleatorio entre 1 y 100
}

for (let i = 1; i < 21; i++) {
  console.log(i); // Imprime números del 1 al 20 en la consola 
}

const resetParas = document.querySelectorAll(".resultParas p"); // Selecciona todos los párrafos dentro del elemento con clase "resultParas"
for (let i = 0; i < resetParas.length; i++) {
  resetParas[i].textContent = "";
}

guessField.focus(); // Intentos de enfocar el campo "guessField"

const guessField = document.querySelector(".guessField"); // Selecciona nuevamente el campo "guessField"

guessField.focus(); 

guessField.value = "Hola"; // Establece el valor del campo "guessField" a "Hola"

guesses.value; // Accede al valor de la propiedad "value" del elemento "guesses"

guesses.textContent = "¿Dónde está mi párrafo?"; // Establece el texto del párrafo "guesses" a un mensaje

guesses.style.backgroundColor = "yellow"; // Aplica estilos CSS al párrafo "guesses"
guesses.style.fontSize = "200%";
guesses.style.padding = "10px";
guesses.style.boxShadow = "3px 3px 6px black";
