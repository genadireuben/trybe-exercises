// exercicio 3 : retornar o maior de tres numeros;
let a = 0;
let b = 0;
let c = 0;
window.alert("este algoritmo compara três números e retorna o maior, escolha três números.")
a = Number(window.prompt("digite um número"));
b = Number(window.prompt("digite mais um número"));
c = Number(window.prompt("digite digite outro número"));

if (a > b && a > c) {
    window.alert(a + ' é maior que ' + b + ' e ' + c);
} else if (b > a && b > c) {
    window.alert(b + ' é maior que ' + a + ' e ' + c)
} else {
    window.alert(c + ` é maior que  ${a} e ${b}`)
} 

