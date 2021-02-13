import React from 'react'
import { withRouter } from 'react-router-dom'
import NavBar from './NavBar'
import ShowListMyOrders from './ShowListMyOrders'

 function MyOrders(props) {
     console.log(props.ArrOrders)
    return (
        <div>
            <NavBar toLink="/ProfilePage" Page="MyProfilePage"/>
            <div className="list-group">
            {
                props.ArrOrders.map((e,index)=>{
                    return <ShowListMyOrders index={index} e={e}/>
                })
            }
            </div>
        </div>
    )
}
export default withRouter(MyOrders)
