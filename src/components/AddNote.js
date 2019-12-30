import React, { useState, useContext } from "react";
import NotesContext from "../context/notes-context";

export const AddNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { dispatch } = useContext(NotesContext);

  const addNote = e => {
    e.preventDefault();

    dispatch({ type: "ADD_NOTE", title, body });
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={addNote}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <input
          placeholder="Body"
          onChange={e => setBody(e.target.value)}
          value={body}
        />
        <button>Add Note</button>
      </form>
    </div>
  );
};
