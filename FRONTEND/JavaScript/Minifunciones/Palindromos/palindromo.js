function esPalindromo() {
    let cadena = prompt("Entra una cadena y comprueba si es un palíndromo:");
    let invertir = cadena.split('').reverse().join('');

    if (cadena === invertir) {
        alert(`La cadena ${cadena} és un palíndromo.`)
    } else {
        alert(`La cadena ${cadena} no és un palíndromo.`)
    }
}

esPalindromo()