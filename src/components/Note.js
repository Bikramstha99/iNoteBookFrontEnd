import React from "react";
import { useContext } from "react";
import NoteContext from "../context/Notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Note = () => {
  const context = useContext(NoteContext);
  const { notes ,addNote } = context;
  return (
    <>
    <AddNote />
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Note;
