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
            id={note.id}
            changeStatus={props.changeStatus}
          />
        );
      })}
    </div>
  );
};

export default NotesList;
