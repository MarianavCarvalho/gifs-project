import React, { useState } from "react";
import "./Gifs.css";
import axios from "axios";

export default function Gifs(){
 let[word, setWord] = useState(null);

    function handleResponse(response){
        console.log(response.data)
    }

    function search(){
        let apiGifsKey = "4FcQMZlVD6y1yqugPhiadllXoAvePUgE"
let apiUrl = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiGifsKey}&q=giphy&limit=25&offset=0`;
axios.get(apiUrl).then(handleResponse);
    }
    
     function handleSubmit(event){
event.preventDefault();
search()
    }

     function handleWordChange(event){
setWord(event.target.value);
 }

return(
    <div className="Gifs">
<form onSubmit={handleSubmit}>
    <input type="search" onChange={handleWordChange}/>
</form>
    </div>)
}