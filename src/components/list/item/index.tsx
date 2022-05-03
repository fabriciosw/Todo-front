import { ITarefa } from "../../../types/tarefa";
import Trash from "../../../images/Trash.png"
import finish from "../../../images/finish.jpg"

interface Props {
    tarefa: ITarefa, 
    deleteTask: (id: string, setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>) => void, 
    endTask: (id: string,setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>) => void,
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Item({tarefa, deleteTask, endTask, setTarefas} : Props) {
    return (
        <div className={`tarefa ${tarefa.complete ? 'finalizado' : ''} `} key={tarefa.id}>
            <div className="dados">
                <p>{tarefa.title}</p>
                <span>{tarefa.description}</span>
            </div>
            <img src={Trash} alt="deletar" onClick={() => deleteTask(tarefa.id, setTarefas)}/>
            {!tarefa.complete && <img src={finish} alt="terminar" onClick={() => endTask(tarefa.id, setTarefas)}/>}
        </div>
    )
}