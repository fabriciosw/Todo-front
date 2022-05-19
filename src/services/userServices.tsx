import axios from "axios"

export function loginUser(evento: React.FormEvent, email: string, password: string) {
    evento.preventDefault();
    axios.post('http://localhost:3333/sessions/',
        { email, password }
    ).then((response) => localStorage.setItem('token', response.data))
    .catch((erro) => console.log(erro))
    
}

export function validateToken(token: string) {
    axios.post('http://localhost:3333/sessions/validate', {}, {headers: {'Authorization': `bearer ${token}`}})
    .then((res => console.log(res.data)))
    .catch((erro) => console.log(erro))
}