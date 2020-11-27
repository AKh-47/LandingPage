import React, { useRef } from "react";

export default function AddNote({ addNoteInput, addNoteCheckbox }) {
  const addNote = useRef();

  return (
    <div ref={addNote} className="add-note">
      <input
        style={{ display: "none" }}
        className="add-note__checkbox"
        type="checkbox"
        id="add-note"
        ref={addNoteCheckbox}
      />

      <div class="add-note__label">
        <label htmlFor="add-note">
          <div class="add-note__text">
            <span>+</span> Add note
          </div>
        </label>
        <input
          //   value={nameInput}
          //   onChange={handleChange}
          ref={addNoteInput}
          className="add-note__input"
          type="text"
        />
        <div className="add-note__bottom">
          <button
            // onClick={() => {
            //   events.addNoteHandler(nameInput);
            //   handleReset();
            //   addNoteCheckbox.current.checked = false;
            // }}
            className="add-note__button"
          >
            Add Note
          </button>
          <label
            // onClick={() => handleChange}
            htmlFor="add-note"
            className="add-note__cancel-button"
          >
            <i class="fas fa-times-circle"></i>
          </label>
        </div>
      </div>
    </div>
  );
}
