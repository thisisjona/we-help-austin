const { Post, User } = require('../models');
const router = require('express').Router();
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

router.get('/:tag', (req, res) => {
    Post.findAll({
        where: {
            tag: req.params.tag
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post with that tag found'})
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

router.post('/', withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        username: req.body.username,
        body: req.body.body,
        deadline: req.body.deadline,
        tag: req.body.tag,
        requirements: req.body.requirements
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

router.put('/', withAuth, (req, res) => {
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
                id: req.body.id
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