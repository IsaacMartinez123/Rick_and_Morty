const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false
      },
      email: {
            type: DataTypes.STRING,
            isEmail: true,
            allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false
   },
   }, 
   { 
      timestamps: false 
   });
};