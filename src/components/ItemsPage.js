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
    console.log(NewList)
    console.log(ToAddInCart)
    setCatalogList(NewList);
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
