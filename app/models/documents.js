const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Document = sequelize.define('document', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.TEXT, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  url: { type: DataTypes.TEXT, allowNull: false, unique: true },
  source: { type: DataTypes.TEXT, allowNull: true },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'documents',
  timestamps: true
});

module.exports = Document;
