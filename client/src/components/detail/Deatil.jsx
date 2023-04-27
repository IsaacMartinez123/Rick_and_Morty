import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './detail.css'

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '8fb642c2d867.9045b04fba3654f73924';

const Deatil = () =>{

    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
        if (data.name) {
            setCharacter(data);
        }
        });

        return setCharacter({});
    }, [id]);
    
    return(
        <div className='card-detail'>
            <div className="title-container">
                <h1> <b>Character details</b></h1>
                <button className="btn-back"> 
                    <NavLink to="/home"><b>Home</b></NavLink> 
                </button>
            </div>
            <div className="detal-container">
                <img className="image" src={character.image} alt=""/>
                <div className="info-container">
                    <p><b>NAME: </b>{character.name}</p>
                    <p><b>STATUS: </b>{character.status}</p>
                    <p><b>SPECIES: </b>{character.species}</p>
                    <p><b>GENDER: </b>{character.gender}</p>
                    <p><b>ORIGIN: </b>{character.origin?.name}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Deatil;