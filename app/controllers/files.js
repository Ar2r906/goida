const File_info = require('../models/file_info.js')
const sequelize = require('../config/connection.js')

exports.get_all_files_and_info = async (request, response) => {
    try {
        const files = await File_info.findAll();
        console.log('DB query result:', files);   // для отладки
        response.status(200).send(files);
    } catch (error) {
        console.error('Error in function: get_all_files_and_info');
        response.status(500).json({ error: 'Internal server error' });
    }
}

exports.get_more_info_about_file = async (request, response) => {
    try {
        const id = request.params.id;
        const find_file = await File_info.findOne({ where: { id } });

        if (!find_file) 
            return response.status(404).json({ error: 'File not found' });

        response.status(200).json(find_file.toJSON());
    } catch (error) {
        console.error('Error in function: get_more_info_about_file', error);
        response.status(500).json({ error: 'Internal server error' });
    }
};

exports.create_file_info = async (req, res) => {
    try {
        const { title, description, publication_date, tag, file } = req.body;
        const newFile = await File_info.create({
            title,
            description,
            publication_date,
            tag,
            file
        });
        res.status(201).json(newFile.toJSON());
    } catch (error) {
        console.error('Error in function: create_file_info', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.delete_file_info = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await File_info.destroy({ where: { id } });
        if (!deleted) return res.status(404).json({ error: 'File not found' });
        res.status(200).json({ message: `File with id ${id} deleted` });
    } catch (error) {
        console.error('Error in function: delete_file_info', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};