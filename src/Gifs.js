import React from "react";
import "./Gifs.css";

export default function Gifs(){

    function handleSubmit(event){
event.preventDefault();
    }

    return(
    <div>
<form onSubmit={handleSubmit}>
    <input type="search"></input>
</form>
    </div>)
}