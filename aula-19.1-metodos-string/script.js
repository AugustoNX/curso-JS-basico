var frase = "Esta é a frase que vamos manipular";

console.log(frase.toLocaleLowerCase());
console.log(frase.toUpperCase());

// trim
console.log("------TRIM------");

var nome = "      Augusto         ";

var nomeTrim = nome.trim();

console.log(nomeTrim);
console.log(nome);

// split
console.log("------SPLIT------");

console.log(frase.split(" "));

var tags = "php, JavaScript, Python, Go";

console.log(tags.split(","));


// lastIndexof
console.log("------lastIndexof------");

var fraseDois = "Eu quero a ultima palavra teste desta frase de teste"

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));