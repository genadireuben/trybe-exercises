//Exercicio 5 informar se os angulos compoem um triangulo ou não:
let angulo1 = 40;
let angulo2 = 60;
let angulo3 = 500;
let soma = angulo1 + angulo2 + angulo3;
let triangulo = soma ==180 ? 'true' : 'false' ;

console.log("A soma dos angulos informados resulta em um triangulo? " + triangulo);

if (soma === 180) {
    console.log('é um triangulo')
} else if (soma < 180 || soma >180) {
    console.log('não é um triangulo')
} else { console.log('erro')
    
} 


