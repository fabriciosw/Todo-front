import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/form';
import Lista from './components/list';
import { ITarefa } from './types/tarefa';
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
    <div className="App">
      <div className='leftside'>
        <div className='formbox'>
        <Formulario getAll={todoServices.getAll} tarefas={tarefas} setTarefas={setTarefas}/>
      
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
          deleteTask={todoServices.deleteTask} 
          endTask={todoServices.endTask} 
          taskStatus={taskStatus} 
          tarefas={tarefas} 
          setTarefas={setTarefas}
        />
      </div>
    </div>
  );
}

export default App;