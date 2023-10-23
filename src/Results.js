
import React from "react";
import "./Results.css";


export default function Results(props){
     if (props.results){
return (
    <div className="Results">
 <div class="row"> 
      {props.results.map(function(result, index){
        return (
    <div class="col-4" key={index}>
          
        <img src={result.images.fixed_height.url} alt="" className="img-responsive"/>
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