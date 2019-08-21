import React, { useState, useEffect } from "react";
import AddNote from "./AddNote";
import NotesList from "./NotesList";
import axios from "axios";

const NotesContainer = () => {
  const [notes, updateNotes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3000/notes`);
      updateNotes(result.data);
    };
    fetchData();
  }, []);
  function changeStatus(id, checked) {
    console.log("|---------------------------------------------------------->");
    console.log(id, checked);
    console.log("<----------------------------------------------------------|");
  }
  function handleAddNote(data) {
    const newNotes = [...notes, data];
    updateNotes(newNotes);
  }
  return (
    <div className="notesContainer">
      <AddNote handleAddNote={handleAddNote} />
      <NotesList notes={notes} changeStatus={changeStatus} />
    </div>
  );
};

export default NotesContainer;
