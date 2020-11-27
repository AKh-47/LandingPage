import React, { useRef, useState } from "react";
import AddNote from "./AddNote";
import "./Notes.scss";

import useKeyClick from "../../Hooks/useKeyClick";

import { Link } from "react-router-dom";

export default function Notes() {
  const addNoteInput = useRef();
  const addNoteCheckbox = useRef();

  useKeyClick({
    enter: () => {
      addNoteCheckbox.current.checked = true;
      setTimeout(() => addNoteInput.current.focus(), 300);
    },
    backslash: () => {
      addNoteInput.current.value = "";
      addNoteCheckbox.current.checked = false;
      addNoteInput.current.blur();
    },
    h: "/",
    p: "/projects",
  });

  return (
    <div className="notes">
      <div className="notes__top">
        <AddNote
          addNoteInput={addNoteInput}
          addNoteCheckbox={addNoteCheckbox}
        />
        <Link to="/">
          <div className="notes__home">
            <i class="fas fa-home"></i>
          </div>
        </Link>
      </div>
      <div className="notes__mid"></div>
      <div className="notes__bottom"></div>
    </div>
  );
}
