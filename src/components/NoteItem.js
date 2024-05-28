import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <button className="pointer">Delete</button>
          <button className="pointer">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
