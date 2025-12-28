import Note from "./Note";

export default function NoteList({ notes, onDelete }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
