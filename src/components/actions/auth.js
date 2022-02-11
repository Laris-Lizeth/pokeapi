import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from '../../firebase/fire-config';
import { types } from "../../types/types"

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
 
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                dispatch(login( user.uid, user.displayName ));
                localStorage.setItem('uid', user.uid)

            })
            .catch( e => {
                console.log(e);
                
                Swal.fire('Error', e.message, 'error');
            })
 
    }
}

export const startRegisterWithEmail = ( email, password, name ) => {
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {
                
                
                await user.updateProfile({ displayName: name });

                dispatch(
                    login( user.uid, user.displayName )
                );
            })
            .catch( e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })

    }
}


export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
                localStorage.setItem('Name', user.displayName)
                localStorage.setItem('uid', user.uid)
            });

    }
}

export const login = (uid,displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }  

        
})


export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();
        localStorage.clear();
        dispatch( logout() );
    }
}


export const logout = () => ({
    type: types.logout
})



