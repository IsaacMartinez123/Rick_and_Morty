const { login } = require('../controllers/login.js');
const { getCharById } = require('../controllers/getCharById.js');
const { postFav, deleteFav } = require('../controllers/handleFavorites.js')
const { filter } = require('../controllers/filter.js')
const router = require('express').Router();

router.get('/character/:id', (request, response) => {
    getCharById(request, response)
});

router.get('/login', (request, response) => {
    login(request, response)
});

router.post('/fav', (request, response) => {
    postFav(request, response)
});

router.delete('/fav/:id', (request, response) => {
    deleteFav(request, response)
});


module.exports = router;