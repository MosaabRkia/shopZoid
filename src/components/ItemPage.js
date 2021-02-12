import React,{useState} from 'react'
import NavBar from './NavBar'
import '../cssFile/ItemPage.css'

export default function ItemPage(props) {
    const [added,setAdded] = useState(false);

    function AddToCart(){
        props.AddToCart(props.itemInUse.id);
        setAdded(true);
       }
    return (
        <div>
            <NavBar toLink={props.pathBack} Page="MyProfilePage"/>
        <img id="itemPhoto" src={props.itemInUse.imgsrc}/>
        <h1 id="itemTittle">{props.itemInUse.title}</h1>
        <h4 id="itemPrice">Price : {props.itemInUse.price}$</h4>
        {added?<button disabled onClick={AddToCart}>Added !</button>:<button  onClick={AddToCart}>Add To Cart</button>}
        <h4 id="itemDescription">{props.itemInUse.descrption}</h4>
        </div>
    )
}
/**pathBack */