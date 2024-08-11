import React, { useState } from "react";

function Modal({ show, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!show) {
    return null;
  }

  function handleSubmit() {
    onSubmit(title, content);
    setTitle("");
    setContent("");
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Enter Note Details</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title here"
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your note content here"
        />
        <button onClick={handleSubmit}>Add Note</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
