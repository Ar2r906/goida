const { fetchPage } = require('./fetcher');
const { parseContent } = require('./parser');
const { saveToDb, saveToJson } = require('./saver');

const urls = ['https://example.com/laws', 'https://example.com/standards'];

async function runParser() {
  const documents = [];
  for (const url of urls) {
    const html = await fetchPage(url);
    if (!html) continue;
    const doc = parseContent(html, url);
    if (!doc) continue;
    documents.push(doc);
  }
  await saveToDb(documents);
  saveToJson(documents);
  console.log(`Сохранено ${documents.length} документов`);
}

module.exports = { runParser };
