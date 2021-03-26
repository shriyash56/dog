import React from 'react'
import SubBreed from "./SubBreed"

export default function DisplaySubBreed({breedName, breeds}) {

    return (
        <>
            
                {
                Object.entries(breeds)
                    .filter((breed,index) => breed[0].includes(breedName))
                    .map((element,index) => (    
                       <SubBreed key={index} breedType={element[0]} subBreed={element[1]}/>

                    ))
                }
                
            
        </>
    )
}
