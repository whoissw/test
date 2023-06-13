// QUESTÃO 03:

function calculeteFatorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    var resultado = 1;
    for (var i = 2; i <= number; i++) {
        resultado *= i;
    }
    return resultado;
}

// Calculo fatorial entre 1 a 10
for (var n = 1; n <= 10; n++) {
    var fatorial = calculeteFatorial(n);
    console.log("Valor fatorial de: " + n + ": " + fatorial);
}
