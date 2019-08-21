import React, { useState } from "react";

const Note = props => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="Note">
      <h1>Title: {props.title}</h1>
      <p>Description: {props.description}</p>
      <p>Status: {props.status}</p>
      <form>
        Change Status{" "}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={e => {
            const { checked } = e.currentTarget;
            setIsChecked(checked);
            props.changeStatus(props.id, checked);
          }}
        />
      </form>
    </div>
  );
};

export default Note;
