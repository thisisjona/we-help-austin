const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.render('homepage',  {loggedIn: req.session.loggedIn});
    } else {
        res.render('homepage');
    }
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/signUp', (req, res) => {
    res.render('signUp')
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.get('/post', (req, res) => {
    res.render('post');
});

module.exports = router;