import React, { useState } from "react";
import "./Gifs.css";
import Results from "./Results";
import axios from "axios";

export default function Gifs(){
 let[word, setWord] = useState(null);
 let [results, setResults] = useState(null);

    function handleResponse(response){
        setResults(response.data)
    }

    // https://developers.giphy.com/explorer/
    function search(){
        let apiGifsKey = "4FcQMZlVD6y1yqugPhiadllXoAvePUgE"
let apiUrl = `https://api.giphy.com/v1/channels/search?api_key=${apiGifsKey}&q=${word}&limit=25&offset=0`;
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
        <section>
            <h1>What GIF do you want to look up?</h1>
            <form onSubmit={handleSubmit}>
    <input type="search" onChange={handleWordChange}/>
</form>
            <div className="hint">
                suggested words: sunset, snow, plant, yoga...
            </div>
            </section>

      <Results results={results}/>  

    </div>)
}