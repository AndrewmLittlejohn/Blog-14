const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config');

class Blog extends Model {}

Blog.init(
  {
    title: DataTypes.STRING,
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [200]
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: false,
    modelName: 'Blog'
  }
);

module.exports = Blog;