import React, { useState, Component } from "react";
import { Route, Switch ,Link} from "react-router-dom";
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

export default function App() {
  const [itemInUse, setItemInUse] = useState(null);
  const [Users , setUsers] = useState([]);
  const [allItems , setAllItems] = useState(ItemShopArr);
  const [cartArray,setCartArray] = useState([]);
  const [pathBack , setPathBack] = useState([]);

  function registerNewUser(e) {
    let temp = Users;
    Users.push(e);
    setUsers(temp);
    console.log(temp)
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
   console.log(id + " " + quantity)
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
 console.log(temp);
 await setAllItems(temp);
}

  function SetItem(e,path) {
    setItemInUse(e);
    setPathBack(path);
  }

  return (
    <div>
      <Switch>
      
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
            <MainPageAfterLogin 

            />
          </Animated>
        </Route>

        <Route exact path="/ProfilePage">
          <MyProfilePage
            imgSrc="https://i.pinimg.com/564x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg"
            name="mosaab abo rkia"
          />
        </Route>

        <Route exact path="/MyOrders">
          <MyOrders />
        </Route>

        <Route exact path="/WishList">
          <WishList />
        </Route>

        <Route exact path="/EditProfile">
          <EditProfile />
        </Route>

        <Route exact path="/CartPage">
          <CartPage ChangeQuantity={ChangeQuantity} removeFromCart={removeFromCart} cartArray={cartArray}/>
        </Route>         

        <Route exact path="/ItemPage">
          <ItemPage itemInUse={itemInUse} pathBack={pathBack}  AddToCart={AddToCart}/>
        </Route>

        <Route exact path="/ContactUs">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}
