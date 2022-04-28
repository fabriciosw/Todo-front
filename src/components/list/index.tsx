import { ITarefa } from "../../types/tarefa";
// import Item from "./item";

interface Props {
    tarefas: ITarefa[],
    deleteTask: (id: string) => void,
    endTask: (id: string) => void
}

function Lista({ tarefas, deleteTask, endTask }: Props) {
    return(
        <aside>
                {tarefas.map((item, index) => {
                    return(
                    // <Item
                    //     {...item}
                    // />
                    
                        <div className={`tarefa ${item.done ? 'finalizado' : ''}`} key={index}>
                            <h3>{item.tarefa}</h3>
                            <button onClick={() => deleteTask(item.id)}>deletar</button>
                            <button onClick={() => endTask(item.id)}>terminar tarefa</button>
                        </div>
                    
                )})}
        </aside>
    )
}

export default Lista;