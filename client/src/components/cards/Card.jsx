import './cards.css'
import { Link, NavLink } from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions"
import { useSelector, useDispatch, connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({id, name, status, species, gender, origin, image, onClose}) {   
   
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites)

   const handleFavorite = () =>{
      if (isFav) {
         setIsFav(false)
         dispatch(removeFav(id))
      }else{
         setIsFav(true)
         dispatch(addFav({id, name, status, species, gender, origin, image}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);
   
   return (
      
      <div className="card-uniq">
         <div className='botones'>
            <button className='btn-fav' onClick={handleFavorite}>{ isFav ? '❤️' : '🤍'}</button>
            {onClose && <button className="btn-cerrar" onClick={() => onClose(id)}>✖</button>}
         </div>
         <img className="img" src={image} alt='' />
         <h4>
            <Link to={`/detail/${id}`} >
            <span className="letraCard">{name}</span>
            </Link>
            {/* <span className="btn-info1"> {status} </span> */}
            <span className="btn-info2"> {species} </span>
            <span className="btn-info3"> {gender} </span>
            {/* <span className="btn-info4">{origin}</span> */}
         </h4>
      </div>
   );
}

// const mapStateToProps = (state) =>{
//    return {
//       myFavorites: state.myFavorites
//    }
// }

// const mapDispatchToProps = (dispatch) =>{
//    return {
//       addFav: (character) => { dispatch(addFav(character)) },
//       removeFav: (id)=> { dispatch(removeFav(id)) }
//    }
// }

// export default connect(
//    mapStateToProps,
//    mapDispatchToProps
// )(Card)

export default Card;