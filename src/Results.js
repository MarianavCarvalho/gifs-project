
import React from "react";


export default function Results(props){
  console.log(props.results)
     if (props.results){
return (
    <div className="Results">
 <div class="row"> 
      {props.results.map(function(result, index){
        return (
    <div class="col-2" key={index}>
          
        <img src={result.images.fixed_height.url} alt=""/>
        </div>
       
        )
      })}
    </div>
    </div>
)
    } else {
        return null;
    }
    
}