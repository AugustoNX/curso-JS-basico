let pessoa = {
    nome: "Augusto",
    idade: 29,
    falar: function() {
        console.log("ola, td bem?")
    },
    somar: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.nome);
pessoa.falar();

var soma = pessoa.somar(2, 2);
console.log(soma)