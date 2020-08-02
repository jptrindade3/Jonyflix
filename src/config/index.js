/*
Esse arquivo funciona como se fosse um .env pra a gente
Deixamos salvo localmente a URL que vamos usar e a chamamos
onde vamos precisar dela
*/

const URL_BACKEND = window.location.hostname.includes('localhost') 
        ? 'http://localhost:3333'
        : 'https://jonyflix.herokuapp.com';

export default {
    URL_BACKEND,
};