import React, { useState, useEffect } from "react";
import EachListItem from "./EachListItem";
import NavBar from "./NavBar";

export default function ItemsPage(props) {
  const [catalogList, setCatalogList] = useState([]);


  useEffect(() => {
    console.log('hehe'  + props.typeOfCatalog)
    let temp = props.allItems.filter((item) => {
      return item.type === props.typeOfCatalog;
    });
    console.log("im temp")
    console.log(temp)
    setCatalogList(temp);
    console.log("added here")
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

  return (
    <div>
      <NavBar Page="MainPageAfterLogin" toLink="/MainPage" />

      <ul>
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
// <SearchBar />
