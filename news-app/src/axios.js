import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/',
             'headers': {
             'x-rapidapi-host':'microsoft-azure-bing-news-search-v1.p.rapidapi.com',
             'x-rapidapi-key': 'e71cb0ee0dmshc684092623d89d7p142216jsnbf551f1301ba'
    }, 
});


export default instance;