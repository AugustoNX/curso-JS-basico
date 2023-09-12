// ADICIONAR ATRIBUTO

var title = document.querySelector("#title");

title.setAttribute("class", "testando-atributo");

console.log(title);


var button = document.querySelector("#clique")

// button.setAttribute("disabled", "disabled")

var subtitle = document.querySelector(".subtitle")

subtitle.setAttribute("id", "titulo-2")

button.onclick = function() {
    button.setAttribute("disabled", "disabled");
    img.setAttribute("src", "https://uploads.metropoles.com/wp-content/uploads/2023/07/05165852/passarinhos-cantam-arvore-0117-1400x800-1.jpg")
}


// REMOVER ATRIBUTO

var lista = document.querySelector("#lista")

lista.removeAttribute("id")

var img = document.querySelector("#img")
