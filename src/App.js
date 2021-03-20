import './App.css';
import React from "react";
import Profile from "./profile/ProfileComponent.jsx";
const alertMyInput = () => {
  alert('my name is Ahlem');
}
const  App = () => { 
  return(
  <div>
  <Profile name= "AHMED Ahlem" bio= "Im a web devoloper" pro ="Web devoloper" alertMyInput = {alertMyInput}>
   <img src="https://i.pinimg.com/736x/3a/e6/62/3ae6620e91e2a72f900dd1d67e981281.jpg" alt="logo"/>   
  </Profile>
  </div>
  );
  
}
export default App;
