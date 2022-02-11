import { types } from "../types/types";

const initialState = {
    loading: false,
    pokemon: [],
    error: ''
}

export const BuscadorReducer = ( state = initialState, action) => {
    switch(action.type){

           case types.fetCharactersRequest:
               return {
                   ...state,
                   loading: true
               }

            case types.fetCharactersSucess:
                return {
                    ...state,
                    loading: false,
                    pokemon: action.payload,
                    error: ''
                }
            

            case types.fetCharactersFailure:
                return{
                    ...state,
                    loading: false, 
                   // pokemon: [],
                    error: action.payload
                }
            


        default:
            return state;
    }
}