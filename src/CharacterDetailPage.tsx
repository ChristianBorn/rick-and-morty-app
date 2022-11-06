import React from 'react';
import {Character} from "./model/CharacterModel";
import {Link, useParams } from 'react-router-dom';


type CharacterDetailProps = {
    characterList: Character[]
};

function CharacterDetailPage(props: CharacterDetailProps) {
    const id = useParams().id
    if(!id) {
        return <div>Character not found</div>
    }
    const characterToDisplay = props.characterList.find((element) => element.id === parseInt(id))



    if(characterToDisplay) {
        const splitOriginUrl = characterToDisplay.origin.url.split("/")
        const originUrlSegment = splitOriginUrl[splitOriginUrl.length-2]+"/"+splitOriginUrl[splitOriginUrl.length-1]

        return (
            <div className={"character-detail"}>
                <h2>{characterToDisplay.name}</h2>
                <p >Status: <strong>{characterToDisplay.status}</strong></p>
                <img alt={characterToDisplay.name} src={characterToDisplay.image}></img>
                <p>Species: <strong>{characterToDisplay.species}</strong></p>
                <p>Type: <strong>{characterToDisplay.type}</strong></p>
                <p>Gender: <strong>{characterToDisplay.gender}</strong></p>
                <p>Origin: <Link to={"../../"+originUrlSegment} replace>{characterToDisplay.origin.name}</Link></p>
                <p>Last known location: <strong>{characterToDisplay.location.name}, {characterToDisplay.location.url}</strong></p>
                <ul><strong>Seen in Episodes:</strong>
                    {characterToDisplay.episode.map((episode) => {
                        return <li>{episode}</li>
                    })}
                </ul>
                <p>Created: <strong>{characterToDisplay.created}</strong></p>
            </div>
        );
    }
    else {
        return <div>Character not found</div>
    }
}

export default CharacterDetailPage;