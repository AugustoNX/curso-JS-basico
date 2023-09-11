// length

var array = [1, 2, 3, 4, 5];

console.log(array.length);


// push
array.push(6, "string")

console.log(array)


// pop
array.pop();
console.log(array)


// unshift
array.unshift(0);
array.unshift("teste");

console.log(array)


// shift
array.shift();

console.log(array)

// acessar o ultimo elemento
console.log(array[array.length - 1])

// isArray
console.log(Array.isArray(array))