import React from 'react'
import '../cssFile/GifImages.css'

export default function GifImages(props) {
    return (
        <div id="gifImageDiv">
           <img onClick={props.GoLink} id="imageGif" src={props.srcImg} />
        </div>
    )
}
