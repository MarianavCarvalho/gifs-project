import React from "react";
import Data from "./Data";

export default function Results(props){
     if (props.results){
return (
    <div className="Results">
      {props.results.data.map(function(data, index){
        return (
        <div key={index}>
          <Data data={data} />
        </div>)
      })}
    </div>
);
    } else {
        return null;
    }
    
}