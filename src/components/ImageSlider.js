import React,{useState} from 'react'
import '../cssFile/ImageSlider.css'


export default function ImageSlider(props) {
    const [imagePlace,setImagePlace] = useState(0);
    const [AllImages,setAllImages] = useState([
        "https://www.geekysaur.com/wp-content/uploads/Razer-Sale.png",
        "https://www.geeky-gadgets.com/wp-content/uploads/2015/01/Razer-Sale.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7XvSCwA90UhR6qw7_nJRpOB2sLrTg1b-SAw&usqp=CAU",
        "https://i.pinimg.com/originals/c2/4a/f4/c24af456bf2f73cac57bd3d91d51098f.jpg",
        "https://press.razer.com/wp-content/uploads/2019/04/Blade-15-1024x540.png"
    ]);
    function changePlaceNext(){
       if(imagePlace < AllImages.length-1){
           setImagePlace(imagePlace + 1);
       }
       else{
        setImagePlace(0);
       }
    }
    function changePlacePrev(){
        if(imagePlace <= 0){
            setImagePlace(AllImages.length-1);
        }
        else{
         setImagePlace(imagePlace-1);
        }
     }

    return (
        <div id="slider">
            <img onClick={props.GoLink} id="imageThatSlider" src={AllImages[imagePlace]} />
            <img onClick={changePlaceNext} alt="NextArrow" id="NextArrow" src="https://cdn2.iconfinder.com/data/icons/arrows-and-universal-actions-icon-set/256/arrow_left_circle-256.png"/>
            <img onClick={changePlacePrev} alt="PrevArrow" id="PrevArrow" src="https://cdn2.iconfinder.com/data/icons/arrows-and-universal-actions-icon-set/256/arrow_left_circle-256.png"/>
        </div>
    )
}
     //       