const file_info = require('../models/file_info.js')
const sequelize = require('../config/connection.js')

exports.get_all_files_and_info = async (request, response) => {
    try {
        const files = await file_info.findAll();
        response.status(200).send(files);
    } catch (error) {
        console.error('Error in function: get_all_files_and_info');
        response.status(500).json({ error: 'Internal server error' });
    }
}

exports.get_more_info_about_file = async (request, response) => {
    try {
        const { id } = request.params;
        if(!id) return response.status(400).json({ error: 'Bad Request' });
        
    } catch (error) {
        console.error('Error in function: get_more_info_about_file');
        response.status(500).json({ error: 'Internal server error' });
    }
}
