import React,{useEffect, useState} from 'react'
import NavBar from './NavBar'
import '../cssFile/ItemPage.css'

export default function ItemPage(props) {
    const [added,setAdded] = useState(false);
    const [addedWish,setAddedWish] = useState(false);


useEffect(()=>{
props.wishListArray.map(e=>{
    if(e.id === props.itemInUse.id){
        setAddedWish(true);
    }
})
},[])

    function AddToCart(){
        props.AddToCart(props.itemInUse.id);
        setAdded(true);
       }
       function AddToWishList(){
        setAddedWish(true);
        props.AddToWishList(props.itemInUse.id);
       }

    return (
        <div>
            <NavBar  Page="ItemPage"/>
        <img id="itemPhoto" src={props.itemInUse.imgsrc}/>
        <h1 id="itemTittle">{props.itemInUse.title}</h1>
        <h4 id="itemPrice">Price : {props.itemInUse.price}$</h4>
        {added?<button disabled>Added !</button>:<button  onClick={AddToCart}>Add To Cart</button>}
        {addedWish?<button disabled >Added to Wish List!</button>:<button  onClick={AddToWishList}>Add To Wish List</button>}
        <h4 id="itemDescription">{props.itemInUse.descrption}</h4>
        </div>
    )
}
/**pathBack */