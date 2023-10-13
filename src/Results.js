import React from "react";

export default function Results(props){
  
    if (props.results){
return (
    <div className="Results">
      {props.results.data.map(function(gif, index){
        return <div key={index}>
            {gif.featured_gif.embed_url}
        </div>
      })}
    </div>
)
    } else {
        return null;
    }
    
}