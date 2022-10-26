import React, {ChangeEvent, FormEvent, useState} from 'react';

type filterInputProps = {
    callback: (name:string) => void
};

function FilterInput(props: filterInputProps) {

    const [name, setName] = useState("");


    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.callback(name)
    }


    return (

        <form onSubmit={handleSubmit}>
                <input value={name}
                    type="text"
                    onChange={onTextChange}

                />

        </form>

    )
}

export default FilterInput;