import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//creo función para postear
function postData(urlApi, data){
    const response = fetch(urlApi, {
        //objeto con configuración del fetch
        method: 'POST',
        
        mode: 'cors',
        credentials: 'same-origin',
        
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data)

    })
    // devuelve la respuesta del request
    return response;
}

//datos modelados según API
const data = {
    "title": "LCD SCreen Course",
    "price": 666,
    "description": "Any description",
    "categoryId": 5,
    "images": ["https://i.imgur.com/wfTzxqX.jpeg"]
}

//posteo los datos
postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    
    .catch(err => console.error(err))




    