
import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

//creo función que recibe 'API' y devuelve resultado
//de una promesa con el estado del request

function fetchData(urlApi){
    return fetch(urlApi);
};

fetchData(`${API}/products`)
    //convierto a JSON
    .then(response => response.json())
    //muesto elemento del JSON
    .then(products => console.log(products[1]))
    .catch(err => console.log(err))

//Múltiples promesas

//1era, traigo productos
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        //2do, traigo un producto con id particular
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`);
    })
    //volver a menejar
    .then(response => response.json())
    .then(product => {
        //3ra, traigo categoría de ese product particular
        console.log(product);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    //volver a menejar
    .then(response => response.json())
    .then(category => console.log(category))

    .catch(err => console.log(err))

    .finally(() => console.log('Al fin se acabó'));

