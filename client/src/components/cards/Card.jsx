import './cards.css'
import { Link,  } from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions"
import { useSelector, useDispatch } from 'react-redux';
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
            <button className='btn-fav' onClick={handleFavorite}>
               { isFav
               ? <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10851A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span>
               : <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CA1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></span>}
            </button>
            {onClose && <button className="btn-cerrar" onClick={() => onClose(id)}><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CA1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span></button>}
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