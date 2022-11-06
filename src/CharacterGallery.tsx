import {Character} from "./model/CharacterModel";
import CharacterCard from "./CharacterCard";
import "./css/characterGallery.css"
import FilterInput from "./FilterInput";


export default function CharacterGallery(props: {
    characterList: Character[],
    callback: (name:string) => void,
}) {
    return (
        <>
        <FilterInput callback={props.callback}/>

            <div className={"character-gallery"}>
            {
                props.characterList.map(singleCharacter => <CharacterCard character={singleCharacter}
                                                                          key={singleCharacter.id}/>)
            }
        </div>
        </>
    );
}