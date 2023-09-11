var novoP = document.createElement("p");

var texto = document.createTextNode("Este é o conteudo do paragrafo")

novoP.appendChild(texto)

console.log(novoP);

var body = document.querySelector('body')

body.appendChild(novoP)

// inserir em um container

var container = document.querySelector('#container')

var spa = document.createElement("span")

spa.appendChild(document.createTextNode("texto do span"))

container.appendChild(spa)

// -------------MEU JEITO----------

// var container = document.querySelector('#container')

// var spa = document.createElement("span")

// var textao = document.createTextNode("estou no span")

// container.appendChild(spa)
// spa.appendChild(textao)