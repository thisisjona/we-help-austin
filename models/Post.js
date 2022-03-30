const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {};

Post.init(
   {
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true
       },
       title: {
           type: DataTypes.STRING,
           allowNull: false,
       },
       username:{
        type: DataTypes.STRING,
        allowNull: false
       },
       body: {
        type: DataTypes.TEXT,
        allowNull:false
       },
       deadline: {
           type: DataTypes.STRING,
           allowNull: false
       },
       tag: {
           type: DataTypes.STRING,
           allowNull: false
       },
       requirements: {
           type: DataTypes.STRING,
           allowNull: false
       }
   },
   {
       sequelize,
       freezeTableName:true,
       underscored: true,
       modelName: 'post'
   } 
);

module.exports = Post;