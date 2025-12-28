export default function Note({ note, onDelete }) {
  return (
    <div
      className={`
        relative p-4 min-h-[180px]
        shadow-lg rounded
        rotate-[-2deg]
        ${note.important ? "bg-[#EC7063]" : "bg-[#FFFFCC]"}
      `}
    >
      <button
        onClick={onDelete}
        className="absolute top-1 right-2 font-bold"
      >
        x
      </button>

      {note.title && (
        <h3 className="font-bold mb-2">{note.title}</h3>
      )}
      <p className="text-sm">{note.description}</p>
    </div>
  );
}
