const validate = (form) => {
    let errors = {};
    
    if (!/\S+@\S+.\S+/.test(form.email)) { 
        errors.email = "The email is not valid";
    }

    if (!form.email) { //Valida stado de los campos
        errors.email = "The email cannot be empty";
    }

    if (form.email.length > 35) {
        errors.email = "The email cannot have more than 35 characters"
    }

    if (form.password.length <= 5 || form.password.length >= 11) {
        errors.password = "Password must be between 6 and 10 characters";
    }

    if(!/[0-9]/.test(form.password)){
        errors.password = "The password needs a number"
    }

    return errors; //Cambia stado de los errores al terminar todas las validaciones
};

export default validate;