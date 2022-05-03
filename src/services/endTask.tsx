import getAll from './getAll'
import { ITarefa } from '../types/tarefa'

export default function endTask(id: string, setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>) {
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