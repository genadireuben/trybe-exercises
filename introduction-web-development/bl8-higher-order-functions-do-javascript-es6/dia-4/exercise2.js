const assert = require('assert')

//Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
// escreva sum abaixo

const sum = (arr) => {

    return arr.reduce((acumulator, current) => acumulator + current)

}

const arr = [1, 2, 3]
console.log(sum(arr))

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)

