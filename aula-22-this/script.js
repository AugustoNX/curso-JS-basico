var teste = 5;

console.log(this);
console.log(this.teste);

let pessoa = {
    nome: "Augusto",
    idade: 29,
    falar: function() {
        console.log("ola, td bem?")
    },
    dizerNome: function( ) {
        console.log("o meu nome é " + this.nome)
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return 'Sr. ' + this.nome
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

var sdc = pessoa.saudacao();

console.log(sdc)