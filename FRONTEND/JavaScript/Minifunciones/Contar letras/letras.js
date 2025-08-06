function contarLetras() {
    const cadena = prompt("Escribe una frase:");
    const letra = prompt("Escribe una letra para contar cuantas veces se repite:");
    let arr = []

    if (letra.length > 1) {
        alert("Escribe solo una letra.");
        return contarLetras();
    };

    const array = arr.push(cadena.replace(/ /g, ""));


    console.log(cadena);
    console.log(letra);
    console.log(array);
};

contarLetras();