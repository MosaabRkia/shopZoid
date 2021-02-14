import React, { Component, useEffect, useState } from 'react'
import '../cssFile/LoginPage.css'
import {Animated} from "react-animated-css";
import { Link, withRouter } from 'react-router-dom';
function LoginPage(props) {

    const [message,setMessege] = useState("")
    const [loginEmail,setLoginEmail] = useState()
    const [loginPassword,setLoginPassword] = useState()
    const [saveLogin,setSaveLogin] = useState()
    


useEffect(() => {
   if(localStorage.getItem('saveLogin') === true){
    props.history.push("/MainPage");
   }
}, [])



    function CheckLogin(e){
        e.preventDefault();
        console.log(props.Users)
        console.log("joined")
        props.Users.map(e=>{
            if(e.email === loginEmail && e.password===loginPassword){
if(saveLogin === true){
localStorage.setItem('saveLogin',true);
}
localStorage.setItem("User",JSON.stringify(e));
console.log(saveLogin)

if(e.kind === "Admin"){
  props.history.push("/AdminPage");
}
else{
  props.history.push("/MainPage");
}
 }
 })
setMessege('Ops Something Wrong Try Again');
    }
    
  function onChangeHandleEmail(e){
    setLoginEmail(e.target.value);
  };
  function onChangeHandlePassword(e){
   setLoginPassword(e.target.value);
 };

  function onChangeHandleSaveLogin(e){
   setSaveLogin(e.target.checked);
  }

        return (
            <div>
             <Animated animationIn="fadeIn" animationInDuration={1400} animationOutDuration={1400} isVisible={true}>
                <div>
               <img id="imgLogin" alt="ImgLogin" src="https://airspeed.ph/wp-content/uploads/2020/06/The-Importance-of-Courier-Services-for-Online-Shopping-of-Essential-Items.jpg" /> 
               <img id="LOGOlog" alt="LOGOlog" src="https://i.ibb.co/CbBF9Hn/LOGO.png"/>
                </div>
                <form onSubmit={CheckLogin}>
                <div id="DivLoginInputs">
                <p id="typeForInput">Email Adress</p>
                <input name="loginEmail" onChange={onChangeHandleEmail} className="loginInput" id="loginInputEmail" type="email" placeholder="Enter Email Adress" required/>
               <p id="typeForInput" >Password</p>
               <input name="loginPassword" onChange={onChangeHandlePassword} className="loginInput" id="loginInputPassword" type="password" placeholder="Enter Password" required/>
                </div>

               <div id="savePasswordInput"><input name="saveLogin" onChange={onChangeHandleSaveLogin}  type="checkbox" name="savePassword" />  save your password </div>
               {message}
             <div id="buttonLoginDiv"><input id="ButtonLogin" type="submit" value="Login" /></div>
             </form>
               <div id="goToRegisterFromLogin">
               <Link to="/register">you dont have account already? Register and big Discount !!</Link>
               </div>
               </Animated>
            </div>
        )
    }

export default withRouter(LoginPage) 