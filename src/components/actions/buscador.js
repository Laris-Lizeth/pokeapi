
import axios from "axios";
import { types } from "../../types/types";


//acciones del buscador


 const fetCharactersRequest = () => {
    return {
        type: types.fetCharactersRequest
    }
}

 const fetCharactersSuccess = (pokemon) => {
    return {
        type: types.fetCharactersSucess,
        payload: pokemon
    }
}

 const fetCharactersFailure = (err) => {
    return {
        type: types.fetCharactersFailure,
        payload: err
    }
}

export const fetPokemon = (valor) => {

    return (dispatch) => {
        dispatch(fetCharactersRequest());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(res => {
                dispatch(fetCharactersSuccess([res.data]));
            })
            .catch( err  => {
                dispatch(fetCharactersFailure('No se encuentra el pokemon'))
            })
    }

}