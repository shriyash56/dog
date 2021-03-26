import React from "react";
import Header from "./Header.js";
import CardItem from "./CardItemDog"
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {

  const [breeds, setBreeds] = useState([]); //declare state breeds to store list of breeds

  //ComponentDidMount: after mounting component useEffect is called to fetch api
  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      setBreeds(response.data.message); //change state using setBreeds
    });
  }, []);



  return (
    <div className="App">
        <Header/>
        <CardItem breeds={breeds}/>
    </div>
  );
}
