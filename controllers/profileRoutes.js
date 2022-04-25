const { Post, User } = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            username: req.session.username
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'User not found' })
                return;
            }
            const user = dbUserData.get({ plain: true })
            res.render('user-view', { user, loggedIn: true })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});

module.exports = router;