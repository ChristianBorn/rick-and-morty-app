import React, {useEffect, useState} from 'react';
import './css/App.css';
import {Character} from "./model/CharacterModel";
import CharacterGallery from "./CharacterGallery";
import axios from "axios";
import {HashRouter, Link, Route, Routes} from "react-router-dom"
import CharacterDetailPage from './CharacterDetailPage';
import LocationDetailPage from './LocationDetailPage';
import {PageInfoModel} from "./model/PageInfoModel";
import {LocationModel} from "./model/LocationModel";


function App() {
    const [characterList, setCharacterList] = useState<Character[]>([])
    const [locationList, setLocationList] = useState<LocationModel[]>([])
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [pageInfo, setPageInfo] = useState<PageInfoModel>()
    console.log(pageNumber)
    //Get Info and Characterlist
    const getCharacters = () => {
        axios.get("/api/characters/?page=" + pageNumber)
            .then(response => {
                return response.data
            })
            .catch((error) => console.log("URL not available: " + error))
            .then((data) => {
                setCharacterList(data.results)
                setPageInfo(data.info)
    })
    }
    const maxPageNumber  = pageInfo && pageInfo.pages

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
            }, [pageNumber])


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
            <div className={"pagination"}>
            {pageNumber > 1 &&
            <button onClick={() => setPageNumber(pageNumber-1)}>Previous page ({pageNumber-1})</button>}
                <p>Current page: {pageNumber}</p>
            {maxPageNumber &&
            pageNumber < maxPageNumber && <button onClick={() => setPageNumber(pageNumber+1)}>Next page ({pageNumber+1})</button>}
            </div>
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
