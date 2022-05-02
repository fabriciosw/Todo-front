import React, { useState } from "react";
import axios from "axios";

interface Props {
    getAll: () => void
}

function Formulario ({getAll}: Props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function adicionarTarefa(evento : React.FormEvent) {
        evento.preventDefault();

        axios.post('https://trainees-2022-todo-api-week-3.herokuapp.com/todos', {
            'title': title,
            'description': description
        })
        .then(function (response: { data: any; }) {
          getAll()
        })
        .catch(function (error: any) {
          console.log(error);
        });
        
        setTitle("")
        setDescription('')
    }

        return (
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
        )
    
}

export default Formulario;