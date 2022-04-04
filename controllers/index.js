const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const helpPost = require('./helpPost-routes');
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/helpPost', helpPost);
router.use('/user', userRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;