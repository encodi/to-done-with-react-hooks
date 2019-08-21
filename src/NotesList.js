import React from "react";
import Note from "./Note";

const NotesList = props => {
  return (
    <div className="NotesList">
      {props.notes.map(note => {
        return (
          <Note
            key={note.id}
            title={note.title}
            description={note.description}
            status={note.status}
          />
        );
      })}
    </div>
  );
};

export default NotesList;
