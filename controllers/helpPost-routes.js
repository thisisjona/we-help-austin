const { Post, User } = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id','title', 'username', 'body', 'deadline', 'tag', 'requirements']
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        res.status(500).json(err)
    });
});

router.get('/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post with that id found'})
            return;
        }
        const post = dbPostData.get({ plain: true })
        res.render('post', {post, loggedIn: true})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

router.post('/checkUser', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.body.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post with that id found'})
            return;
        }
        const user = req.session.username
        const post = dbPostData.get({ plain: true })
        if (user === post.username) {
            res.json({check: true})
        } else {
            res.json({check: false})
        }
    })
});

router.get('/update/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post with that id found'})
            return;
        }
        // const user = req.session.username
        const post = dbPostData.get({ plain: true })
        // if (user === post.username) {
        res.render('post-update', {post, loggedIn: true})
        // } else {
        //     res.render('homepage');
        // }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

router.post('/username', withAuth, (req, res) => {
    Post.findAll({
        where: {
            username: req.session.username
        }
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.post('/', withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        username: req.session.username,
        body: req.body.body,
        deadline: req.body.deadline,
        tag: req.body.tag,
        requirements: req.body.requirements
    })
    .then(dbPostData => {
        const post = dbPostData.get({ plain: true })
        res.json({post});
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

router.put('/:id', withAuth, (req, res) => {
    Post.update(
        {
            title: req.body.title,
            body: req.body.body,
            deadline: req.body.deadline,
            tag: req.body.tag,
            requirements: req.body.requirements
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

router.delete('/', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: "No post found with this id" });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

module.exports = router;