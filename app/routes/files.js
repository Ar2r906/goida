const express = require('express')
const router = express.Router()
const controller = require('../controllers/files')

router.get('/v1/info/all_files', controller.get_all_files_and_info)
router.get('/v1/info/file/:id', controller.get_more_info_about_file)
router.post('/v1/info/file', controller.create_file_info);
router.delete('/v1/info/file/:id', controller.delete_file_info);

module.exports = router