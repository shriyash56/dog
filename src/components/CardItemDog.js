import "../css/CarditemDog.css"
import CustomImages from "./CustomImages";
//import DisplaySubBreed from './DisplaySubBreed'
import React, { useEffect, useState } from "react";

export default function CardItemDog({breeds}) {

    const [breedName, setBreedName] = useState("affenpinscher"); // Declare state breedName to store breedName which is input from user
    
  const handleBreeds = (e) => {
    setBreedName(e.target.value);
  };
    


    return (
        <>
        <div className="Gallery">  
          <div className="Select">       
            <select onChange={handleBreeds}>
                {Object.keys(breeds).map((breed)=>{
                    return(
                        <option value={breed}>{breed}</option>
                    )
                })}
            </select>  
            </div>
            <CustomImages key={breedName} breedName={breedName}/>
            {/* <DisplaySubBreed key={breedName} breedName={breedName} breeds={breeds}/> */}
        </div>
        </>
    )
}
