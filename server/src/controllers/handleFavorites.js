let myFavorites = [];

const postFav = (request, response) =>{
    
    try {
        const newFavorites = request.body;
        const characterFound = myFavorites.find(fav => fav.id === newFavorites.id)

        if (!characterFound) {
            myFavorites.push(newFavorites);
            return response.status(200).json(myFavorites);
        }
        
        throw Error('This character already exists')

    } catch (error) {
        return response.status(404).send(error.message);
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