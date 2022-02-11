import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { BuscadorReducer } from '../reducers/buscadorReducer';
import { regReducer } from '../reducers/regReducer';




const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    bus: BuscadorReducer,
    auth: authReducer,
    ui: regReducer
   
});


export const store = createStore(
    reducers,
    composeEnhancers(
       applyMiddleware( thunk )
    )
    );
