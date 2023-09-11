// criando o elemento
var el = document.createElement("div");

el.classList = "div-criada";

console.log(el);

// inserindo o elemento filho

var container = document.querySelector("#container");

container.appendChild(el)

// insertBefore

var el2 = document.createElement("div")

el2.classList = "div-before"

var el3 = document.querySelector("#container div-criada")

container.insertBefore(el2, el3)

// teste

var para = document.createElement("div")
para.classList = "div-p-before"

var p = document.querySelector("#container p")
container.insertBefore(para, p)

// outro testes

var listona = document.querySelector("#lista")

var texto = document.createTextNode("Item 0")

var lista = document.createElement("li")
lista.appendChild(texto)

var li = document.querySelector("#lista .item")

listona.insertBefore(lista, li)

