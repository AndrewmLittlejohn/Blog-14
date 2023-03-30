const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config');

class Blog extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    validate: {
      len: [200] 
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