const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {};

Post.init(
   {
       id: {
           type: INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true
       },
       title: {
           type: DataTypes.INTEGER,
           allowNull: false,
       },
       username:{
        type: DataTypes.STRING,
        allowNull: false
       },
       body: {
        type: DataTypes.STRING,
        allowNull:false
       },
       deadline: {
           type: DataTypes.DATE,
           allowNull: false
       },
       tag: {
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