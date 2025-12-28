import Note from "./Note";

export default function NoteList({ notes, onDelete }) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {notes.map((note, index) => (
        <Note
          key={index}
          note={note}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}
