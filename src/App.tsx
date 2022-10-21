import React, {useEffect, useState} from 'react';
import './css/App.css';
import {Character} from "./CharacterModel";
import CharacterGallery from "./CharacterGallery";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


function App() {
    const [characterList, setCharacterList] = useState([])
    const [filterName, setFilterName] = useState("")


    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => {
                return response.data
            })
            .catch((error) => console.log("URL not available: " + error))
            .then((data) => {
                setCharacterList(data.results)
            })
    }, []);

    const getFilterName = (nameToFilter:string) => {
        setFilterName(nameToFilter);
        console.log(nameToFilter)
        // return nameToFilter;
    }

    if(filterName) {
        setCharacterList(characterList.filter((character: Character) => character.name === filterName))
    }

    //Try: render FilterInput here already
    return (
    <div className="App">
      <header className="App-header">
        Rick and Morty Characters
      </header>
        <main>
            <CharacterGallery characterList={characterList} callback={getFilterName}/>
        </main>
    </div>
  );
}

export default App;
