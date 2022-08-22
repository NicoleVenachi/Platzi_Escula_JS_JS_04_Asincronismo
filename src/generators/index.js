function* gen(){
    //aqiui  le paso el bloque de info

    //tengo múltiples stages, y puedo 
    //llamar a cada uno y los conseucuentes
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* iretable(array) {
    for (let element of array){
        yield element
    }
}

const it = iretable(['Oscar, Omar, Lucia'])
console.log(it.next());

