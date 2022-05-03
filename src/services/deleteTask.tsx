import { ITarefa } from '../types/tarefa';
import getAll from './getAll'


export default function deleteTask(id: string, setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>) {
    var axios = require('axios');

    var config = {
      method: 'delete',
      url: `https://trainees-2022-todo-api-week-3.herokuapp.com/todos/${id}`,
      headers: { }
    };
    
    axios(config)
    .then(function () {
      getAll(setTarefas)
    })
    .catch(function (error: string) {
      console.log(error);
    });
  }