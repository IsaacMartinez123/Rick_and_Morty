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
                    <li>
                        <button className="btn-home"> 
                            <NavLink  to="/home">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
                            </NavLink> 
                            <span className="title-content">Home</span>
                        </button>
                    </li>
                    <li>
                        <button className="btn-favorites"> <NavLink to="/favorites">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></NavLink> 
                            <span className="title-content">Favorites</span>
                        </button>
                    </li> 
                    <li>
                        <button className="btn-about"> 
                            <NavLink to="/about">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
                            </NavLink> 
                            <span className="title-content">Abuot</span>
                        </button>
                    </li>
                    <li>
                        <button className="btn-logout" onClick={logout}>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"/></svg> </span>
                        </button>
                    </li>
                </div>
            </ul>
        </nav>)
    )
}

export default Nav;