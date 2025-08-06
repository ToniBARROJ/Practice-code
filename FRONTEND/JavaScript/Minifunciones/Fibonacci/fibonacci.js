function fibonacci() {
    let n = prompt("Escribe un número aleatorio:");
    n = Number(n);
    
    if(isNaN(n) || n < 0){
        alert("Introduce un número válido.")
        return;
    }
    
    let a = 0, b = 1, resultado;

    for (let i = 2; i <= n; i++) {
        resultado = a + b;
        a = b;
        b = resultado;
    }
    
    alert(`El número de fibonacci en la posición ${n} es ${b}`);
}

fibonacci()