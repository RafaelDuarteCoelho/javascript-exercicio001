let numeroX = [parseInt(prompt("Insira o número inteiro que será o valor de X"))];      /* escolhi fazer em array e não com uma variavel auxiliar, pois queria manter um histórico das mudanças de valor das variáveis */
validador = isNaN(numeroX[0]);
while (validador){
    numeroX[0] = parseInt(prompt("não é um número, insira novamente"));
    validador = isNaN(numeroX[0]);
}

let numeroY = [parseInt(prompt("Insira o número inteiro que será o valor de Y"))];
validador = isNaN(numeroY[0]);
while (validador){
    numeroY[0] = parseInt(prompt("não é um número, insira novamente"));
    validador = isNaN(numeroY[0]);
}

numeroX[1] = numeroY[0];
numeroY.push(numeroX[0]);                  /*mostrando dois métodos de adição*/

alert("O valor de X era : " + numeroX[0] + " e agora é: " + numeroX[1] + "\r\n" + "O valor de Y era : " + numeroY[0] + " e agora é: " + numeroY[1]);
