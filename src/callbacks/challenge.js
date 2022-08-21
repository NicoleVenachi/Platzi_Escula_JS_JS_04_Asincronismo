
//importo módulo xmlhttprequest en este proyecto/ambiente
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//llamo a API (este es el root)
const API = 'https://api.escuelajs.co/api/v1';

//creo callback para traer la respuesta

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest(); //objeto de XMLHTTPRequest

    xhttp.open('GET', urlApi,true); //abro petición a API

    //escucho los distintos 'estados' de la petición, 
    // y el estado de la mismoa, valido que sea Ok
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4){

            //0 no se ha empezado
            //1 no se ha enviado
            //2 ya se envío
            //3 esperando solicitud
            //4 completa la llamada

            if(xhttp.status === 200){
                // recibo info en xhttp.responseText
                //paso de texto a JSOn
                callback(null, JSON.parse(xhttp.responseText))
            }
            else{
                //si falla la petición, le digo el el error 
                // y donde sucedio
                const error = new Error('Error' + urlApi)
            }
        }
        else{
        }
    }
    
    xhttp.send();
}

//llamo a la función y le paso el callback
//(URL del recurso buscado, función con datos,error
fetchData(`${API}/products`, function(error1, data1){

    //si hay error lo miro
    error_info1 = Boolean(error1)===true? error1:'todo ok';
    
    //cuando es correcta, tengo data 1 y segunda petición con 
    // un elemento en particular
    fetchData(`${API}/products/${data1[0].id}`,function(error2, data2){
        
        error_info2 = Boolean(error2)===true? error2:'todo ok';
        //error_info = boolean(error2)===true? console.error(error2):console.log('todo ok');

        //puedo anidar otro llamado con data 2 para usar su idata
        //voy a ver la categoria de ese producto (con un nuevo llamado)
        fetchData(`${API}/categories/${data2.category.id}`,function(error3, data3){
            //al final imprimo la info de todo
            error_info3 = Boolean(error3)===true? error3: [
                data1[0],
                data2.title,
                data3.name
            ];

            console.log(error_info3)
        })
    })

})

