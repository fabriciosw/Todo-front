import React from "react";
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from 'uuid';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa:"",
        done: false
    }

    adicionarTarefa(evento : React.FormEvent) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                ...this.state,
                id: uuidv4()
                }
            ])
        this.setState({
            tarefa:""
        })
    }

    render () {
        return (
            <form onSubmit={this.adicionarTarefa.bind(this)}>
                <div>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                        </label>
                    <input 
                        value={this.state.tarefa}
                        onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value})}
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder="O que vc quer estudar ?"
                        required
                    />
                    <input type="submit"/>
                </div>
            </form>
        )
    }
}

export default Formulario;