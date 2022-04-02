const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('homepage')
})

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