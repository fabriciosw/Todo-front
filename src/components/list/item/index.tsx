import { ITarefa } from "../../../interfaces/tarefa";
import Trash from "../../../images/Trash.png"
import finish from "../../../images/finish.jpg"
import { Tarefas } from "../../../contexts/task";
import * as todoServices from '../../../services/todoServices'

interface Props {
    tarefa: ITarefa,
}

export default function Item({tarefa} : Props) {
    const { setTarefas } = Tarefas()

    return (
        <div className={`tarefa ${tarefa.complete ? 'finalizado' : ''} `} key={tarefa.id}>
            <div className="dados">
                <p>{tarefa.title}</p>
                <span>{tarefa.description}</span>
            </div>
            <div className="opcoes">
                <img src={Trash} alt="deletar" onClick={() => todoServices.deleteTask(tarefa.id, setTarefas)}/>
                {!tarefa.complete && <img src={finish} alt="terminar" onClick={() => todoServices.endTask(tarefa.id, setTarefas)}/>}
            </div>
        </div>
    )
}