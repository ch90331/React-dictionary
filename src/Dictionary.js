import axios from "axios";
import React, {useState} from "react";
import './Dictionary.css';
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword,setKeyword]=useState("");
  let [results,setResults]=useState(null);
  let [photos,setPhotos]=useState(null);

  function displayDictionaryResponse(response){
   console.log(response.data[0]);
   setResults(response.data[0]);
  }

  function displayPexelsResponse(response){
    console.log(response);
    setPhotos(response.data.photos);
  }

  //https://dictionaryapi.dev/
  
  function search (event){
    event.preventDefault();

    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayDictionaryResponse);

    let pexelsApiKey=`563492ad6f917000010000011839fd760f5b42259aa6328c956bf816`;
    let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = {Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers }).then(displayPexelsResponse);
  }
  
  function showKeyword (event){
    setKeyword(event.target.value);
  }

  return <div className="Dictionary">
   <form onSubmit={search}>
     <input type="search" onChange={showKeyword}/>
   </form>
   <Results results={results}/>
   <Photos photos={photos} />
  </div>
}