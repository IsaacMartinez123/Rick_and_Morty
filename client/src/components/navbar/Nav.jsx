import SearchBar from "./SearchBar";
import { NavLink, useNavigate } from "react-router-dom";
import './navbar.css'

function Nav (props) { 

    const navigate = useNavigate();

    function logout (){
        props.setAccess(false);
        navigate('/');
    }

    return(
        (<nav>
            <ul>
                <li><SearchBar onSearch={props.onSearch}/></li>
                <div className="container-button">
                    <li><button className="btn-about"> <NavLink to="/about">About</NavLink> </button></li>
                    <li><button className="btn-home"> <NavLink  to="/home">Home</NavLink> </button></li> 
                    <li><button className="btn-favorites"> <NavLink  to="/favorites">Favorites</NavLink> </button></li> 
                    <li><button className="btn-logout" onClick={logout}>LogOut</button></li>
                </div>
            </ul>
        </nav>)
    )
}

export default Nav;