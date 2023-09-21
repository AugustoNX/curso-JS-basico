// mouseover
var title = document.querySelector("#title")

title.addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow"
})

// mouseout
title.addEventListener("mouseout", function(){
    this.style.backgroundColor = "white"
})

// afetar outro elemento com mouseover
var subtitle = document.querySelector(".subtitle")

title.addEventListener("mouseover", function(){
    var legenda = document.querySelector("#hide")
    legenda.classList.remove("subtitle")
})

title.addEventListener("mouseout", function(){
    var legenda = document.querySelector("#hide")
    legenda.classList.add("subtitle")
})