const { myFavorites } = require('./handleFavorites.js')
let newFavorite = myFavorites

const filter = (request, response) => {

    const { gender } = request.params;

    let allCharactersFiltered = newFavorite.filter((fav) => fav.gender === gender);

    newFavorite =
    gender === 'allCharacters' ? 
    [...newFavorite]: 
    allCharactersFiltered
    console.log(newFavorite);
    return response.status(200).json(newFavorite);
}

module.exports = {
    filter
}