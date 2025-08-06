function esPar() {
    const n = prompt("Introduce un número entero: ");
    if (n === null) {
        alert("No se ha introducido ningún número.");
        return;
    }

    if ( n % 2 === 0) {
        alert(`El número ${n} es par.`)
    } else {
        alert(`El número ${n} es impar.`)        
    }
}

esPar();