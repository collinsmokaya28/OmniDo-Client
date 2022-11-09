import React, { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './Notes.css';


function Notes() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [keyword, setKeyword] = useState("");
  const [notes, setNotes] = useState([]);
  const add = (e) => {
    e.preventDefault();
    setNotes((notes) => [
      ...notes,
      {
        id: uuidv4(),
        Title,
        Description
      }
    ]);
  };
  const remove = (index) => {
    setNotes((notes) => notes.filter((_, i) => i !== index));
  };
  const filteredNotes = useMemo(() => {
    if (!keyword) {
      return notes;
    }
    return notes.filter(({ Title, Description }) => {
      return Title.includes(keyword) || Description.includes(keyword);
    });
  }, [keyword, notes]);
  return (
    <div className="main-cont container">
      <div className="notesdetails" >
        <h1>Notes</h1>
        <form className="notesform" onSubmit={add}>
          <h1>Add note</h1>
          <div className="forminput">
            <label>Title</label>
            <input value={Title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="forminput">
            <label>Description</label>
            <input
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="addbtn" type="submit">Add</button>
        </form>
        <form className="searchform">
          <h1>Search</h1>
          <div>
            <label>Keyword</label>
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
          </div>
        </form>
        {filteredNotes.map((note, index) => {
          return (
            <div key={note.id}>
              <h2>{note.Title}</h2>
              <p>{note.Description}</p>
              <button type="button" onClick={() => remove(index)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  )
}
export default Notes