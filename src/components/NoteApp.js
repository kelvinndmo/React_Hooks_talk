import React, { useEffect, useState, useReducer } from "react";
import Note from "./Note";
import NotesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import { AddNote } from "./AddNote";
import NotesContext from "../context/notes-context";

const NoteApp = () => {
  //   const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(NotesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      dispatch({ type: "POPULATE_NOTES", notes: notes });
      //   setNotes(localStorageNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <AddNote />
      <NoteList />
    </NotesContext.Provider>
  );
};

export default NoteApp;
