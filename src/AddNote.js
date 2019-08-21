import React, { useState } from "react";
import axios from "axios";

const AddNote = props => {
  const [title, updateTitle] = useState("");
  const [description, updateDescription] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    const result = await axios.post("http://localhost:3000/notes", {
      title: title,
      description: description,
      status: "Pending"
    });
    props.handleAddNote(result.data);
    clearForm();
  };
  function clearForm() {
    updateTitle("");
    updateDescription("");
  }
  return (
    <div className="AddNote">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Title">
          Title:
          <input
            id="Title"
            type="text"
            value={title}
            placeholder="Title"
            onChange={e => updateTitle(e.target.value)}
          />
        </label>
        <label htmlFor="Description">
          Description:
          <input
            id="Description"
            type="text"
            value={description}
            onChange={e => updateDescription(e.target.value)}
            placeholder="Description"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddNote;
