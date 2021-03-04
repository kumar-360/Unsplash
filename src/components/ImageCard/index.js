import React, {useState, useEffect } from "react";

const ImageCard = (props) => {
  let imageRef = React.createRef();
  const [span,setSpan]=useState(0);
  useEffect(() => {
    imageRef.current.addEventListener("load",()=>{
    const newSpan=Math.ceil(imageRef.current.clientHeight/10);
    setSpan(newSpan);
    });
  }, []);
  return (
      <div style={{gridRowEnd: `span ${span}`}}>
    <img
      ref={imageRef}
      src={props.image.urls.regular}
      alt={props.image.description}
    />
    </div>
  );
};

export default ImageCard;
