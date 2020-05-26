import React, { useState,useReducer } from "react";
import {initialState} from "./reducers/addFeatureReducer.js"

//Elements
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


 
const App = () => {
  //const [state, setState] = useState(initialState);
 const [state, dispatch] = useReducer(initialState);



  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
