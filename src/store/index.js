
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import Logger from 'redux-logger';
import Reducers from './../reducers'
function configureStore(initialState){
    const enhancer = compose(
        applyMiddleware(
            ReduxThunk,
            Logger
        )
    );
    return createStore(Reducers, initialState, enhancer);
}

export default configureStore({});