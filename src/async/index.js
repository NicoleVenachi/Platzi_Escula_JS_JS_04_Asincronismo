
//defino el 'callback'
const fnAsyn = () => {
    return new Promise(function(resolve, reject){
        
        true?setTimeout(()=>resolve('Asyn!!'), 1000)
            :reject(new Error('Error!'))
    })
};

//defino la función async
const anotherFn = async () => {
    //le paso el callback
    const something = await fnAsyn();
    //habrá orden en los llamdas dentro de la 
    //función async-await
    console.log(something);
    console.log('Hello');
}

//llamo la función async
console.log('Start');
anotherFn();
console.log('Finished');




