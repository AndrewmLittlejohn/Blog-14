const {Sequelize, Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/config');

class User extends Model {
  checkPassword(loginPassword) {
  return bcrypt.compareSync(loginPassword, this.password);
  };
};

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8,256]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }

    }
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
    beforeCreate: async (newUser) => {
      newUser.password = await bcrypt.hash(newUser.password, 10);
      return newUser;
    }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
  }
);

module.exports = User;