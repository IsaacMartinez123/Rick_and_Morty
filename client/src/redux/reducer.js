import { ADD_FAV, FILTER_GENDER, FILTER_SPECIES, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: [], 
    characters: []
}


const reducer = (state = initialState, { type, payload }) => {
    switch( type ){
        case ADD_FAV:
            // return {
            //     ...state,
            //     myFavorites: [...state.allCharactersFav, payload],
            //     allCharactersFav: [...state.allCharactersFav, payload]
            // }
            return { ...state, myFavorites: payload, allCharacters: payload };

        case REMOVE_FAV: 
            // return {
            //     ...state,
            //     myFavorites: state.myFavorites.filter(fav => fav.id !== payload),
            //     allCharactersFav: state.myFavorites.filter(fav => fav.id !== payload)
            // }
            
            return { ...state, myFavorites: payload, allCharacters: payload };

        case FILTER_GENDER:
            const allCharactersFilteredGender = state.allCharacters.filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites: 
                    payload === 'allCharacters'
                    ? [...state.allCharacters]
                    : allCharactersFilteredGender
            }
            // return { myFavorites: payload };

        case FILTER_SPECIES:
            const allCharactersFilteredSpecies = state.allCharacters.filter(character => character.species === payload)
            return {
                ...state,
                myFavorites: 
                    payload === 'allCharacters'
                    ? [...state.allCharacters]
                    : allCharactersFilteredSpecies
            }
        case ORDER:
            const allCharactersFavCopy = [...state.myFavorites]
            return {
                ...state,
                myFavorites:
                    payload === 'A'
                    ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                    : allCharactersFavCopy.sort((a, b) => b.id - a.id)
            }

        default:
            return {...state}
    }
}


export default reducer;