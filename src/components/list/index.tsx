import { Tarefas } from "../../contexts/task";
import { ITarefa } from "../../interfaces/tarefa";
import Item from "./item";

interface Props {
    taskStatus: boolean|undefined
}

function Lista({ taskStatus }: Props) {
    const { tarefas } = Tarefas()
    return(
        <aside>
                {   
                taskStatus === undefined ? tarefas.map((tarefa) => <Item tarefa={tarefa} key={ tarefa.id }/>) 
                : 
                tarefas.filter((tarefa: ITarefa) => tarefa.complete===taskStatus ).map((tarefa) => 
                        <Item tarefa={tarefa} key={ tarefa.id }/>
                    )
                }
        </aside>
    )

}

export default Lista;