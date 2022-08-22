
import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    //hace peticón a una URL y devulve
    //el resultado como un JSON
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

//Modelo las disintas llamadas
const anoterFunction = async (urlApi) =>{
    try{
        //traigo todos los products
        const products = await fetchData(`${urlApi}/products`);
        //traigo un producto
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        //veo categoría del último producto
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        
        console.log(products[0]);
        console.log(product.title);
        console.log(category.name);
    }
    catch (err){
        console.error(err);
        
    }
}

anoterFunction(API);

