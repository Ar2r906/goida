const fs = require('fs');
const Document = require('../models/documents'); // Sequelize-модель

async function saveToDb(documents) {
    for (const doc of documents) {
        await Document.create(doc);
    }
}

function saveToJson(documents, filename = 'parsed_docs.json') {
    fs.writeFileSync(filename, JSON.stringify(documents, null, 2));
}

module.exports = { saveToDb, saveToJson };
