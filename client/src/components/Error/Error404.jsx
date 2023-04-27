import './Error.css'
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return(
        <div className="error-container">
            <figure>
                <img src="../../../images/error-404.png" alt="" width="785" height="570"/>
            </figure>

            <header>
                <h1>Wow amigo! Parece que te has dirigido al lugar equivocado!</h1>
            </header>
            <div>
                <h1>Si necesitas volver puedes dirigirte al boton "Home" de la parte superior</h1>
                <h2>O si no puedes dar click en el siguiente boton:</h2>
                <button className="btn-home2"> <NavLink  to="/home">Back</NavLink> </button>
            </div>
        </div>
    )
}

export default Error404;

