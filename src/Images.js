import React from "react";


export default function Images(props){
    console.log(props.images)
    return  (
        <div className="Images">
        <h3>{props.images.featured_gif.url}</h3>
       

        </div>
    )
}