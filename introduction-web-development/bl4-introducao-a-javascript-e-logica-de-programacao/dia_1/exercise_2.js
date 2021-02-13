// exercício 2: qual numero é maior?
let a = 15.001;
let b = 15.01;

// forma ternaria de se fazer
let maiorNumero = (a>b) ? a + ' é maior que ' + b : b + 'é maior que ' + a;

// forma normal de se fazer
console.log(maiorNumero);

if (a > b) {
    console.log(a + ' é maior do que' + b);
} else {
    console.log(b + ' é maior do que ' + a);
}
     
