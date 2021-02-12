import React,{Component, useEffect, useState} from "react";
import { useHistory, withRouter } from "react-router-dom";
import EachLine from "./EachLine";
import NavBar from "./NavBar";

 function CartPage(props) {

      const [cartArr,setCartArr] = useState(props.cartArray)
      let [total,setTotal] = useState(0); 
      let history = useHistory()

      useEffect(()=>{
        let temp=0;
        cartArr.map((e) => {
          temp += parseInt(e.price*e.quantity)
        }) 
        setTotal(temp);
      },[])

    const RemoveOne=(e1)=>{
    let toRemove = cartArr.filter(e=>{ return e.id === parseInt(e1)})
    let newArrCart = cartArr.filter(e=>{ return e.id !== parseInt(e1)})
   props.removeFromCart(toRemove,newArrCart);
   setCartArr(newArrCart)
//render total
   let temp=0;
    newArrCart.map((e) => {
      temp += parseInt(e.price*e.quantity)
    }) 
    setTotal(temp);
  }

    function ChangeQuantity(id,quantity){
    console.log(id + " " + quantity)
     props.ChangeQuantity(id,quantity);
    setCartArr(props.cartArray)
    cartArr.forEach(e=>{
      if(e.id == id)
      {e.quantity = quantity;}
    })
    setCartArr(cartArr)

    let temp=0;
    cartArr.map((e) => {
      temp += parseInt(e.price*e.quantity)
    }) 
    setTotal(temp);
   }

function PayAll(){
//AddOrderPlaced
  let newOrder = cartArr;
  console.log(newOrder);
  props.AddOrderPlaced(cartArr)
  props.resetCart(cartArr);
  setCartArr([])
  setTotal(0)
  history.push("/PaymentPage", { from: this })
  //props.history.push('/');
}


  return (
    <div>
      <NavBar Page="CartPage" toLink="/MainPage" />
      <ul key="List" className="list-group">
        {  
            cartArr.map((e) => {
              return <EachLine ChangeQuantity={ChangeQuantity} e={e} RemoveOne={RemoveOne} /> ;
            })     
        }
      <h1>  Total : {total}$</h1>
      </ul>
      <div onClick={PayAll} style={{textAlign:"center", display:total!==0?"block":"none"}}> <button className="btn btn-primary">Pay All</button></div>
     
    </div>
  );
}
export default withRouter(CartPage) 