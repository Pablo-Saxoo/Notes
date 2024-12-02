import React, { useState } from "react";

export default function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });



    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevVal => {
            return {
                ...prevVal,
                [name]: value
            };
        });
    }

    function handleClick(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
        
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows={4} value={note.content}></textarea>
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}