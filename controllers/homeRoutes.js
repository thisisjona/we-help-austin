const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ message: 'working'})
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
})

module.exports = router;