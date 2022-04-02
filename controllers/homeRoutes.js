const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    console.log ('I see this');
    res.render('homepage', {})
    // .catch(err => {
    //     console.log(err)
    //     res.status(500).json(err);
    // })
})

router.get('/login', withAuth, (req, res) => {
    res.render('login')
    // .catch(err => {
    //     console.log(err)
    //     res.status(500).json(err);
    // })
});

router.get('/signUp', (req, res) => {
    console.log ('I see this');
    res.render('signup')
    
    // .catch(err => {
    //     console.log(err)
    //     res.status(500).json(err);
    // })
});

router.get('/about', (req, res) => {
    res.render('about')
    // .catch(err => {
    //     console.log(err)
    //     res.status(500).json(err);
    // })
});

router.get('/chat', (req, res) => {
    res.render('chat')
    // .catch(err => {
    //     console.log(err)
    //     res.status(500).json(err);
    // })
});

module.exports = router;