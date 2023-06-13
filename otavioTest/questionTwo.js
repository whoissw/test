// QUESTÃO 02:

function verifyPassword(pass) {
    if (pass.length < 8) {
        return false;
    }

    var hasLowerCase = false;
    var hasUpperCase = false;
    var hasNumber = false;

    for (var i = 0; i < pass.length; i++) {
        var letter = pass.charAt(i);
        if (letter >= 'A' && letter <= 'Z') {
            hasUpperCase = true;
        } else if (letter >= 'a' && letter <= 'z') {
            hasLowerCase = true;
        } else if (!isNaN(letter)) {
            hasNumber = true;
        }
        if (hasUpperCase && hasLowerCase && hasNumber) {
            break;
        }
    }
    return hasUpperCase && hasLowerCase && hasNumber;
}


// EXEMPLO:
var passwordOne = "PasswordOne";
var passwordTwo = "PasswordTwo";

console.log(verifyPassword(senha1)); // return true
console.log(verifyPassword(senha2)); // return false
