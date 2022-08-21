


const promise = new Promise(function(resolve, reject){
    
});


//contar vacas, cumplo si estoy por encima de 10
const cows = 15;

const countCows = new Promise(function(resolve, reject){

    if(cows>10){
        resolve(`We have ${cows} cows no the farm`)
    }
    else{
        reject('there aren\'t enough cows ')
    }
})

.then((result) => console.log(result))
.catch((err) => console.log(err) )
countCows.finally(() => {
    console.log('Finalizó')
});


