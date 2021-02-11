let palavra = [];
let palindromo;
palavra = 'sapato';

for (let index = 0; index < palavra.length; index += 1) {
  palavra = palavra + index
  console.log(palavra)
   if (palavra[index] != palavra[index]){
       palindromo = false
   } else {
     palindromo = true
   }
    
}
console.log(palindromo)

function verificaPalindrome(palavra) {
    let letras = palavra;
    let palindrome = true;

}



/*    for (let index in letras) {
        if (letras[index] != palavra[(palavra.length -1) - index]){
          palindrome = false }}
        return palindrome;
        }

        let palavra = 'arara';
        console.log(verificaPalindrome('arara'));

  */  