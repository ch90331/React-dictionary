import React from "react";

export default function Photos(props){
    console.log(props.photos);
    if (props.photos){
        return (
            <div className="Photos">
              {props.photos.map(function(photo,index){
                  return <img src={photo.src.tiny} key={index} />
              })}
            </div>
        )
    } else {
        return null;
    }
    
}