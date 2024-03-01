let intentos = 6;
let lista = ["APPLE", "MOUSE", "HOUSE", "CLASS", "ANGEL", "MONEY", "GHOST"];
let indice = Math.floor(Math.random() * lista.length);
console.log(indice);

let palabra = lista[indice]; //"APPLE";
const button = document.getElementById("guess-button");
const GRID = document.getElementById("grid");

console.log(palabra);

button.addEventListener("click", intentar);

function intentar() {
    const ROW = document.createElement("div");
    ROW.className = "row";
    console.log(ROW);

    const INTENTO = leerIntento();

    console.log(INTENTO);
    intentos--;

    if (INTENTO === palabra) {
        console.log("Ganaste");
        terminar("<h1>¡GANASTE!😀</h1>");
        return;
    } else {
        console.log("Analizar intento");
        for (let i = 0; i < palabra.length; i++) {
            const SPAN = document.createElement("span");
            SPAN.className = "letter";
            // Si la letra de la palabra es igual a la del intento, la imprime en verde
            if (palabra[i] === INTENTO[i]) {
                console.log(INTENTO[i], "verde");
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = "green";
            }
            // Si la letra de la palabra existe en el intento pero no está en la misma posición, la imprime en amarillo
            else if (palabra.includes(INTENTO[i])) {
                console.log(INTENTO[i], "amarillo");
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = "yellow";
            }
            // Si no coincide con ninguna letra de la palabra, la imprime en gris
            else {
                console.log(INTENTO[i], "gris");
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = "gray";
            }
            ROW.appendChild(SPAN);
        }
        GRID.appendChild(ROW);
    }
    if (intentos == 0) {
        console.log("Perdiste");
        terminar("<h1>¡PERDISTE!😖</h1>");
    }
}

function leerIntento() {
    let intento = document.getElementById("guess-input").value.toUpperCase();
    return intento;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}