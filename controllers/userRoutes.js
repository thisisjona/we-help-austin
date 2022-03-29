const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                module: Post,
                attributes: ['title', 'user', 'body', 'tag', 'created_at']
            }
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'User not found'})
        }
        res.json(dbUserData);
    })
    .catch(err => {
        res.status(500).json(err)
    });
});

router.get('/:username', (req, res) => {
    User.findOne({
        attributes: {exclude: ['password'] },
        where: {
            username: req.params.username
        },
        include: [
            {
                module: Post,
                attributes: ['title', 'user', 'body', 'tag', 'created_at']
            }
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'User not found'})
        }
        res.json(dbUserData);
    })
    .catch(err => {
        res.status(500).json(err)
    });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that username found!'})
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!'});
        })
    })
})

module.exports = router;