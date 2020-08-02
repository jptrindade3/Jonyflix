import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo)
    }) //Faz uma requisição pro nosso server json
        .then(async (serverResponse) => {//Pega a resposta do nosso server ao ser requisitado
            
            if(serverResponse.ok){
                const response = await serverResponse.json(); //Converte a resposta dada em texto para json
                return response;
            }

            throw new Error('N]ao foi possível cadastrar os dados :(');
        });
}

export default {
    create,
};