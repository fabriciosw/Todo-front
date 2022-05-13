import { ITarefa } from "../../../interfaces/tarefa";
import Trash from "../../../statics/images/Trash.png"
import finish from "../../../statics/images/finish.jpg"
import { Tarefa } from "../../../contexts/task";
import * as todoServices from '../../../services/todoServices'
import { useContext } from "react";

interface Props {
    tarefa: ITarefa,
}

export default function Item({tarefa} : Props) {
    const { setTarefas } = useContext(Tarefa)

    return (
        <div className={`tarefa ${tarefa.complete ? 'finalizado' : ''} `} key={tarefa.id}>
            <div className="dados">
                <p>{tarefa.title}</p>
                <span>{tarefa.description}</span>
            </div>
            <div className="opcoes">
                {!tarefa.complete && <img src={finish} alt="terminar" onClick={() => todoServices.endTask(tarefa.id, setTarefas)} />}
                <img src={Trash} alt="deletar" onClick={() => todoServices.deleteTask(tarefa.id, setTarefas)}/>
            </div>
        </div>
    )
}