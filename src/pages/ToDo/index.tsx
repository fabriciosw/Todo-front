import { useEffect, useState } from "react";
import { Tarefa } from "../../contexts/TaskContext";
import { ITarefa } from "../../interfaces/tarefa";
import Formulario from "../../components/Form";
import * as todoServices from '../../services/todoServices'
import Lista from "../../components/List";
import { logoutUser } from "../../services/userServices";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";

export const ToDo = () => {
    const [taskStatus, setTaskStatus] = useState<boolean|undefined>(undefined);
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const { setIsAuthenticated } = AuthenticationContext();

    useEffect(() => { todoServices.getAll(setTarefas) }, []);
    
    function verFinalizadas() {
        setTaskStatus(true);
    }
    function verPendentes() {
        setTaskStatus(false);
    }
    function verTodas() {
        setTaskStatus(undefined);
    }
    return (
        <Tarefa.Provider value={{tarefas, setTarefas}}>
        <div className="App">
            <div className='leftside'>
            <div className='formbox'>

            <Formulario/>

            <div className='linha'>
                <button onClick={() => verTodas()}>Ver Todas</button>
                <button onClick={() => verPendentes()}>Ver Pendentes</button>
                <button onClick={() => verFinalizadas()}>Ver Concluídas</button>
            </div>
                <button onClick={() => logoutUser(setIsAuthenticated)}>Deslogar</button>
            </div>
            
            </div>
            <div className='rightside'>
            <h1 className='title'>Tarefas</h1>
            <Lista
                taskStatus={taskStatus}
            />
            </div>
        </div>
        </Tarefa.Provider>
    )
}