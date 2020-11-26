//Exercicio 5 informar se os angulos compoem um triangulo ou não:
let angulo1 = 40;
let angulo2 = 60;
let angulo3 = 'bota';
let soma = angulo1 + angulo2 + angulo3;

//primeira solução, sem a mensagem de erro;

let triangulo = soma === 180 ? "sim" : "não";

console.log(
  "A soma dos angulos informados resulta em um triangulo? " + triangulo
);

//segunda solução, com a mensagem de erro;

if (soma === 180) {
  console.log("é um triangulo");
} else if (soma < 180 || soma > 180) {
  console.log("não é um triangulo");
} else {
  console.log("erro");
}

//terceira solução, com mensagem de erro;
switch (soma) {
  case 180:
    console.log( triangulo + ', é um triangulo.');
    break;
  case soma>180 || soma<180:
    console.log(triangulo + ', é um triangulo');
    break;
    case '':
        console.log('erro');
        break;
}
