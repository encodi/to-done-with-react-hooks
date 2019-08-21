import React, { useState, useEffect } from "react";
import AddNote from "./AddNote";
import NotesList from "./NotesList";
import axios from "axios";

const NotesContainer = () => {
  const [notes, updateNotes] = useState([]);
  const fetchData = async () => {
    const result = await axios.get(`http://localhost:3000/notes`);
    updateNotes(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  async function changeStatus(id, checked) {
    const updatedNote = notes.find(entry => entry.id === id);
    const updatedBody = Object.assign(updatedNote, {
      status: checked ? "Done" : "Pending"
    });
    await axios.put(
      `http://localhost:3000/notes/${updatedNote.id}`,
      updatedBody
    );
    fetchData();
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
