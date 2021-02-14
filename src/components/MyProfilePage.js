import React,{useState} from 'react'
import NavBar from './NavBar'
import '../cssFile/MyProfilePage.css'
import CircleButton from './CircleButton'


export default function MyProfilePage(props) {
  let usr = JSON.parse(localStorage.getItem('User'))
    return (<div>
        <NavBar Page="MyProfilePage" toLink="/MainPage"/>
        <div className="card">
  <div className="card-body">
  <h1 style={{fontWeight:"bold"}}>  {usr.firstName} {usr.lastName} </h1>
  </div>
  <div className="card-footer">

<CircleButton 
word="My Orders" 
toLink="/MyOrders"
fontColor="red"
backgroundColor="black"
/>

<CircleButton 
word="Wish List" 
toLink="/WishList"
fontColor="red"
backgroundColor="black"
/>

<CircleButton 
word="Edit Profile" 
toLink="/EditProfile"
fontColor="red"
backgroundColor="black"
/>

  </div>
</div>
<div className="card">
<div className="card-body">
    <h1>terms and conditions</h1>
</div>
<div className="card-footer">
    <h4>
    Please read these Terms carefully. 
    including any of its content,
     is conditional on your agreement to these Terms. 
     You must read, agree with, and accept all of the terms and conditions contained in these Terms. 
     By creating an account, or by using or visiting our Website,
      you are bound to these Terms and you indicate your continued acceptance of these Terms.
    </h4>
</div>
</div>

</div>
    )
}
