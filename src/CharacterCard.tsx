import { Link } from "react-router-dom";
import {Character} from "./CharacterModel";
import "./css/characterCard.css"

export default function CharacterCard(props: { character: Character }) {
    let classNameStatus: string = "";
    let originLink;
    if (props.character.status === "Alive") {
        classNameStatus = "green"
    } else if (props.character.status === "Dead") {
        classNameStatus = "red"
    } else if (props.character.status === "Unknown") {
        classNameStatus = "black"
    }

    if (props.character.origin.url) {
        originLink = <a href={props.character.origin.url}>{props.character.origin.name}</a>
    } else {
        originLink = <span>{props.character.origin.name}</span>;
    }


    return (
        <div className={"character-card"}>
            <h2>{props.character.name}</h2>
            <img src={props.character.image}></img>
            <p>Origin: <strong>{originLink}</strong></p>
            <p className={classNameStatus}>Status: <strong>{props.character.status}</strong></p>
            <Link to={"/character/"+props.character.id}>Details</Link>
        </div>
    );
}