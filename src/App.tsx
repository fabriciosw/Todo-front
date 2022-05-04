import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/form';
import Lista from './components/list';
import { Tarefa } from './contexts/task';
import { ITarefa } from './interfaces/tarefa';
import * as todoServices from './services/todoServices'

function App() {
  const [taskStatus, setTaskStatus] = useState<boolean|undefined>(undefined);
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  useEffect(() => {todoServices.getAll(setTarefas)}, []);

  function verFinalizadas() {
    setTaskStatus(true);
  }
  function verPendentes() {
    setTaskStatus(false);
  }
  function verTodas() {
    setTaskStatus(undefined)
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
  );
}

export default App;