import { useState } from "react";

function Formulario({onAdd}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [important, setImportant] = useState(false);
    const [error, setError] = useState("");
    
    const handleSubmit = (e) => {

        if (!description.trim()) {
            setError('La descripcion es obligatoria')
            return;
        }

        onAdd({ title, description, important});
        setTitle("");
        setDescription("");
        setImportant(false);
        setError("");
    }
    return (
    <form onSubmit={handleSubmit} className="">
        <h1 className="text-[#111] text-[30px] font-bold">PostIT Simulator!</h1>
        <div className="flex flex-row gap-2">
            <input type="text" placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className="" placeholder="Descripcion" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <input type="checkbox" checked={important} onChange={(e) => setImportant(e.target.value)} className="rounded-md size-5"/>
            <p className="text-white">IMPORTANTE!</p>
            {error && <p className="">{error}</p>}
            <button className="bg-[#111] text-white w-[180px] h-[40px]">Agregar</button>
        </div>
    </form>
    )
}

export default Formulario;