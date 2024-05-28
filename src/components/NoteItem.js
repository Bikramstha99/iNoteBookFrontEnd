import React from "react";
import { useContext ,useState} from "react";
import NoteContext from "../context/Notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note } = props;

  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <button className="pointer" onClick={() => deleteNote(note._id)}>Delete</button>
          <button className="pointer">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
