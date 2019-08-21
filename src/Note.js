import React from "react";

const Note = props => {
  return (
    <div className="Note">
      <h1>Title: {props.title}</h1>
      <p>Description: {props.description}</p>
      <p>Status: {props.status}</p>
    </div>
  );
};

export default Note;
