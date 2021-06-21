import axios from "axios";
import React, {useState} from "react";
import './Dictionary.css';
import Results from "./Results";

export default function Dictionary() {
  let [keyword,setKeyword]=useState("");

  function displayResponse(response){
   console.log(response.data[0]);
  }

  //https://dictionaryapi.dev/
  
  function search (event){
    event.preventDefault();
    alert(`Explore the meaning of ${keyword}`);

    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayResponse);
  }
  
  function showKeyword (event){
    setKeyword(event.target.value);
  }

  return <div className="Dictionary">
   <form onSubmit={search}>
     <input type="search" onChange={showKeyword}/>
   </form>
   <Results/>
  </div>
}