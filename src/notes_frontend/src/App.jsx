import React, { useEffect, useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { notes_backend } from "../../declarations/notes_backend"

function App() {

  const [notes, setNote] = useState([]);

  function makeNote(note) {
    setNote(prevVal => {
      notes_backend.addItem(note.title, note.content);
      return ([note, ...prevVal])
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const localNote = await notes_backend.showNotes();
    setNote(localNote);
  }

  function deleteItem(id) {
    notes_backend.removeItem(id);
    setNote(prevVal => {
      return prevVal.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={makeNote} />
      {notes.map((noteItem, index) => {
        return (<Note key={index} id={index} onDelete={deleteItem} title={noteItem.title} content={noteItem.content} />);
      })}
      <Footer />
    </div>
  );
}

export default App;