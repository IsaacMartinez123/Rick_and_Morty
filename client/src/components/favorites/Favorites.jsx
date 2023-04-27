import Card from "../cards/Card";
import { connect, useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import favorites from './favorites.css'

const Favorites = () => {
    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites)
    const [aux, setAux] = useState(false)

    const handleOrder=(event)=>{
        if(!aux){
            dispatch(orderCards(event.target.value))
        setAux(true);
        }
        else{
            dispatch(orderCards(event.target.value))
            setAux(false);
        }
    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <>
        <div className="select-container">
            <h2>Filters: </h2> 
            <select onClick={handleOrder}>
                <option>------------Seleccionar----------</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option>------------Seleccionar----------</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>
        </div>
        <div className="Cards">
            {
            myFavorites?.map(fav => {
                return(
    
                    
                        <Card 
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            // status={fav.status}
                            species={fav.species}
                            gender={fav.gender}
                            // origin={fav.origin.name}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                    
                )
            })
            }
        </div>
        </>
    )
}

// const mapStateToProps = (state) =>{
//     return{
//         myFavorites: state.myFavorites
//     }
// }

// export default connect(
//     mapStateToProps,
//     null
// )(Favorites)

export default Favorites;