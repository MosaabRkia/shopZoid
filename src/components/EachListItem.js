import React,{useState} from "react";
import '../cssFile/EachListItem.css'
import { Link } from 'react-router-dom'

export default function EachListItem(props) {

 function changeIt(){
  props.setItemToMain(props.Item,props.path);
}

function AddToCart(){
 props.AddToCart(props.Item.id);
}

  return (
 
    <li id="profileItem">
         <Link to={"/itemPage"} onClick={changeIt}>
      <img id="profileImg" src={props.Item.imgsrc} />
      <h4 id="profileTittle">{props.Item.title}</h4>
      <small id="profilePrice">{props.Item.price}$</small><br/>
      </Link>
      <button onClick={AddToCart} style={{marginBottom:"5px"}} className="btn btn-primary">Add to Cart</button>
    </li>

  );
}
