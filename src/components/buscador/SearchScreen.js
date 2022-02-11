import React from 'react'
import { Navbar } from '../navegador/Navbar'
import { Buscador } from './Buscador'
import { Resultado } from './Resultado'
//import { Buscador } from "./Buscador";
//import { Resultado } from "./Resultado";

export const SearchScreen = () => {
  return ( 
    <div className="form-group-1 text-center">
    <Navbar />
     
    <Buscador />

    <Resultado />
       {/* <div>
         <Navbar />
       </div>
       <div>
           <Buscador /> 
       </div>
       <div>
         <Resultado />
         </div> */}
       </div>
    )
}







