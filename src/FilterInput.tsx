import React, {useState} from 'react';

type filterInputProps = {
    callback: (name:string) => void
};

function FilterInput(props: filterInputProps) {

    // const [name, setName] = useState("");

    // const handleSubmit = (event: { preventDefault: () => void; }) => {
    //     event.preventDefault();
    //     return name;
    // }



    return (
        // <form onSubmit={handleSubmit}>
        <>
                <input
                    type="text"
                    onChange={(e) => props.callback(e.target.value)}

                />
            {/*<input type="submit" />*/}
        </>
        // </form>
    )
}

export default FilterInput;