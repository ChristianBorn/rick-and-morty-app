import React, {useEffect, useState} from 'react';
import './css/App.css';
import {Character} from "./CharacterModel";
import CharacterGallery from "./CharacterGallery";
import axios from "axios";
import {HashRouter, Link, Route, Routes} from "react-router-dom"
import CharacterDetailPage from './CharacterDetailPage';
import LocationDetailPage from './LocationDetailPage';


function App() {
    const [characterList, setCharacterList] = useState([])
    const [locationList, setLocationList] = useState([])

    const getCharacters = () => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => {
                return response.data
            })
            .catch((error) => console.log("URL not available: " + error))
            .then((data) => {
                setCharacterList(data.results)
    })
    }

    const getLocations = () => {
        axios.get("https://rickandmortyapi.com/api/location")
            .then(response => {
                return response.data
            })
            .catch((error) => console.log("URL is not available "+error))
            .then(data => setLocationList(data.results))
    }

    useEffect(() => {
        getCharacters();
        getLocations();
            }, [])


    const getFilterName = (name: string) => {
        if(name.trim()) {
            setCharacterList(() => characterList.filter((character: Character) => character.name === name))
        }
        else {
            getCharacters()
        }
        console.log(name.trim())
    }

    return (
        <HashRouter basename="/">
        <div className="App">
      <header className="App-header">
        <Link to={"/"}>Rick and Morty Characters</Link>
      </header>
        <main>

                <Routes>
                    <Route path="/" 
                           element={<CharacterGallery characterList={characterList} callback={getFilterName}/>}/>
                        <Route path="/character/:id" 
                               element={<CharacterDetailPage characterList={characterList}/>}/>
                    <Route path="/location/:id"
                           element={<LocationDetailPage />}/>
                </Routes>

        </main>
    </div>
        </HashRouter>
  );
}

export default App;
