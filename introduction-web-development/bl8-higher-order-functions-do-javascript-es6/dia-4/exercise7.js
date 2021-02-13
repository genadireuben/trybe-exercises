const assert = require('assert')

const ships = [
    {
        name: "Titanic",
        length: 269.1
    },
    {
        name: "Queen Mary 2",
        length: 1132,
        measurementUnit: "feet"
    },
    {
        name: "Yamato",
        length: 256,
        measurementUnit: "meters"
    }
]

//Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:

// escreva shipLength abaixo

assert.strictEqual(shipLength(ships[0]), "Titanic is 269.1 meters long")
assert.strictEqual(shipLength(ships[1]), "Queen Mary 2 is 1132 feet long")
assert.strictEqual(shipLength(ships[2]), "Yamato is 256 meters long")