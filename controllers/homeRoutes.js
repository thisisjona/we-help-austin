const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage')
})

router.get('/login', withAuth, (req, res) => {
    res.render('login')
});

router.get('/signUp', (req, res) => {
    res.render('signUp')
});

router.get('/about', (req, res) => {
    res.render('about')
});

module.exports = router;