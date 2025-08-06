
// Estas constantes sirven para poder utilizar las funciones de nuestros botones y del temporizador.

const stopWatch = document.getElementById("stopwatch");
const playPauseButton = document.getElementById("play-pause");
const secondsSphere = document.getElementById("seconds-sphere");

// Dos variables para poder controlar el temporizador y definir la posición de incio del mismo.

let stopwatchInterval;
let runningTime = 0;

// Esta constante nos permite detectar si la clase del boton de inicio/pausa esta funcionando. Con una condición "if else" que nos permitirá modificar el contenido de la clase.

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains("running");
    if (isPaused) {
        playPauseButton.classList.add("running");
        start();
    } else {
        playPauseButton.classList.remove("running");
        pause();
    }
}

// Esta contante nos permite desactivar el temporizador cambiando el atributo del estado de la animación de la bolita cuenta-segundos. Cuando se activa, para el temporizador y la bolita.

const pause = () => {
    secondsSphere.style.animationPlayState = "paused";
    clearInterval(stopwatchInterval);
}

// Esta constante nos permite parar el temporizador, la bolita y quitar la clase "running" del botón de play/pause. Devuelve el valor del temporizador a "00:00" y pausa el contador.

const stop = () => {
    secondsSphere.style.transform = "rotate(-90deg) translateX(120px)";
    secondsSphere.style.animation = "none";
    playPauseButton.classList.remove("running");
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopWatch.textContent = "00:00";
}

// Esta constante controla el inicio del temporizador, la animación de la bolita cuenta-segundos y empieza el cálculo del temporizador utilizando la variable "stopwatchInterval" y modificando el valor del temporizador.

const start = () => {
    secondsSphere.style.animation = "rotacion 60s linear infinite";
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = "running";
    stopwatchInterval = setInterval ( () => {
        runningTime = Date.now() - startTime;
        stopWatch.textContent = calculateTime(runningTime);
    }, 1000)
}

// Esta constante controla los cálculos dentro de la constante "start". Esta envia los valores y los representa dentro de la función "stopwatchInterval".

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    return `${display_minutes}:${display_seconds}`
}