import React, { useState } from "react";
import axios from "axios";
import { ITarefa } from "../../types/tarefa";

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>,
    getAll: (setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>) => void,
    tarefas: ITarefa[]
}

function Formulario ({getAll, tarefas, setTarefas}: Props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function adicionarTarefa(evento : React.FormEvent) {
        evento.preventDefault();

        axios.post('https://trainees-2022-todo-api-week-3.herokuapp.com/todos', {
            'title': title,
            'description': description
        })
        .then(function () {
          getAll(setTarefas)
        })
        .catch(function (error: string) {
          console.log(error);
        });
        
        setTitle("")
        setDescription('')
    }

        return (
        <>
            <h1>
              Lista de tarefas
            </h1>
            <div className='linha'>
              <h5>
                total: {tarefas.length}
              </h5>
              <h5>
                pendentes: {tarefas.filter((tarefa) => tarefa.complete === false).length}
              </h5>
              <h5>
                concluídas: {tarefas.filter((tarefa) => tarefa.complete === true).length}
              </h5>
            </div>
            <form onSubmit={adicionarTarefa}>
                <div className="campos">
                    <label htmlFor="tarefa">
                        Adicione um a nova tarefa
                        </label>
                    <input 
                        value={title}
                        onChange={evento => setTitle(evento.target.value)}
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder="Nome da tarefa"
                        required
                    />
                    <label htmlFor="descricao">
                        Adicione uma descrição
                        </label>
                    <input 
                        value={description}
                        onChange={evento => setDescription(evento.target.value)}
                        type="text" 
                        name="descricao" 
                        id="descricao" 
                        placeholder="Descricao da tarefa"
                        required
                    />
                    <input type="submit"/>
                </div>
            </form>
        </>
        )
    
}

export default Formulario;