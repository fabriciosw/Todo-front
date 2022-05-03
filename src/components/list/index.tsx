import { ITarefa } from "../../types/tarefa";
import Item from "./item";

interface Props {
    deleteTask: (id: string, setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>) => void,
    endTask: (id: string) => void,
    onlyComplete: boolean|undefined,
    tarefas: ITarefa[],
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Lista({ deleteTask, endTask, onlyComplete, tarefas, setTarefas }: Props) {
    return(
        <aside>
                {   
                onlyComplete===undefined ? tarefas.map((tarefa) => <Item tarefa={tarefa} deleteTask={deleteTask} endTask={endTask} setTarefas={setTarefas}/>) 
                : 
                tarefas.filter((tarefa: ITarefa) => tarefa.complete===onlyComplete ).map((tarefa) => 
                        <Item tarefa={tarefa} deleteTask={deleteTask} endTask={endTask} setTarefas={setTarefas}/>
                    )
                }
        </aside>
    )

}

export default Lista;