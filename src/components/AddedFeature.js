import React from 'react';
import { connect } from 'react-redux'
import {removeFeature} from '../actions/index'


const AddedFeature = props => {
  return (
    <li>
      <button className='button' onClick={() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStatetoProps = state => {
  return {
    //This component does not need state, all we need is action
  }
}

export default connect
  (mapStatetoProps, { removeFeature })
  (AddedFeature);

