import React from 'react'
import { useDispatch } from 'react-redux';
import Pokebola from '../../assets/Pokebola.png';
import { startLogout } from '../actions/auth';

export const Navbar = () => {


    const dispatch = useDispatch();

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

   

    return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
     <div className="container-fluid">
    <a className="navbar-brand">¡Hola!</a>
    
    
      
    <img src={Pokebola} alt="Pokebola" width="5%"/>
    <button type="button" 
           className="btn btn-outline-dark"
           onClick={hanleLogout}
            >Salir </button>
    
  </div>
</nav>
        
    )
}
