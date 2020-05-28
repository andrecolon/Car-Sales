import React from 'react';
import { connect } from 'react-redux'

//What actions do I want in here?
import { addNewFeature } from '../actions/index'



const AdditionalFeature = props => {
  return (
    <li>
      <button className="button"
        onClick={() => {
          props.addNewFeature(props.feature);
        }}
      >
        Add Feature
        </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



const mapStatetoProps = state => {
  return {
  //This component does not need state, all we need is action
  }
}

export default connect
  ( mapStatetoProps, { addNewFeature })
  (AdditionalFeature);
