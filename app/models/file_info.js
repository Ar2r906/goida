const { sequelize } = require('../config/connection')
const { DataTypes } = require('sequelize')

const File_info = sequelize.define(
    'file_info',
    {
        id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
        title: { type: DataTypes.TEXT },
        description: { type: DataTypes.TEXT },
        publication_date: { type: DataTypes.DATE },
        tag: { type: DataTypes.TEXT },
        file: { type: DataTypes.TEXT },
        create_date: { type: DataTypes.DATE },
        update_date: { type: DataTypes.DATE },
    },

    {
        tableName: 'file_info',
        timestamps: true
    }
)

async function get_file_info() {
    await File_info.sync()
    console.lof('Sync sucessfully')
}
module.exports = File_info