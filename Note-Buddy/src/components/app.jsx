import React, { useState } from "react";
import Heading from "./heading";
import Footer from "./Footer";
import Note from "./note";
import Modal from "./Modal";

function App() {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handleAddNote(title, content) {
    const newNote = {
      title: title || "Untitled",
      content: content,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setShowModal(false);
  }

  return (
    <div>
      <Heading />
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
      <Footer />
      <button className="add-button" onClick={() => setShowModal(true)}>
        +
      </button>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleAddNote}
      />
    </div>
  );
}

export default App;
