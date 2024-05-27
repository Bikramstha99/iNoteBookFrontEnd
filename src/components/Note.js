import React from "react";
import { useContext } from "react";
import NoteContext from "../context/Notes/noteContext";
import NoteItem from "./NoteItem";

const Note = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem note={note} />;
        })}
      </div>
    </div>
  );
};

export default Note;
