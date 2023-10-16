import React from "react";
import Images from "./Images";

export default function Results(props){
     if (props.results){
return (
    <div className="Results">
      {props.results.map(function(images, index){
        return (
        <div key={index}>
          <Images images={images} />
        </div>)
      })}
    </div>
);
    } else {
        return null;
    }
    
}