import React from 'react'
import { Link } from 'react-router-dom'
import '../cssFile/CatalogItem.css'

export default function CatalogItem(props) {
    return (
        <Link to={props.ToLink}>
        <div  id="eachDivCatalog">
            <img id="photoInsideCatalogItem" src={props.imgSrc} alt={props.index} />
            <p id="textInsideCtalogItem">{props.catalogName}</p>
        </div>
        </Link>
    )
}
