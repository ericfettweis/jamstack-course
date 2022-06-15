const axios = require("axios");
require("dotenv").config();

module.exports = async function getNews(){
    const apiKey = process.env.API_KEY;//"";
    const country='fr';
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
    try{
        const response = await axios.get(url);
        return response.data;
    }catch(err){
        console.error(err);
    }
};
