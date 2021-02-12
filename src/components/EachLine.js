import React, { useState } from "react";
import "../cssFile/EachLine.css";
export default function EachLine(props) {

  const [quantityLess,setQunatityLess] = useState();
  function RemoveBar(e){
props.RemoveOne(e.target.id);
  }

  function noLessThan(e){
    let quantitycheck = e.target.value;
    //console.log(quantitycheck + "aaaaa")
    if(quantitycheck < 1){
      setQunatityLess(1);
      //let id = this.props.idOfIl
     // this.props.changeQuantity(1,id)
  }
  else{
    setQunatityLess(quantitycheck)
    //props.e.id
    props.ChangeQuantity(props.e.id,quantitycheck)
     // this.props.changeQuantity(e.target.value,id)
 }

  }

    if(props.type == "WishList"){
      return (<li key={props.e.id} style={{display:"flex",margin:"5px"}} className="list-group-item">
      <div id="photoDiv">
        <img id="imgOrder" src={props.e.srcimg} />
      </div>
      <div id="typeDiv">
        <p id="orderIdText">Id : {props.e.id}</p>
        <p>quantity : {props.e.quantity}</p>
        <p id="orderPriceText">Total Price : {props.e.price}$</p>
        <button onClick="#AddToCart">Add To Cart</button>
      </div>
    </li>
  );
    }
    else{
      return (<li key={props.e.orderId} style={{display:"flex",margin:"5px"}} className="list-group-item">
      <div id="photoDiv">
        <img id="imgOrder" src={props.e.imgsrc} />
      </div>
      <div id="typeDiv">
        <p id="orderIdText"> Id Item : {props.e.id}</p>
        <p>quantity : {props.e.quantity}</p>
        <p id="orderPriceText">Price : {props.e.price}$</p>
        <input id={`IdQuantity${props.e.id}`} type="number" value={quantityLess} onChange={noLessThan}/><br/>
        <button id={props.e.id} onClick={RemoveBar} className="btn btn-danger">Remove</button>
      </div>
    </li>
  );
    }
    
}
