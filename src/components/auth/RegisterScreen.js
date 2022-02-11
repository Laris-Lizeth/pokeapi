import React from 'react';
import './login.css';
//import Swal from 'sweetalert2';
import Pokebola from '../../assets/Pokebola.png';
import image1 from '../../assets/image1.png';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { setError, removeError } from '../actions/val';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startRegisterWithEmail } from '../actions/auth';
import { NavbarIndex } from '../navegador/NavbarIndex';
//import { NavbarIndex } from '../ui/NavbarIndex';



export const RegisterScreen = () => {

    const dispatch = useDispatch()
    const {msgError} = useSelector(state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name ,email ,password ,password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        //console.log(name ,email ,password ,password2)
        if ( isFormValid() ) {
            
           dispatch( startRegisterWithEmail(email, password, name) );
         }

    }

    const isFormValid = () => {
        
        if ( name.trim().length === 0 ) {
            dispatch( setError('Se requiere un nombre') )
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('No es un email válido') )
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('El password deben ser de al menos 6 caracteres') )
            return false
        }
        
        dispatch( removeError() );
       return true;
    }


    return (

<>
        <NavbarIndex />
        <div className="container login-container">
        <div className="col-md-6 login-form">
        <h3>Registro</h3>
        <form onSubmit={handleRegister}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Correo"
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña" 
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Repita la contraseña" 
                    name='password2'
                    value={password2}
                    onChange={handleInputChange}
                />
            </div>

            {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            { msgError }
                        </div>
                    )
                }

            <div className="form-group d-flex justify-content-center mr-4">
                    <button type="submit" 
                                    className="btn-1 btn-primary" 
                                    value="Crear"
                            >Enviar</button>
            </div>
           
            <div className="form-group mt-1 text-center">
        <img src={Pokebola} alt="Pokebola" width="8%"/>
        <img src={image1} alt="Pik" width="25%" />
     </div>

        </form>
    </div>

    </div>
 </>
    )
}
