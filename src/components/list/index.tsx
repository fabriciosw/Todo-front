import { ITarefa } from "../../types/tarefa";
// import Item from "./item";

interface Props {
    tarefas: ITarefa[],
    deleteTask: (id: string) => void,
    endTask: (id: string) => void,
    onlyComplete: boolean,
    tarefass: any
}

function Lista({ tarefas, deleteTask, endTask, onlyComplete, tarefass }: Props) {
    console.log(tarefass);
    return(
        <aside>
                {
                    tarefass.map((tarefa: {title: string, id: string, complete: boolean}) => 
                    {
                        return (
                            <div className="tarefa" key={tarefa.id}>
                                <p>{tarefa.title}</p>
                                <button onClick={() => deleteTask(tarefa.id)}>deletar</button>
                                {!tarefa.complete && <button onClick={() => endTask(tarefa.id)}>terminar tarefa</button>}
                            </div>
                        )
                    })
                    
                // tarefas.filter((tarefa) => tarefa.done===onlyComplete ).map((item, index) => {
                //     return(
                //     // <Item
                //     //     {...item}
                //     // />
                    
                //         <div className="tarefa" key={index}>
                //             <h3>{item.tarefa}</h3>
                //             <button onClick={() => deleteTask(item.id)}>deletar</button>
                //             {!item.done && <button onClick={() => endTask(item.id)}>terminar tarefa</button>}
                //         </div>
                    
                // )})
                }
        </aside>
    )
}

export default Lista;