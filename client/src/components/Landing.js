import React from 'react';
import Hero from "./Hero";
import { connect } from 'react-redux';
import * as actions from '../actions';


const Landing = (props) => {
    console.log(props)
    return (
        <div style={{ textAlign: 'center' }}>
            <Hero />
        </div>
    )
}

function get_user_data({ auth }) {
    return { auth }
  }
  
  export default connect(get_user_data, actions)(Landing); 
  