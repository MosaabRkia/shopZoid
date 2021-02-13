import React from 'react'
import { withRouter } from 'react-router-dom'
import EachLine from './EachLine'

function ShowListMyOrders(props) {
    console.log(props.e)
    let newUniq = 'A' + Math.random().toString(36).substr(2, 9);
    return (
        <ul>
                            <h1>Order {props.index+1}</h1>
                            <h4>Order Id : {newUniq}</h4>
            {props.e.Order.map( (r) =>{

    return (<li key={r.orderId} style={{display:"flex",margin:"5px"}} className="list-group-item">
      <div id="photoDiv">
        <img id="imgOrder" src={r.imgsrc} />
      </div>
      <div id="typeDiv">
      <p id="orderIdText"> {r.title}</p>
        <p id="orderIdText"> Id Item : {r.id}</p>
        <p>quantity : {r.quantity}</p>
        <p id="orderPriceText">Price : {r.price*r.quantity}$</p>
      </div>
    </li>
  );
            })}
        </ul>
    )
}
export default withRouter(ShowListMyOrders)