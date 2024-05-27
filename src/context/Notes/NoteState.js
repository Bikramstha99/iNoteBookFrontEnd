import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "664f815ab2c89a33f33615ad",
            "user": "664b0c717c76e23ba50969b8",
            "title": "My title 2",
            "description": "Bikram",
            "tag": "personal",
            "date": "2024-05-23T17:48:10.151Z",
            "__v": 0
        },
        {
            "_id": "664f815eb2c89a33f33615af",
            "user": "664b0c717c76e23ba50969b8",
            "title": "My title 3",
            "description": "Bikram",
            "tag": "personal",
            "date": "2024-05-23T17:48:14.709Z",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(initialNotes);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
