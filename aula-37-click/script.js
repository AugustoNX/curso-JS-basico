var btn = document.querySelector("#botao")
var title = document.querySelector("#title")

btn.addEventListener("click", function(){
    console.log("clicou")
    this.style.color = "red"
    // title.style.display = "none"
})


title.addEventListener("click", function(){
    title.style.backgroundColor = "red"
})

// double click

title.addEventListener("dblclick", function() {
    console.log("clique duplo")
})