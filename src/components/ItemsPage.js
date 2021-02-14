import React, { useState, useEffect } from "react";
import EachListItem from "./EachListItem";
import NavBar from "./NavBar";

export default function ItemsPage(props) {
  const [catalogList, setCatalogList] = useState([]);


  useEffect(() => {
    let temp = props.allItems.filter((item) => {
      return item.type === props.typeOfCatalog;
    });
    setCatalogList(temp);
  }, []);

  function setItemToMain(e,path) {
    props.SetItem(e,path);
  }

  function AddToCart(eId) {
    let ToAddInCart = catalogList.filter((e) => {
      return e.id === eId;
    });
    let NewList = props.allItems.filter((e) => {
      return e.id !== eId;
    });
  
    let temp = NewList.filter((item) => {
      return item.type === props.typeOfCatalog;
    });
    setCatalogList(temp);
  
    props.AddToCart(ToAddInCart,NewList);
  }
  function SortIt(){
   catalogList.sort( (a, b)=> {
      return a.price - b.price;
    });
    setCatalogList(catalogList)
<<<<<<< HEAD
=======
    console.log(catalogList)
>>>>>>> main
  }

  return (
    <div>
      <NavBar Page="ItemsPage" toLink="/MainPage" />
<button onClick={SortIt}>Sort By Price</button>
<<<<<<< HEAD
      <ul key="list">
=======
      <ul>
>>>>>>> main
        {catalogList.map((e) => {
          return (
            <EachListItem
              setItemToMain={setItemToMain}
              AddToCart={AddToCart}
              Item={e}
              path={`/ItemsPage-${props.index}`}
              />
          );
        })}
      </ul>
    </div>
  );
}

