const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'fiddlerlove',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'janieguzman',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'hollyjackson',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'stormy',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'justchillin',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'notthisagain',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    username: 'thebestmom',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'delifood',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'UTAustin',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'nationalmssociety',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  },
  {
    username: 'suncresthospice',
    email: 'suncrest@epa.gov',
    password: 'password123'
  },
  {
    username: 'fosterspace',
    email: 'fosterspace@gmail.com',
    password: 'password123'
  },
  {
    username: 'classiccanines',
    email: 'classiccanines@gmail.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;