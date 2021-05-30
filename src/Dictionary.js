import React, {useState} from "react";
import './Dictionary.css';

export default function Dictionary() {
  let [keyword,setKeyword]=useState("");

  function search (event){
    event.preventDefault();
    alert(`Explore the meaning of ${keyword}`);
  }

  function showKeyword (event){
    setKeyword(event.target.value);
  }

  return <div className="Dictionary">
   <form onSubmit={search}>
     <input type="search" onChange={showKeyword}/>
   </form>
  </div>
}