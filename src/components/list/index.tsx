import { ITarefa } from "../../types/tarefa";
import Item from "./item";
// import Item from "./item";

interface Props {
    deleteTask: (id: string) => void,
    endTask: (id: string) => void,
    onlyComplete: boolean|undefined,
    tarefas: ITarefa[]
}

function Lista({ deleteTask, endTask, onlyComplete, tarefas }: Props) {
    return(
        <aside>
                {   
                onlyComplete===undefined ? tarefas.map((tarefa) => <Item tarefa={tarefa} deleteTask={deleteTask} endTask={endTask}/>) 
                : 
                tarefas.filter((tarefa: ITarefa) => tarefa.complete===onlyComplete ).map((tarefa) => 
                        <Item tarefa={tarefa} deleteTask={deleteTask} endTask={endTask}/>
                    )
                }
        </aside>
    )

}

export default Lista;