import { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [important, setImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    onAdd({ title, description, important });
    setTitle("");
    setDescription("");
    setImportant(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 items-center mb-8"
    >
      <input
        className="px-3 py-2 rounded w-40"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="px-3 py-2 rounded flex-1"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label className="flex items-center gap-2 text-white">
        <input
          type="checkbox"
          checked={important}
          onChange={(e) => setImportant(e.target.checked)}
        />
        Importante!
      </label>

      <button
        type="submit"
        className="bg-[#111] text-white px-6 py-2 rounded"
      >
        AGREGAR
      </button>
    </form>
  );
}
