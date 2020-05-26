import React from 'react';
import { connect } from "react-redux";
//What actions do I want in here?
import {addNewFeature} from '../actions/'


const AdditionalFeature = props => {
  return (
    <li>
      <button
        onClick={() => {
          this.props.addNewFeature(this.state.newFeature);
        }}
      >
        Add Feature
        </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  console.log("maps to props",state)
  return {
    features: state.features
  };
};

export default connect(
  mapStateToProps,
  {addNewFeature}
)(AdditionalFeature);
//Function currying - look that up
