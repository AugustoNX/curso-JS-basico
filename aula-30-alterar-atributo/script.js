// ADICIONAR ATRIBUTO

var title = document.querySelector("#title");

title.setAttribute("class", "testando-atributo");

console.log(title);


var button = document.querySelector("#clique")

// button.setAttribute("disabled", "disabled")

button.onclick = function() {
    button.setAttribute("disabled", "disabled");
}

var subtitle = document.querySelector(".subtitle")

subtitle.setAttribute("id", "titulo-2")

// REMOVER ATRIBUTO

var lista = document.querySelector("#lista")

lista.removeAttribute("id")
