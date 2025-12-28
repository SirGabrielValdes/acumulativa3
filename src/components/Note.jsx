function Note({note, onDelete}) {
    return (
        <div className="">
            <button onClick={onDelete}></button>
            {note.title && <h3>{note.title}</h3>}
            <p>{note.description}</p>
        </div>
    )
}

export default Note()