import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/form';
import Lista from './components/list';
import { ITarefa } from './types/tarefa';

function App() {
  // const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [onlyComplete, setOnlyComplete] = useState<boolean|undefined>(undefined);
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  useEffect(() => {getAll()}, []);

  function deleteTask(id: string) {
    var axios = require('axios');

    var config = {
      method: 'delete',
      url: `https://trainees-2022-todo-api-week-3.herokuapp.com/todos/${id}`,
      headers: { }
    };
    
    axios(config)
    .then(function (response: { data: {}; }) {
      console.log(JSON.stringify(response.data));
      getAll()
    })
    .catch(function (error: string) {
      console.log(error);
    });
  }

  function endTask(id: string) {
    var axios = require('axios');
    axios.put(`https://trainees-2022-todo-api-week-3.herokuapp.com/todos/${id}`, {
            'complete': true
        })
    .then(function (response: { data: {}; }) {
      console.log(JSON.stringify(response.data));
      getAll()
    })
    .catch(function (error: string) {
      console.log(error);
    });
    // return setTarefas(tarefas.map((tarefa) => {
    //   if (tarefa.id === id) {
    //     tarefa.done = true
    //   }
    //   return tarefa
    // }))
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

  function getAll() {
    
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://trainees-2022-todo-api-week-3.herokuapp.com/todos/',
      headers: {}
    };

    axios(config)
      .then(function (response: any) {
        setTarefas(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  
}

  return (
    <div className="App">
      <div className='leftside'>
        <div className='formbox'>
        <Formulario getAll={getAll} tarefas={tarefas}/>
      
        <div className='linha'>
          <button onClick={() => verTodas()}>Ver Todas</button>
          <button onClick={() => verPendentes()}>Ver Pendentes</button>
          <button onClick={() => verFinalizadas()}>Ver Concluídas</button>
        </div>
        </div>
      </div>
      <div className='rightside'>
        <h1 className='title'>Tarefas</h1>
        <Lista deleteTask={deleteTask} endTask={endTask} onlyComplete={onlyComplete} tarefas={tarefas}></Lista>
      </div>
    </div>
  );
}

export default App;