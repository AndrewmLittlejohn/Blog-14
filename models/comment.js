const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,1000] 
      }}
  },
  {
    sequelize,
    timestamps: true,
    underscored: false,
    modelName: 'Comment'
  }
);

module.exports = Comment;