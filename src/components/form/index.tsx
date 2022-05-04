import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import * as todoServices from '../../services/todoServices'

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>,
    tarefas: ITarefa[]
}

function Formulario ({ tarefas, setTarefas}: Props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

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
            <form onSubmit={(event) => todoServices.adicionarTarefa(event, description, title, setTarefas, setTitle, setDescription)}>
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
                    />
                    <input type="submit"/>
                </div>
            </form>
        </>
        )
    
}

export default Formulario;