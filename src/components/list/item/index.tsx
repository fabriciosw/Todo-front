import { ITarefa } from "../../../types/tarefa";
import Trash from "../../../images/Trash.png"
import finish from "../../../images/finish.jpg"

interface Props {
    tarefa: ITarefa, 
    deleteTask: (id: string) => void, 
    endTask: (id: string) => void
}

export default function Item({tarefa, deleteTask, endTask} : Props) {
    return (
        <div className={`tarefa ${tarefa.complete ? 'finalizado' : ''} `} key={tarefa.id}>
            <div className="dados">
                <p>{tarefa.title}</p>
                <span>{tarefa.description}</span>
            </div>
            <img src={Trash} alt="deletar" onClick={() => deleteTask(tarefa.id)}/>
            {!tarefa.complete && <img src={finish} alt="terminar" onClick={() => endTask(tarefa.id)}/>}
        </div>
    )
}