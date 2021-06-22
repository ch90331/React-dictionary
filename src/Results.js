import React from "react";

export default function Results(props){
    console.log(props.results);
    return <div className="Results">
    {props.results.word}
    </div>;
    }