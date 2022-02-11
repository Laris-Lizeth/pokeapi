import React from 'react'
import { Link } from 'react-router-dom';
import Pokemonletters from '../../assets/Pokemonletters.png';


export const NavbarIndex = () => {

    

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <img src={Pokemonletters} alt="Pokemon_letras" width="10%" />
       <a className="navbar-brand"></a>
         
        
       <Link className="navbar-brand" 
             to="/"
            >
                Home
            </Link>
        </div>
        </nav>
        
    )
}