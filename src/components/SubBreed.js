import axios from "axios";
import React, { useState, useEffect } from "react";


export default function SubBreed({breedType,subBreed}) {

    const [subBreedImage, setSubBreedImage] = useState([]); // Used to store random images from each subbreed
    const subbreed = [];
    const [Breed,setBreed] = useState("");


    useEffect(() => {
        subBreed.map((element) => {
          axios
            .get(`https://dog.ceo/api/breed/${breedType}/${element}/images/random`)
            .then((response) => {
              subbreed.push(response.data.message);
            })
            .catch((error) => {
              console.log(error);
            });
        });
        setSubBreedImage(subbreed);

    }, []);
    const handleSubBreed = (e) =>{
        setBreed(e.target.value)
    }
console.log(subBreed);
    return (
        <>
            <select onChange={handleSubBreed}>
                {subBreed.map((element,index) =>{
                    <option value={element}>{element}</option>
                }
                )}
            </select>
            <div className="card">
                <img src={Breed} />
                <div className="container"> 
                </div>
            </div> 
        </>
    )
}
