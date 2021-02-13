import React from "react";
import { Link, withRouter } from "react-router-dom";
import CircleButton from "./CircleButton";
import '../cssFile/SucessfullyPageOrdered.css'
function SucessfullyPageOrdered() {
  return (
    <div id="AllDiv">
      <CircleButton
        word="Main Page"
        toLink="/MainPage"
        fontColor="purple"
        backgroundColor="white"
      />
      <br/><br/>
      <h1>Sucessfully Placed Order</h1>
      <br/><br/>
   <Link to="/MyOrders">My Orders</Link>
    </div>
  );
}
export default withRouter(SucessfullyPageOrdered);
/**   <CircleButton
        word="My Orders"
        toLink="/MyOrders"
        fontColor="red"
        backgroundColor="white"
      /> */
