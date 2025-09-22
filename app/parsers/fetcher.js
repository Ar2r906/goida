const axios = require('axios');

async function fetchPage(url) {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (err) {
        console.error(`Ошибка загрузки ${url}:`, err.message);
        return null;
    }
}

module.exports = { fetchPage };
