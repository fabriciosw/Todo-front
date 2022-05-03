import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/form';
import Lista from './components/list';
import { ITarefa } from './types/tarefa';
import getAll from './services/getAll'
import deleteTask from './services/deleteTask';

function App() {
  const [onlyComplete, setOnlyComplete] = useState<boolean|undefined>(undefined);
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  useEffect(() => {getAll(setTarefas)}, []);

  function endTask(id: string) {
    var axios = require('axios');
    axios.put(`https://trainees-2022-todo-api-week-3.herokuapp.com/todos/${id}`, {
            'complete': true
        })
    .then(function () {
      getAll(setTarefas)
    })
    .catch(function (error: string) {
      console.log(error);
    });
  }

  function verFinalizadas() {
    setOnlyComplete(true);
  }
  function verPendentes() {
    setOnlyComplete(false);
  }
  function verTodas() {
    setOnlyComplete(undefined)
  }

  return (
    <div className="App">
      <div className='leftside'>
        <div className='formbox'>
        <Formulario getAll={getAll} tarefas={tarefas} setTarefas={setTarefas}/>
      
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
          deleteTask={deleteTask} 
          endTask={endTask} 
          onlyComplete={onlyComplete} 
          tarefas={tarefas} 
          setTarefas={setTarefas}
        />
      </div>
    </div>
  );
}

export default App;