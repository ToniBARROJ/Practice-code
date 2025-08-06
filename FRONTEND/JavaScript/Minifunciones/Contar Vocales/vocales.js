function contarVocales() {
    const cadena = prompt("Escribe letras aleatoriamente:");
    const numeroVocales = cadena.match(/[aeiou]/gi).length;
    
    console.log(`Dentro de la cadena ${cadena} hay ${numeroVocales} vocales`);
}
contarVocales()