import './App.css';
import React from "react";
import Profile from "./profile/ProfileComponent.jsx";
const handleName = () => {
  alert('My name is:');
}
const  App = () => { 
  const styleObject = {textAlign: 'center'}
  return(
    
  <div style={styleObject} className="container">
  <Profile name= "AHMED Ahlem" 
           bio= "I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. "
           pro ="Im Web devoloper" 
           handleName = {handleName}>
           <img src="https://i.pinimg.com/736x/3a/e6/62/3ae6620e91e2a72f900dd1d67e981281.jpg" width={200} alt="logo"/>   
  </Profile>
  </div>
  );
  
}

export default App;
