import React from 'react'
import { Link } from 'react-router-dom'
import '../cssFile/CircleButton.css'
export default function CircleButton(props) {
    return (
        <div>
            <Link to={props.toLink}>
            <button style={{backgroundColor:`${props.backgroundColor}`,color:`${props.fontColor}`}} id="circleButton" >
                {props.word}
            </button>
            </Link>
            
        </div>
    )
}
