import React from 'react'
import '../cssFile/CircleButton.css'
export default function CircleButton(props) {
    return (
        <div>
            <a href={props.toLink}>
            <button style={{backgroundColor:`${props.backgroundColor}`,color:`${props.fontColor}`}} id="circleButton" >
                {props.word}
            </button>
            </a>
            
        </div>
    )
}
