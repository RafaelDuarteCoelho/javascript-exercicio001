let numeroA = parseFloat(prompt("Insira o primeiro número"));
validador = isNaN(numeroA);
while (validador){
    numeroA = parseFloat(prompt("não é um número, insira novamente"));
    validador = isNaN(numeroA);
}

let numeroB = parseFloat(prompt("Insira o segundo número"));
validador = isNaN(numeroB);
while (validador){
    numeroB = parseFloat(prompt("não é um número, insira novamente"));
    validador = isNaN(numeroB);
}

let numeroC = parseFloat(prompt("Insira o terceiro número"));
validador = isNaN(numeroC);
while (validador){
    numeroC = parseFloat(prompt("não é um número, insira novamente"));
    validador = isNaN(numeroC);
}

if ((numeroA >= numeroB) & (numeroA >= numeroC)) {
    alert (numeroA + " é o maior número!");
}
else if ((numeroB >= numeroA) & (numeroB >= numeroC)) {
    alert (numeroB + " é o maior número!");
}
else if ((numeroC >= numeroA) & (numeroC >= numeroB)) {
    alert (numeroC + " é o maior número!");
}
else {alert ("Algo errado aconteceu!");}
