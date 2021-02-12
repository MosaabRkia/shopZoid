import React from 'react'
import EachLine from './EachLine'
import NavBar from './NavBar'

export default function WishList(props) {
    const ArrMyOrder=[
        {srcImg:"https://images.unsplash.com/photo-1490077476659-095159692ab5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    ,orderId:"1235324",
    totalPrice:"255"
},
{srcImg:"https://images.unsplash.com/photo-1490077476659-095159692ab5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
,orderId:"1235324",
totalPrice:"255"
},
 {srcImg:"https://images.unsplash.com/photo-1490077476659-095159692ab5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
,orderId:"1235324",
totalPrice:"255"
}
    ]
    return (
        <div>
            <NavBar toLink="/ProfilePage" Page="MyProfilePage"/>
            <ul className="list-group">
            {
               /* props.*/ArrMyOrder.map(e=>{
                 return(
                     <div>
                          <EachLine type="WishList" e={e} />
                     </div>
                    
                 )   
                })
            }
            </ul>
        </div>
    )
}
