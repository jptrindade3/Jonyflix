import config from '../config';

/*
    Para deixar o codigo mais organizado, passamos a
    parte de captura dos dados para esse arquivo, então
    a função toda de busca utilizando o fetch fica aqui 
    e, na página onde precisamos do resultado, só chamar-
    mos a função para que ela faça essa busca
*/

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
    return fetch(`${URL_CATEGORIES}`) //Faz uma requisição pro nosso server json
        .then(async (serverResponse) => {//Pega a resposta do nosso server ao ser requisitado
            
            if(serverResponse.ok){
                const response = await serverResponse.json(); //Converte a resposta dada em texto para json
                return response;
            }

            throw new Error('N]ao foi possível pegar os dados :(');
        });
}

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`) //Faz uma requisição pro nosso server json
        .then(async (serverResponse) => {//Pega a resposta do nosso server ao ser requisitado
            
            if(serverResponse.ok){
                const response = await serverResponse.json(); //Converte a resposta dada em texto para json
                return response;
            }

            throw new Error('N]ao foi possível pegar os dados :(');
        });
}

export default {
    getAllWithVideos,
    getAll,
};