import { ITarefa } from "../../../types/tarefa";
import Trash from "../../../images/Trash.png"

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
            <img src={Trash} alt="deletar" onClick={() => deleteTask(tarefa.id)}></img>
            {!tarefa.complete && <button onClick={() => endTask(tarefa.id)}>terminar tarefa</button>}
        </div>
    )
}