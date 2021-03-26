
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/CardImage.css";


export default function CustomImages({breedName}) {

    const [image, setImage] = useState("");

    
  useEffect(() => {
    axios
      .get(
        `https://dog.ceo/api/breed/${breedName}/images/random`
      )
      .then((response) => {
        //console.log(response.data.message);
        setImage(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [breedName]);

    return (
        <>
            <div className="card">
                <img src={image} />
                <div className="container"> 
                 <h3 >{breedName}</h3>
                </div>
            </div>   
        </>
    )
}
