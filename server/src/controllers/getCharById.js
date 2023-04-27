const axios = require('axios')

const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = async (request, response) =>{

    try {
        const {id} = request.params
        const { data } = await axios(`${URL}/${id}`);

        if (!data.name) throw new Error(`ID: ${id} Not Found`)
        
        const characters = {
            id: data.id,
            name: data.name, 
            gender: data.gender, 
            species: data.species, 
            origin: data.origin, 
            image: data.image,
            status: data.status
        }
        return response.status(200).json(characters)
        
        
    } catch (error) {
        return error.message.includes('ID')? 
        response.status(404).send(error.message):
        response.status(500).send(error.message)
    }
}

module.exports = {
    getCharById
}
