import React from "react";
import "./style.css";



function ImageCard(props) {
  return (
    <div  onClick={() => props.handleShuffle(props.id)} className="remove">
      <div className="img-container">
        <img alt={"image id:" + props.id} src={props.image} />
      </div>
      
      
    </div>
  );
}

export default ImageCard;
