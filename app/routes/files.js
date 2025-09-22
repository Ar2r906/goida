const express = require('express')
const router = express.Router()
const controller = require('../controllers/files')

router.get('/v1/info/all', controller.get_all_files_and_info)
router.get('/v1/info/file/:id', controller.get_more_info_about_file)

module.exports = router