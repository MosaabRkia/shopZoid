import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../cssFile/RegisterPage.css";
class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName:null,
        lastName:null,
        email:null,
        password:null,
        conPassword:null,
        message:"",
        idUser:0
    };
  }


  onChangeHandle = (e) => {
    if ([e.target.name] === "email") {
      if (!this.validateEmail(e.target.value)) return;
    }
    this.setState({ [e.target.name]: e.target.value });
  };

onClickRegister=(e)=>{
    e.preventDefault();

    let found = false;

if(this.state.password !== this.state.conPassword)
{
    this.setState({message:"Passwords not the Same !"})
        return;
}
if(this.props.Users !== undefined )
{

  this.props.Users.map(e=>{
    if(e.email == this.state.email){
        console.log("found same")
        this.setState({message:"Email Already Registered!"})
        found = true;
        return;
    }
})  
if(found ===true) {return;}
if(this.state.password.length < 8){
  this.setState({message:"Please Make Sure Your Password More Than 8 Letters"}); 
  return;
}

this.setState({message:`Successfully Registered ${this.state.firstName}`})
console.log(this.state.idUser);
let User = {/*User:this.state.idUser,*/firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,password:this.state.password,conPassword:this.state.conPassword}
this.props.registerNewUser(User);
//let nextId = this.state.idUser+1;
//this.setState({idUser:nextId})
//console.log("let" + nextId);

setTimeout(()=>{
    this.setState({message:null})
    this.props.history.push('/');
}, 3000)
}
}
  render() {
    console.log(this.state.idUser)
    return (
      <form onSubmit={this.onClickRegister} className="container RegisterPage">
        <div id="titlesRegisterP">
          <Link to="/">
            <img
              style={{ position: "absolute" }}
              alt="backArrow"
              id="backArrow"
              src="https://cdn2.iconfinder.com/data/icons/arrows-and-universal-actions-icon-set/256/arrow_left_circle-256.png"
            />
          </Link>
          <img
            id="LOGOReg"
            alt="LOGOReg"
            src="https://i.ibb.co/CbBF9Hn/LOGO.png"
          />
        </div>
        <div id="RegisterForm">
          <h4 id="titleOfRegister">Sign Up</h4>
          <p id="typeForInput">First Name</p>
          <input
            name="firstName"
            onChange={this.onChangeHandle}
            className="makeSpace"
            id="firstNameReg"
            type="text"
            placeholder="Enter First Name"
            required
          />
          <p id="typeForInput">Last Name</p>
          <input
            name="lastName"
            onChange={this.onChangeHandle}
            className="makeSpace"
            id="lastNameReg"
            type="text"
            placeholder="Enter Last Name"
            required
          />
          <p id="typeForInput">Email Adress</p>
          <input
                      name="email"
                      onChange={this.onChangeHandle}
            className="makeSpace"
            id="emailReg"
            type="email"
            placeholder="Enter Email"
            required
          />
          <p id="typeForInput">Password</p>
          <input
            name="password"
            onChange={this.onChangeHandle}
            className="makeSpace"
            id="passReg"
            type="password"
            placeholder="Enter Password"
            required
          />
          <p id="typeForInput">Confirm Password</p>
          <input
            name="conPassword"
            onChange={this.onChangeHandle}
            className="makeSpace"
            id="conPassReg"
            type="password"
            placeholder="Enter Password Again"
            required/>
          <small>We Never Save Your Password !!!</small>
          <small>{this.state.message}</small>
          <input className="makeSpaceButton" type="submit" value="Sign Up"  />
        </div>
      </form>
    );
  }
}
export default withRouter(RegisterPage) 