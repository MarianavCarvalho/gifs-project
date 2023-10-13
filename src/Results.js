import React from "react";

export default function Results(props){
  
    if (props.results){
return (
    <div className="Results">
      {props.results.data.map(function(gif, index){
        return {gif.featured_gif.embed_url}
      })}
    </div>
)
    } else {
        return null;
    }
    
}