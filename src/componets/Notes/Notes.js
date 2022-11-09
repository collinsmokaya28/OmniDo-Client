import React, { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Notes() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keyword, setKeyword] = useState("");
  const [notes, setNotes] = useState([]);
  const add = (e) => {
    e.preventDefault();
    setNotes((notes) => [
      ...notes,
      {
        id: uuidv4(),
        title,
        description
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
    return notes.filter(({ title, description }) => {
      return title.includes(keyword) || description.includes(keyword);
    });
  }, [keyword, notes]);

  return (
    <div>
        <h1>Notes</h1>
        <form onSubmit={add}>
        <h1>add note</h1>
        <div>
          <label>title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      <form>
        <h1>search</h1>
        <div>
          <label>keyword</label>
          <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        </div>
      </form>
      {filteredNotes.map((note, index) => {
        return (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <button type="button" onClick={() => remove(index)}>
              remove
            </button>
          </div>
        );
      })}

    </div>
  )
}

export default Notes