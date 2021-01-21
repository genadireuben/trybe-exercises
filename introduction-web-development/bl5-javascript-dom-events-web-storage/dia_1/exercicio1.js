document.getElementById('page-title').innerHTML = 'Genadi Reuben ';

document.getElementById('second-paragraph').innerHTML = 'aprendendoa usar a dom e recuperando elementos através do JS';

document.getElementById('subtitle').innerHTML = 'O que vou aprender hoje';

document.getElementsByClassName('classe')[0].innerText = "aprendendo a recuperar o cunteudo através de classes utilizando o conceito de lista []"

let alteraConteudo = document.getElementsByClassName('classe');

for (let index = 1; index < alteraConteudo.length; index += 1) {
    alteraConteudo[index].innerText = 'estes paragrafos foram alterados utilizando laço de repetição e inner text com o document get class e array.'

}

document.getElementsByTagName('p')[5].innerText = 'este paragrafo foi alterando atraves de recuperação por tagname e lista';


