/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
    const sortOddsAndEvens = array.sort((a, b) => a - b);
    return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`); */
/* 
const factorial = (number) => {

    for (let index = 0; index < number.length; index++) {
        const element = array[index];
        
    }


}

console.log(factorial(5)) */

const factorial = number => {
    let result = 1

    for (let i = 2; i <= number; i += 1) {
        result *= i
    }

    return result
}

console.log(factorial(5))