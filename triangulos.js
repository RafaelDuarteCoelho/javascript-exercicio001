var triangulo_valido = false;

while (triangulo_valido == false) {
    var angulo1 = parseFloat(prompt("Insira o primeiro ângulo do triângulo"));
    validador = isNaN(angulo1);
    while (validador){
        angulo1 = parseFloat(prompt("Ângulo inválido, insira novamente:"));
        validador = isNaN(angulo1);
    }

    var angulo2 = parseFloat(prompt("Insira o segundo ângulo do triângulo"));
    validador = isNaN(angulo2);
    while (validador){
        angulo2 = parseFloat(prompt("Ângulo inválido, insira novamente:"));
        validador = isNaN(angulo2);
    }

    var angulo3 = parseFloat(prompt("Insira o terceiro ângulo do triângulo"));
    validador = isNaN(angulo3);
    while (validador){
        angulo3 = parseFloat(prompt("Ângulo inválido, insira novamente:"));
        validador = isNaN(angulo3);
    }

    var total = angulo1 + angulo2 + angulo3;
    
    if (total == 180) {
        triangulo_valido = true;
    }
    else {
        alert("Triângulo inexistente! é necessário que a soma dos ângulos seja igual a 180º!");
    }
}    

if ((angulo1 === angulo2) & (angulo1 === angulo3)) {
    alert ("É um triângulo equilátero!");
}else if ((angulo1 === angulo2) || (angulo1 === angulo3) || (angulo2 === angulo3)) {
    alert ("É um triângulo isósceles!");
}else {
    alert("É um triângulo escaleno!");
}