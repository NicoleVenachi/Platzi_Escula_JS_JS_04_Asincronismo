// 

//función suma interna
function sum(a,b){
    return a + b;
}

//función externa, argumento función
function calc(num1,num2,callback){
    return callback(num1,num2)
}

//invocar callback
console.log( calc(2,2,sum) )


//set time out

setTimeout(function(){
    console.log('Hi')
}, 2000)


function greetings(name){
    console.log(`Hello, ${name}`)
}

setTimeout(greetings,2000,'Leia');

