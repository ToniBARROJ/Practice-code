function contarPalabras() {
    const cadena = prompt("Escribe palabras: ")
    const contar = cadena.trim().split(/\s+/);
    const palabras = contar.length;

    console.log(`La frase "${cadena}", tiene ${palabras} palabras`)
}

contarPalabras();