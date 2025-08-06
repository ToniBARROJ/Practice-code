function numeroMasGrande() {
    const entrada = prompt("Escribe una lista de números separados por comas (por ejemplo: 4, 16, 7):");

    if (!entrada) {
        console.log("No escribiste nada.");
        return;
    }

    // Separar por comas, eliminar espacios y convertir a número
    const numeros = entrada.split(',')
        .map(num => Number(num.trim()))
        .filter(num => !isNaN(num)); // eliminar valores no numéricos

    if (numeros.length === 0) {
        console.log("No se detectaron números válidos.");
        return;
    }

    const mayor = Math.max(...numeros);

    console.log(`Los números ingresados son: [${numeros.join(', ')}]`);
    console.log(`El número más grande es: ${mayor}`);
}

numeroMasGrande();