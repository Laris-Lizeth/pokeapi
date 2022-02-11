import React from 'react';
import { useSelector } from 'react-redux';



export const Resultado = () => {

  //Debemos llamar al estado actual pero del type search**
  const buscador = useSelector ((state) => state.bus);
 
  return (
      <div className="form-group-2 mt-2 text-center" >
          {buscador.loading && <div className='text-warning'>Buscando...</div>}
          {buscador.pokemon.length >=1 && 
              <div className='text-success'>
              <img src={buscador.pokemon[0].sprites.front_default} alt="Pokemon" width="300px" /> 
              <p><span><strong>Nombre:  {buscador.pokemon[0].name} </strong></span> <br />          
              <span> Experiencia: {buscador.pokemon[0].base_experience}</span></p>  
         </div>}
         {buscador.error !== '' && <h4 className='text-danger'>{buscador.error}</h4>}
      </div>
     
      )
};