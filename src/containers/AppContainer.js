import React from 'react';
import {Provider} from 'react-redux'
import Store from './../store'
import App from './../components/App'

const AppContainer = () => (
    <Provider store={Store}>
        <App />
    </Provider>
);

export default AppContainer
