import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from 'axios'
// export const addFav = (character)=>{
//     return {
//         type: ADD_FAV,
//         payload: character,
//     }
// };
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';

    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character)

            if (!data.length) throw Error('No hay favoritos') 

            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            alert(error.message)
        }
    };
    
};

// export const removeFav = (id)=>{
//     return {
//         type: REMOVE_FAV,
//         payload: id,
//     }
// };
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;

    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint)
            
            if (!data.length) throw Error('No hay favoritos') 

            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            alert(error.message)
        }
    };
    
    
};


export const filterCards = (gender)=>{
    return {
        type: FILTER,
        payload: gender,
    }
};

// export const filterCards = (gender)=>{
//     const endpoint = `http://localhost:3001/rickandmorty/filter/${gender}`;
    
//     return async (dispatch) => {
//         const { gender } = await axios.get(endpoint)

//         return dispatch({
//             type: FILTER,
//             payload: gender
//         });
//     }

// };

export const orderCards = (orden)=>{
    return {
        type: ORDER,
        payload: orden,
    }
};