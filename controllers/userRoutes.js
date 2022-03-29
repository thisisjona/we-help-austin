const router = require('express').Router();

router.get('/:id', (req, res) => {
    res.json({ message: 'working'})
    .catch(err => {
        res.status(500).json(err)
    });
});

module.exports = router;