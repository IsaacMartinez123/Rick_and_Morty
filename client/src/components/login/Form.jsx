import { useState } from "react";
import './login.css';
import validate from "./validation";

const Form = (props) => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        setError(validate({
            ...form,
            [event.target.name]: event.target.value
        }))
    }


    const handleOnSubmit = (event) => {
        event.preventDefault()
        props.login(form);
    }

    return(
        <form onSubmit={handleOnSubmit}>
            <h1>LOGIN</h1>
            <img src="../../images/Rick-And-Morty.png" alt="" />
            <div class="login-container">

                    <label htmlFor="email">EMAIL:</label>
                    <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange}/>
                    {error.email && <p className="msg-error">{error.email}</p>}
                    <hr />
                    <label htmlFor="password">PASSWORD:</label>
                    <input type="password" name="password" placeholder="Enter your password" value={form.password} onChange={handleChange}/>
                    {error.password && <p className="msg-error">{error.password}</p>}
                    <hr />
                    <button className="btn-submit">Submit</button>-
            </div>
        </form>
    )
}

export default Form;