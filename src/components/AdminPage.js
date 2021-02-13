import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import '../cssFile/AdminPage.css'
import NavBar from "./NavBar";

// hay mn no3 class component
export default class AdminPage extends Component {
  // constructor hwi ali mkbel props
  constructor(props) {
    //super bwde al props ll component aw lsho he yorsht
    super(props);
// hath lstate tb3 al AdminPage
    this.state={
        AdminPageItems:this.props.allItems//make a copy of all items
        ,newPrice:0//lma bdo ydef ybka 0 
        ,ID:null,//al id ali bdo aydef motsar 
        type:null//al id ali bdo aydef motsar 
        ,imgsrc:null//al id ali bdo aydef motsar 
        ,title:null//al id ali bdo aydef motsar 
        ,price:null//al id ali bdo aydef motsar 
        ,description:null//al id ali bdo aydef motsar 
        ,messege:""//al id ali bdo aydef motsar 
    }
  }


  // function btm7a Item onclick remove zr
  removeItem=(itemID)=>{
//bwde al id ali bdo nm7ah ll app 
this.props.RemoveItem(itemID)

// bn3ml copy mn al adminpageitems(copy of all items)
let temp = []//mshtni
this.state.AdminPageItems.map(item=>{//mnmrk 3kl al items 
    if(item.id  !== itemID){//bf7s atha al id ali bdna nm7ah 8er mn al id ali bl item (bl map)
        temp.push(item)
}})
this.setState({AdminPageItems:temp})//b3d ma m7ah bt3ml update ll adminpageitems(copy..)
}


ChangePrice=(itemID)=>{
  this.props.ChangePrice(itemID,this.state.newPrice) // send to main
  //add a update price in app
    let temp=[];//mshtni
      this.state.AdminPageItems.map(item=>{//bmshi bkl al items al copy 
          if(item.id  === itemID){//atha la id nfs al id ali 8erna s3ro 8er s3ro wkml 3ade
              item.price=this.state.newPrice;// update ll price
      }
  temp.push(item);// bdefo daymn lw 8er al m7er wela l3

  })

   this.setState({AdminPageItems:temp}) // set state mshan y3dken twali
}


HandlePrice=(e)=>{
    this.setState({newPrice:e.target.value})//b3ml t8eer ll state tb3 al price lma y8yer (onChange)
}


HandleChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value });//b3ml t8eer ll state tb3 al name ali bkbel aoto lma y8yer (onChange)
}


CreateNewItem=()=>{
    if(this.state.ID !== null 
        && this.state.type !== null
        && this.state.imgsrc !== null
        && this.state.title !== null
        && this.state.price !== null
        && this.state.description !== null){
            let NewItem = {
                id:this.state.ID,
                type:this.state.type,
                imgsrc:this.state.imgsrc,
                title:this.state.title,
                price:this.state.price,
                quantity:1,
                description:this.state.description
            }
            this.setState({AdminPageItems:[...this.state.AdminPageItems,NewItem]})// get all adminpageitems from state push NewItem
            this.props.CreateNewItem(NewItem);// send to add in main 
            this.setState({ messege:"Added"})
        }
else{
this.setState({ messege:"SomeThing Empty Make Sure Please !"})
}
}

  render() {//bs bl class component
    return (
      <div>
        <NavBar Page="Admin"/>
          <div id="AddItems">
             <h1 style={{color:"green"}}>Add Items</h1>
             {this.state.messege}<br/>
             <input type="text" name="ID" onChange={this.HandleChange} placeholder="ID"/>
             <input type="text" name="type" onChange={this.HandleChange} placeholder="type"/>
             <input type="text" name="imgsrc" onChange={this.HandleChange} placeholder="imgsrc"/>
             <input type="text" name="title" onChange={this.HandleChange} placeholder="title"/>
             <input type="text" name="price" onChange={this.HandleChange} placeholder="price"/>
             <input type="text" name="description" onChange={this.HandleChange} placeholder="description"/>
             <input type="button" onClick={this.CreateNewItem} value="Add Item"/>
          </div>
        <ul className="list-group">
          {this.state.AdminPageItems.map((item) => {
            return (<li id="Line" className="list-group-item">
                  <img id="imgLine" src={item.imgsrc} /> 
                  <br/> id:{item.id} <br/> {item.title}
                   <br/> Price : {item.price}$
          <br/> 

          <div class="input-group mb-3">
  <input type="text" onChange={this.HandlePrice} class="form-control" placeholder="New Price" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" onClick={()=>this.ChangePrice(item.id)} type="button">Change Price</button>
  </div></div>

            <br/>  <button className="btn btn-danger" onClick={()=>this.removeItem(item.id)}>remove Item</button>
            </li>
            
            )

          })}
        </ul>
      </div>
    );
  }
}
//لانو اذا محطناش اروه فنكشن بشغلهن لما يبنيهن بدون ما تعص
