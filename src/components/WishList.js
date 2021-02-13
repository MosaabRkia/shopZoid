import React, { useState } from 'react'
import EachLine from './EachLine'
import NavBar from './NavBar'

export default function WishList(props) {
    const [arrayWishList,setArrayWishList] = useState(props.wishListArray) 
    function AddToCartWishList(e){
        console.log("arrived")
        console.log(e)
//removeFromCart
        let theNewListWish = props.wishListArray.filter((item)=>{ return item.id !== e})
         props.AddToCartWishList(e);
        setArrayWishList(theNewListWish)
    }
    function RemoveFromWishList(e){
        let theNewListWish = props.wishListArray.filter((item)=>{ return item.id !== e})
        props.RemoveFromWishList(e);
       setArrayWishList(theNewListWish)
    }

    return (
        <div>
            <NavBar toLink="/ProfilePage" Page="MyProfilePage"/>
            <ul className="list-group">
            {
               props.wishListArray.map(e=>{
                 return(
                     <div>
                          <EachLine RemoveFromWishList={RemoveFromWishList} AddToCartWishList={AddToCartWishList} type="WishList" e={e} />
                     </div>
                    
                 )   
                })
            }
            </ul>
        </div>
    )
}
