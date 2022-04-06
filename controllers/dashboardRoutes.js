const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        order: [['createdAt', 'DESC']],
        attributes: [
            'id',
            'title',
            'username',
            'body',
            'deadline',
            'tag',
            'requirements',
            'createdAt'
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.get('/:tag', withAuth, (req, res) => {
    Post.findAll({
        order: [['createdAt', 'DESC']],
        where: {
            tag: req.params.tag
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post with that tag found'})
            return;
        }
        const posts = dbPostData.map(post => post.get({ plain: true }));
        const moveJS = true
        res.render('dashboard', { posts, loggedIn: true, moveJS });
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

module.exports = router;