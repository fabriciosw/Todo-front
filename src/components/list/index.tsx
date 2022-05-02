import { ITarefa } from "../../types/tarefa";
// import Item from "./item";

interface Props {
    deleteTask: (id: string) => void,
    endTask: (id: string) => void,
    onlyComplete: boolean,
    tarefass: ITarefa[]
}

function Lista({ deleteTask, endTask, onlyComplete, tarefass }: Props) {
    return(
        <aside>
                {
                    tarefass.map((tarefa: ITarefa) => 
                    {
                        return (
                            <div className="tarefa" key={tarefa.id}>
                                <div className="dados">
                                    <p>{tarefa.title}</p>
                                    <span>{tarefa.description}</span>
                                </div>
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
                    
                //     )
                // })
                }
        </aside>
    )
}

export default Lista;