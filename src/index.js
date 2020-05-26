import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux"; // gives us bridge peices 
import { addFeatureReducer } from "./reducers/addFeatureReducer.js";
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';



const store = createStore(addFeatureReducer);
//Pass a reducer in the store, reducer currently holding state
//console.log(store.getState())

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        {/* Provider is giving us our application state */}
        <App />
    </Provider>,
    rootElement
);

