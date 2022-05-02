import { ITarefa } from "../../../types/tarefa";

interface Props {
    tarefa: ITarefa, 
    deleteTask: (id: string) => void, 
    endTask: (id: string) => void
}

export default function Item({tarefa, deleteTask, endTask} : Props) {
    return (
        <div className="tarefa" key={tarefa.id}>
            <div className="dados">
                <p>{tarefa.title}</p>
                <span>{tarefa.description}</span>
            </div>
            <button onClick={() => deleteTask(tarefa.id)}>deletar</button>
            {!tarefa.complete && <button onClick={() => endTask(tarefa.id)}>terminar tarefa</button>}
        </div>
    )
}