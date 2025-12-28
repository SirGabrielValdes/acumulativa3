import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

export default function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  const deleteNote = (index) => {
    setNotes((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#666] p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#111] mb-4">
          Post It Simulator!
        </h1>

        <NoteForm onAdd={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} />
      </div>
    </div>
  );
}
