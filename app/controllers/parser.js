const { runParser } = require('../parsers');

exports.run = async (req, res) => {
    try {
        await runParser();
        res.status(200).json({ message: 'Парсер успешно выполнен' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка выполнения парсера' });
    }
};
