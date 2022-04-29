import { useEffect } from "react";
import { ITarefa } from "../../types/tarefa";
// import Item from "./item";

interface Props {
    tarefas: ITarefa[],
    deleteTask: (id: string) => void,
    endTask: (id: string) => void,
    onlyComplete: boolean
}

function Lista({ tarefas, deleteTask, endTask, onlyComplete }: Props) {
    useEffect( () => {
        var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://trainees-2022-todo-api-week-3.herokuapp.com/todos/',
      headers: { }
    };
    
    axios(config)
    .then(function (response: { data: any; }) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error: any) {
      console.log(error);
    });
    },[])

    return(
        <aside>
                {
                tarefas.filter((tarefa) => tarefa.done===onlyComplete ).map((item, index) => {
                    return(
                    // <Item
                    //     {...item}
                    // />
                    
                        <div className="tarefa" key={index}>
                            <h3>{item.tarefa}</h3>
                            <button onClick={() => deleteTask(item.id)}>deletar</button>
                            {!item.done && <button onClick={() => endTask(item.id)}>terminar tarefa</button>}
                        </div>
                    
                )})}
        </aside>
    )
}

export default Lista;