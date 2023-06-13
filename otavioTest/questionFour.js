// QUESTÃO 04:

function verifySquare(number) {
    if (number < 0) {
        return false;
    }
    var raiz = Math.sqrt(number);
    return raiz % 1 === 0;
}

// Exemplos de uso:
console.log(verifySquare(4)); // true (2 * 2 = 4)
console.log(verifySquare(12)); // true (4 * 4 = 12)
console.log(verifySquare(23)); // false