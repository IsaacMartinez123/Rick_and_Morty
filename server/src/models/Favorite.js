const { DataTypes } = require('sequelize');

module.exports = (database) => {
   database.define('Favorite', {
      // id: {
      //    type: DataTypes.UUID,
      //    defaultValue: DataTypes.UUIDV4,
      //    primaryKey: true,
      //    allowNull: false
      // },
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         type: DataTypes.ENUM('Alive', 'Dead', 'Unknown'),
         defaultValue: 'Alive'
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull: false
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, 
   { 
      timestamps: false 
   });
};
