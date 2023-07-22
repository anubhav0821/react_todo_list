import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [addNotes, setAddNotes] = useState([]);

  function addNote(note) {
    setAddNotes((pre) => {
      return [...pre, note];
    });
  }

  function deleteNote(id) {
    console.log(id);
    setAddNotes((pre) => {
      return pre.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {addNotes.map((Notes, index) => (
        <Note
          key={index}
          id={index}
          title={Notes.title}
          content={Notes.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
