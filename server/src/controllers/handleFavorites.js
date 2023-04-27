let myFavorites = [];

const postFav = (request, response) =>{
    
    try {
        const newFavorites = request.body;
        const characterFound = myFavorites.find(fav => fav.id === newFavorites.id)

        if (!characterFound) {
            myFavorites.push(newFavorites);
            return response.status(200).json(myFavorites);
        }
        
        throw Error('Ya existe este personaje')

    } catch (error) {
        return response.status(404).send('Ya existe este personaje');
    }
}

const deleteFav = (request, response) => {

    const {id} = request.params;

    myFavorites = myFavorites.filter((fav) => fav.id !== Number(id));

    return response.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav,
}