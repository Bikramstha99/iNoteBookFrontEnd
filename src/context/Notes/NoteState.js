import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host="http://localhost:5000";
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

   // Get all notes
const fetchAllNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, { // Corrected this line
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0YjBjNzE3Yzc2ZTIzYmE1MDk2OWI4In0sImlhdCI6MTcxNjQwMDY0OX0.gDQCDhcRCEU7sB6IDY-MrZXJhYNx1ltAJKLxNuA69c4"
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json)
  };


  //Add a note
  const addNote = async (title, description, tag) => {
    //to do api call
    const response = await fetch(`${host}{/api/notes/addnote`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0YjBjNzE3Yzc2ZTIzYmE1MDk2OWI4In0sImlhdCI6MTcxNjQwMDY0OX0.gDQCDhcRCEU7sB6IDY-MrZXJhYNx1ltAJKLxNuA69c4"
        },
        body: JSON.stringify({title, description, tag}),
      });
      const json=await response.json();


    console.log("adding a note");
    let note = {
      _id: "fasldfd",
      user: "664b0c717c76e23ba50969b8",
      title: title,
      description: description,
      tag: tag,
      date: "2024-05-23T17:48:14.709Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = async (id) => {

    //Delete API call
    const response = await fetch(`${host}{/api/notes/deletenote/${id}`,{
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0YjBjNzE3Yzc2ZTIzYmE1MDk2OWI4In0sImlhdCI6MTcxNjQwMDY0OX0.gDQCDhcRCEU7sB6IDY-MrZXJhYNx1ltAJKLxNuA69c4"
        },
        body: JSON.stringify(),
      });
      const json=await response.json();

    console.log("deleting the id");
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call
      const response = await fetch(`${host}{/api/notes/updatenote/${id}`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0YjBjNzE3Yzc2ZTIzYmE1MDk2OWI4In0sImlhdCI6MTcxNjQwMDY0OX0.gDQCDhcRCEU7sB6IDY-MrZXJhYNx1ltAJKLxNuA69c4"
        },
        body: JSON.stringify({title, description, tag}),
      });
      const json=await response.json();
    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, fetchAllNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
