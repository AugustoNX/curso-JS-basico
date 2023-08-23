function primeirafuncao() {
    console.log("Hello world das funções")
}

primeirafuncao();

function dizernome(nome) {

    console.log("o nome é: " + nome)

}

dizernome("Augusto");
dizernome("Negri");
dizernome("Xavier");

var nomedobancodedados = "Ana Julia";

dizernome(nomedobancodedados);

function soma(a, b) {
    var soma = a + b;
    return soma;
}

var somaum = soma(2, 5)
document.write("o valor é: " + somaum)

var somadois = soma(5, 5)
console.log(somadois)

console.log(soma(4, 5))