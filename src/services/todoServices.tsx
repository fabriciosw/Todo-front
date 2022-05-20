import { ITarefa } from '../interfaces/tarefa'
import axios from 'axios';
import jwt_decode from "jwt-decode";

let token: string | null;
let user: number;

export function getToken() {
   token = localStorage.getItem('token');

    if(token){
      const data = token;
      const decoded: { sub: number } = jwt_decode(data);
      user = decoded.sub;
    }
}

export function getAll (setTarefas: (x: ITarefa[]) => void) {

    axios.get('http://localhost:3333/tasks/', {headers: {user: user, Authorization: `bearer ${token}`}})
      .then(function (response: {data: Array<ITarefa>}) {
        return setTarefas(response.data);
      })
      .catch(function (error: string) {
        return console.log(error);
      });
}

export function endTask(id: number, setTarefas: (x: ITarefa[]) => void) {
    axios.put(`http://localhost:3333/tasks/${id}`, {
            'complete': true
        }, {headers: {Authorization: `bearer ${token}`}})
    .then(function () {
      getAll(setTarefas)
    })
    .catch(function (error: string) {
      console.log(error);
    });
  }

export function deleteTask(id: number, setTarefas: (x: ITarefa[]) => void) {

    var config = {
      method: 'delete',
      url: `http://localhost:3333/tasks/${id}`,
      headers: {Authorization: `bearer ${token}`}
    };
    
    axios(config)
    .then(function () {
      getAll(setTarefas)
    })
    .catch(function (error: string) {
      console.log(error);
    });
  }

  export function adicionarTarefa(
      evento : React.FormEvent, 
      description: string, 
      title: string, 
      setTarefas: (x: ITarefa[]) => void, 
      setTitle: React.Dispatch<string>,
      setDescription: React.Dispatch<string>
      ) {
    evento.preventDefault();

    let desc;
    if (description.trim()==='')
    desc='Sem descrição'
    else
    desc= description

    axios.post('http://localhost:3333/tasks/', {
        'title': title,
        'description': desc,
        'user_id': user
    },{headers: {Authorization: `bearer ${token}`}})
    .then(function () {
      getAll(setTarefas)
    })
    .catch(function (error: string) {
      console.log(error);
    });
    
    setTitle("")
    setDescription('')
}