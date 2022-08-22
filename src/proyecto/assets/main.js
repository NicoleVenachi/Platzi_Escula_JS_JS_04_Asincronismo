
//fetch features
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC3vqXa8aJOIv0GHFXfK-4lg&part=snippet%2Cid&order=date&maxResults=10';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b837f6a487msh708c739dc03d785p1beeb5jsn1f70ef1bda8e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    console.log('hola')
    return data
}

//funcion para llamar el fetch y mostar datos en HTML

// se llama a sí misma, pues para que crear 
// y luego instanciar

const container = null || document.getElementById('content');

(async () => {
    try{
        const videos = await fetchData(API);

        //template para mostrar data

        //en el content solo cambiar los elementos 
        //del vídeo. Recorro cada elemento del array 
        // y metto esa data en el HTML
        let view = `
            ${
                videos.items.map((videoInfo) => 
                    `
                    <div class="group relative">
                        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                            <img src="${videoInfo.snippet.thumbnails.high.url}" alt=${videoInfo.snippet.description}" class="w-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <h3 class="text-sm text-gray-700">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                ${videoInfo.snippet.title}
                            </h3>
                        </div>
                    </div>
                    `
                    
                ).join('')
            //con el ..join hago una cadena de texto de todos
            }
        
        `
        console.log(view)
        container.innerHTML = view;
    }
    catch (err){
        console.error(err);
    }
})();
// TEMPLATE a crear para meter videos
// <div class="group relative">
//     <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
//         <img src="" alt="" class="w-full">
//     </div>
//     <div class="mt-4 flex justify-between">
//         <h3 class="text-sm text-gray-700">
//             <span aria-hidden="true" class="absolute inset-0"></span>
//             title
//         </h3>
//     </div>
// </div>


