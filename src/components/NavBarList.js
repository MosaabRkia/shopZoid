import React from "react";
import '../cssFile/NavBarList.css'
import {Animated} from "react-animated-css";
import { Link } from "react-router-dom";

export default function NavBarList(props) {
 switch (props.Page) {
   case "MyProfilePage":
    return (
      <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={2500} animationOutDuration={2500} isVisible={props.showOrHide}>
      <div className="BarList" id={props.showOrHide ? "Show" : "Hide"}>
        <ul className="list-group">
        <Link to="/ProfilePage" style={{ textDecoration: 'none' }}><li onClick={props.a} className="list-group-item" >My Profile</li></Link>
         <Link to="/ContactUs" style={{ textDecoration: 'none' }}><li onClick={props.b} className="list-group-item">Contact Us</li></Link>
         <Link to="/" style={{ textDecoration: 'none' }}> <li onClick={props.c} className="list-group-item">Log Out</li></Link> 
        </ul>
      </div>
      </Animated>
    );
     break;

     case "MainPageAfterLogin":
      return (
        <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={2500} animationOutDuration={2500} isVisible={props.showOrHide}>
        <div className="BarList" id={props.showOrHide ? "Show" : "Hide"}>
          <ul className="list-group">
        <Link to="/ProfilePage" style={{ textDecoration: 'none' }}><li onClick={props.a} className="list-group-item" >My Profile</li></Link>
         <Link to="/ContactUs" style={{ textDecoration: 'none' }}><li onClick={props.b} className="list-group-item">Contact Us</li></Link>
         <Link to="/" style={{ textDecoration: 'none' }}> <li onClick={props.c} className="list-group-item">Log Out</li></Link> 
          </ul>
        </div>
        </Animated>
      );
       break;

       case "ContactUs":
      return (
        <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={2500} animationOutDuration={2500} isVisible={props.showOrHide}>
        <div className="BarList" id={props.showOrHide ? "Show" : "Hide"}>
          <ul className="list-group">
        <Link to="/ProfilePage" style={{ textDecoration: 'none' }}><li onClick={props.a} className="list-group-item" >My Profile</li></Link>
         <Link disabled id="selected"  style={{ textDecoration: 'none' }}><li onClick={props.b} className="list-group-item">Contact Us</li></Link>
         <Link to="/" style={{ textDecoration: 'none' }}> <li onClick={props.c} className="list-group-item">Log Out</li></Link> 
          </ul>
        </div>
        </Animated>
      );
       break;
   default:
     break;
 }
}
