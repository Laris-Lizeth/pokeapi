import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from 'react-router-dom';
import {login} from '../actions/auth'
import { firebase } from '../../firebase/fire-config'
import { SearchScreen } from '../buscador/SearchScreen'
import { AuthRouter } from '../routers/AuthRouter'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
        
    firebase.auth().onAuthStateChanged( (user) => {

        if ( user?.uid ) {
            dispatch( login( user.uid, user.displayName ) );
            setIsLoggedIn( true );
        } else {
            setIsLoggedIn( false );
        }

        setChecking(false);

    });
    
}, [ dispatch, setChecking, setIsLoggedIn ])

    if ( checking ) {
      return (
          <h1>Cargando...</h1>
      )
  }

  


  return (
    <Router>
    <div>
        <Switch>
            <PublicRoute 
                path="/auth"
                component={ AuthRouter }
                isAuthenticated={ isLoggedIn }
            />

            <PrivateRoute
                exact
                path="/"
                component={ SearchScreen }
                isAuthenticated={ isLoggedIn }
            />

            <Redirect to="/auth/login" />
        </Switch>
    </div>
</Router> 
  )
}

