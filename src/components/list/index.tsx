import { ITarefa } from "../../interfaces/tarefa";
import Item from "./item";

interface Props {
    deleteTask: (id: string, setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>) => void,
    endTask: (id: string, setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>) => void,
    taskStatus: boolean|undefined,
    tarefas: ITarefa[],
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Lista({ deleteTask, endTask, taskStatus, tarefas, setTarefas }: Props) {
    return(
        <aside>
                {   
                taskStatus===undefined ? tarefas.map((tarefa) => <Item tarefa={tarefa} deleteTask={deleteTask} endTask={endTask} setTarefas={setTarefas}/>) 
                : 
                tarefas.filter((tarefa: ITarefa) => tarefa.complete===taskStatus ).map((tarefa) => 
                        <Item tarefa={tarefa} deleteTask={deleteTask} endTask={endTask} setTarefas={setTarefas}/>
                    )
                }
        </aside>
    )

}

export default Lista;