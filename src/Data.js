import React from "react";


export default function Data(props){
    console.log(props.data)
    return  (
        <div className="Data">
        <h3>{props.data.featured_gif.url}</h3>
       

        </div>
    )
}