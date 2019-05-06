import React from "react";
import "./style.css";


export function ImageCard(props) {
  return (
    <div className="card" onClick={() => props.handleShuffle(props.id)} className="remove">
      <div className="img-container">
        <img alt={"image id:" + props.id} src={props.image} />
      </div>
      <span >
        𝘅
      </span>
    </div>
  );
}

export default ImageCard;
