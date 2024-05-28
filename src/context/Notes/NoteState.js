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
    //Add a note
    const addNote =(title, description, tag) =>{
        //to do api call
        console.log("adding a note");
        let note ={
            "_id": "fasldfd",
            "user": "664b0c717c76e23ba50969b8",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-05-23T17:48:14.709Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    //Delete a note
    const deleteNote =() =>{
        
    }

    //Edit a note
    const editNote =() =>{
        
    }
   

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote , editNote  }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
