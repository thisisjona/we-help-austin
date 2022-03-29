const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ message: 'working'})
    .catch(err => {
        res.status(500).json(err)
    });
});

router.get('/:tag', (req, res) => {

});

router.get('/:user', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/update', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;