// 1 -Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let num = 0;


num = window.prompt("informe um número")

window.alert("seu numéro é " + num)

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}
