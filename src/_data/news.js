const axios = require("axios");
const countries = require('./countries.json');
require("dotenv").config();

async function getNews(country){
    const apiKey = process.env.API_KEY;//"";
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
    try{
        const response = await axios.get(url);
        return {
            country: country,
            articles: response.data.articles
        };
    }catch(err){
        console.error(err);
    }
}

module.exports = async function (){
    var newsPromises = countries.map(getNews);
    return Promise.all(newsPromises).then(newsObjects=>{
        return [].concat.apply([],newsObjects);
    });
};
