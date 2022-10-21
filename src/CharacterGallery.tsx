import {Character} from "./CharacterModel";
import CharacterCard from "./CharacterCard";
import "./css/characterGallery.css"
import FilterInput from "./FilterInput";
import {useState} from "react";

export default function CharacterGallery(props: {
    characterList: Character[]
    callback: (nameToFilter: string) => void
}) {

    // const [filterName, setFilterName] = useState("")

    // const getFilterName = (filterName: string) => {
    //     // setFilterName(filterName);
    //     // console.log(filterName)
    //     return filterName;
    // }



    return (
        <>
        <FilterInput callback={props.callback}/>
        <div className={"character-gallery"}>

            {
                props.characterList.map(singleCharacter => <CharacterCard character={singleCharacter}/>)
            }
        </div>
        </>
    );
}