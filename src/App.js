import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import MainPageAfterLogin from "./components/MainPageAfterLogin";
import RegisterPage from "./components/RegisterPage";
import { Animated } from "react-animated-css";
import MyProfilePage from "./components/MyProfilePage";
import MyOrders from "./components/MyOrders";
import WishList from "./components/WishList";
import EditProfile from "./components/EditProfile";
import CartPage from "./components/CartPage";
import ItemsPage from "./components/ItemsPage";
import ItemPage from "./components/ItemPage";
import ContactUs from "./components/ContactUs";
import ItemShopArr from './components/Arrays/ItemShopArr'
import AllArrayOfShopsCatalog from './components/Arrays/ItemsPagesArr'
import '../src/cssFile/body.css'
import PaymentPage from "./components/PaymentPage";
import SucessfullyPageOrdered from "./components/SucessfullyPageOrdered";
import PageSucessfullySentContact from "./components/PageSucessfullySentContact";
import AdminPage from "./components/AdminPage";

export default function App() {
  const [itemInUse, setItemInUse] = useState(null);
  const [Users , setUsers] = useState([{/*User:this.state.idUser,*/firstName:'Admin',lastName:'Admin',email:'Admin@Admin.Admin',password:'Admin',conPassword:'Admin',kind:"Admin"}]);
  const [allItems , setAllItems] = useState(ItemShopArr);
  const [cartArray,setCartArray] = useState([]);
  const [pathBack , setPathBack] = useState([]);
  const [ArrOrders , setArrOrders] = useState([]);
  const [LastOrder , setLastOrder] = useState();
  const [counterForOrder , setCounterForOrder] = useState();
  const [wishListArray , setWishListArray] = useState([]);


function CreateNewItem(e){
  let temp = allItems;
  temp.push(e)
  setAllItems(temp);
}

function ChangePrice(itemID,newPrice){
    let temp=[];//mshtni
      allItems.map(item=>{//bmshi bkl al items bl aslyi
          if(item.id  === itemID){//atha la id nfs al id ali 8erna s3ro 8er s3ro wkml 3ade
              item.price=newPrice;// update ll price
      }
  temp.push(item);// bdefo daymn lw 8er al m7er wela l3
  })
 setAllItems(temp); // set state mshan y3dken twali
}

function RemoveItem(idToRemove){
  let temp = []//mshtni
 allItems.map(item=>{//map 3la al all items 
  if( item.id  !== idToRemove){// atha had al id msh nfs al id ali bdna nm7a az defo bl temp
    temp.push(item)
  }
})
setAllItems(temp);//set state ll all items 
}

function ChangeInfoUser(e){
setUsers(e);
}

  function RemoveFromWishList(e){
    let newList = wishListArray.filter((item)=>{ return item.id !== e})
    setWishListArray(newList);
  }

function AddToCartWishList(e){
  //remove from big array
  let theNewList = allItems.filter((item)=>{ return item.id !== e})
  setAllItems(theNewList)

  // add to cart
let TheItem = wishListArray.filter((item)=>{ return item.id === e})

let temp = cartArray;
temp.push(TheItem[0])
setCartArray(temp)
// remove from wishlist
  let theNewListWish = wishListArray.filter((item)=>{ return item.id !== e})
setWishListArray(theNewListWish)

}

function AddOrderPlaced(e){
  setLastOrder(e);
  let temp = ArrOrders;
  temp.push({Order:e});
  setArrOrders(temp);
  setCounterForOrder(counterForOrder+1);
}

  function registerNewUser(e) {
    let temp = Users;
    temp.push(e);
    setUsers(temp);
  }

  function AddToWishList(e){
      let theItem = allItems.filter((item)=>{ return item.id === e})
      let temp = wishListArray;
      temp.push(theItem[0])
      setWishListArray(temp)
  }

  function AddToCart(AddToCart,NewList){
  if(NewList === undefined){
     NewList = allItems.filter((e) => {
      return e.id !== AddToCart;
    });
    let Removed = allItems.filter((e) => {
      return e.id !== AddToCart;
    });
    let temp = cartArray;
     temp.push(Removed[0])
     setCartArray(temp);
     setAllItems(NewList);
  }
else{
  let temp = cartArray;
   temp.push(AddToCart[0])
   setCartArray(temp);
   setAllItems(NewList);
}
}
 function ChangeQuantity(id,quantity){
cartArray.map(e=>{
  if(e.id == id){
    let number = parseInt(quantity)
    e.quantity = number;
  }
})
let temp = cartArray;
setCartArray(temp);
}

 async function removeFromCart(removeItem,newArrCart){
   removeItem[0].quantity = 1;
 await setCartArray(newArrCart);
 let temp = allItems;
 temp.push(removeItem[0]);
 await setAllItems(temp);
}

  function SetItem(e,path) {
    setItemInUse(e);
    setPathBack(path);
  }

  function resetCart(e){
    let temp =[];
    e.forEach(e=>{
       temp = ItemShopArr;
      temp.push(e)
    })
    setAllItems(temp);
    setCartArray([]);
  }

  return (
    <div>
      <Switch>
        <Route exact path="/AdminPage">
          <AdminPage ChangePrice={ChangePrice} CreateNewItem={CreateNewItem}  RemoveItem={RemoveItem} allItems={allItems}/>
        </Route>
      <Route exact path="/SucessfullyPageOrdered">
          <SucessfullyPageOrdered />
        </Route>
      
      <Route exact path="/PaymentPage">
          <PaymentPage   LastOrder={LastOrder}/>
        </Route>
      
        <Route exact path="/">
          <LoginPage Users={Users} />
        </Route>

        <Route exact path="/Register">
          <Animated
            animationIn="zoomInDown"
            animationOut="flipOutX"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <RegisterPage Users={Users}  registerNewUser={registerNewUser}/>
          </Animated>
        </Route>

        {AllArrayOfShopsCatalog.map((e, index) => {
              return (
                //Create Pages With PATH
                <Route exact path={`/ItemsPage-${index}`}>
                  <ItemsPage
                    index={index}
                    typeOfCatalog={e.typeOfCatalog}
                    allItems={allItems}
                    SetItem={SetItem}
                    AddToCart={AddToCart}
                  />
                </Route>
              );
            })}

        <Route exact path="/MainPage">
          <Animated
            animationIn="fadeIn"
            animationOut="rotateOutDownRight"
            animationInDuration={2500}
            animationOutDuration={2500}
            isVisible={true}
          >
            <MainPageAfterLogin />

          </Animated>
        </Route>

        <Route exact path="/ProfilePage">
          <MyProfilePage
            imgSrc="https://i.pinimg.com/564x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg"
            name="mosaab abo rkia"
            Users={Users}
          />
        </Route>

        <Route exact path="/MyOrders">
          <MyOrders  ArrOrders={ArrOrders}/>
        </Route>

        <Route exact path="/WishList">
          <WishList RemoveFromWishList={RemoveFromWishList} AddToCartWishList={AddToCartWishList} wishListArray={wishListArray}/>
        </Route>

        <Route exact path="/EditProfile">
          <EditProfile />
        </Route>

        <Route exact path="/CartPage">
          <CartPage resetCart={resetCart} AddOrderPlaced={AddOrderPlaced} ChangeQuantity={ChangeQuantity} removeFromCart={removeFromCart} cartArray={cartArray}/>
        </Route>         

        <Route exact path="/ItemPage">
          <ItemPage wishListArray={wishListArray} AddToWishList={AddToWishList} itemInUse={itemInUse} pathBack={pathBack}  AddToCart={AddToCart}/>
        </Route>

        <Route exact path="/ContactUs" >
          <ContactUs  />
        </Route>

<Route exact path="/EditProfile">
  <EditProfile Users={Users} ChangeInfoUser={ChangeInfoUser}/>
</Route>

        <Route exact path="/PageSucessfullySentContact">
          <PageSucessfullySentContact />
        </Route>
      </Switch>
    </div>
  );
}
