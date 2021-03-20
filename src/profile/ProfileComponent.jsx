import React, { Component } from 'react'
import PropTypes from "prop-types";

function Profile(props) {
    return (
    <div className="App">
        {props.children}
    <h1>{props.name}</h1>
    <h2>{props.bio}</h2>
    <h2>{props.pro}</h2>
    <button onClick={() => props.alertMyInput()}>
     ClickMe
   </button>
    </div>)
   }
   Profile.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    pro: PropTypes.string,
    children: PropTypes.any
   };
export default Profile;
