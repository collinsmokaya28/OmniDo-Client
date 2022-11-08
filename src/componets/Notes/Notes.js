import React from 'react'

function Notes(props) {
    const updateTitle = (e) => {
        const updatedValue = e.target.value;
        const editMeId = props.note.id;
        props.onType(editMeId, "title", updatedValue);
      };
    
      const updateDescription = (e) => {
        const updatedValue = e.target.value;
        const editMeId = props.note.id;
        props.onType(editMeId, "description", updatedValue);
      };
    
      const clickDelete = () => {
        props.removeNote(props.note.id);
      };
    
      return (
        <li className="Notes">
          <input
            className="Notes__title"
            type="text"
            placeholder="Title"
            value={props.Notes.title}
            onChange={updateTitle}
          />
          <textarea
            className="Notes__description"
            placeholder="Description..."
            value={props.Notes.description}
            onChange={updateDescription}
          />
          <span className="Notes__delete" onClick={clickDelete}>
            X
          </span>
        </li>
      );
    };
    
    export default Notes;

