for(var i = 10; i > 0; i--) {

    console.log(i);

    if(i === 5) {
        break;
    }
}

console.log("deu um break")

var x = 10;

while(x < 100) {

    x += 10;

    if(x === 60 || x === 90) {
        console.log("erro no " + x)
        continue;
    }

    console.log("testando continue " + x)
}

// for(var z = 0; z < 100; z += 10) {
    
//     if( z === 60) {
//         continue
//     }

//     console.log("continue " + z)
// }
