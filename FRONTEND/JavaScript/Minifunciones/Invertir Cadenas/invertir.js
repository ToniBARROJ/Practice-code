function invertirCadena() {
    const cadena = prompt("Escribe cualquier cosa para invertirla:");
    const invertir = cadena.split('').reverse().join('');
    console.log(invertir);
}
invertirCadena();