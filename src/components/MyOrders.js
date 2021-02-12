import React from 'react'
import EachLine from './EachLine'
import NavBar from './NavBar'

export default function MyOrders(props) {
    return (
        <div>
            <NavBar toLink="/ProfilePage" Page="MyProfilePage"/>
            <ul className="list-group">
            {
                props.ArrMyOrder.forEach((e,index)=>{
                    e.map(e1=>{
                        return  <div><h1>Order {index} :</h1> <EachLine type="PaymentPage" e={e1} /></div>
                       })
                })
            }
            </ul>
        </div>
    )
}
