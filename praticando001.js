var bloco1 = window.document.getElementById('bloco')
var textão = window.document.getElementById('textinho')
var la_ele = window.document.getElementById('musica')
var verdade = false
bloco1.addEventListener('click', clicar)

function clicar() {
    if (!verdade) {
    bloco1.style.background = 'red'
textão.innerHTML = `<strong>Clicou!</strong>`
bloco1.style.width = '130px'
bloco1.style.height = '130px'
bloco1.style.boxShadow = '5px 5px 5px'
var imagem = window.document.createElement('img')
imagem.src = 'la ele.png'
bloco1.appendChild(imagem)
imagem.style.width = '90px'
imagem.style.height = '90px'
var titulo = window.document.createElement('header')
titulo.innerHTML = ''
titulo.innerHTML += `<h1><strong>LA ELEE!</strong></h1>`
window.document.body.appendChild(titulo)
titulo.style.textAlign = 'center'
titulo.id = 'titulo'
la_ele.play()
verdade = true
setTimeout(function() {
bloco1.style.background = '';  
bloco1.style.width = '';
bloco1.style.height = '';
bloco1.style.boxShadow = '';
window.document.body.removeChild(titulo)
bloco1.removeChild(imagem)
verdade = false
textão.innerHTML = 'Clique'
}, 3500);
}
}
