const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../server');
//should we  have a ..config/connection.js file? where sequelize is modularized and we can help protect passwords w .env file
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
       due_date: {
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