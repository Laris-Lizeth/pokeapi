
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetPokemon } from "../actions/buscador";
 
import './buscador.css'

export const Buscador = () => {

  const dispatch = useDispatch();
  const [namePokemon, setNamePokemon] = useState();

  const handleInputChangePokemon = (event) => {
    setNamePokemon(event.target.value);
  }


  const handleClickPokemon = () => {
     dispatch(fetPokemon(namePokemon));

  }
  return (
    
      <div className="form-group mt-2 text-center">
          <h1 htmlFor="buscar_personaje" className="text-white mt-6">¿Cuál es tu pokemon favorito?</h1>
          <input type="text" 
                 className="form-control me-sm-2" 
                 id="buscar_personaje" 
                 placeholder="Search"
                 name="namePokemon" 
                 value={ namePokemon }
                 onChange={ handleInputChangePokemon }/>
          <button className="btn btn-primary  mb-3"
                  onClick={handleClickPokemon} >Buscar</button>
      </div>
     
  )
};
