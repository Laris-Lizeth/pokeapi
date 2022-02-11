import React from "react";
import Pokemonletters from '../../assets/Pokemonletters.png';
import { Link } from 'react-router-dom';

import './login.css';
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { login, startGoogleLogin, startLoginEmailPassword } from "../actions/auth";

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
        
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }



    return (
        <>
        <div className="form-group-3 mt-4 text-center">
        <img src={Pokemonletters} alt="Pokemon_letras" width="45%" />
        </div>
        <div className="container login-container">
                <div className="col-md-6 login-form">
                    <h3>Iniciar sesión</h3>
                    <form onSubmit={handleLogin} >
                        <div className="form-group">
                            <input 
                                type="text"
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
                        <div className="form-group d-flex justify-content-center" >
                            <button type="submit" 
                                    className="btn-1 btn-primary" 
                                    value="Entrar"
                            >Entrar</button>
                        </div>
                          <hr />
                        <div className="contgoogle">
                        <div >
                            <p>¿Prefieres hacerlo con google?</p>
                            <div 
                                className="google-btn"
                                onClick={handleGoogleLogin}
                            >
                           <div className="google-icon2">
                           <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                          </div>
                          <p className="btn-text">
                             <b>Ingresar aquí</b>
                          </p>
                         </div>   
                        </div>
                        </div>
                        <div className="new-count">
                        <Link className="navbar-brand" 
                              to="/auth/register"
                        >Crear cuenta
                        </Link>
                        </div>
                    </form>
                </div> 
                </div>
                </>
            
        
    )
}