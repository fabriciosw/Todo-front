import axios from "axios";
import { getToken } from "./todoServices";

export async function loginUser(evento: React.FormEvent, email: string, password: string, setIsAuthenticated: (x: boolean) => void) {
    evento.preventDefault();
    await axios.post('http://localhost:3333/sessions/',
        { email, password }
    ).then(async (response) => {
        localStorage.setItem('token', response.data);
        getToken()
        setIsAuthenticated(true)
    })
    .catch((erro) => console.log(erro))
    
}

export function logoutUser(setIsAuthenticated: (x: boolean) => void) {
    localStorage.removeItem('token');
    // setIsAuthenticated(false);
    document.location.reload();
}

export async function validateToken() {
    let isValid;
    const token = localStorage.getItem('token');

    await axios.post('http://localhost:3333/sessions/validate', {}, {headers: {'Authorization': `bearer ${token}`}})
    .then((res: {data: boolean}) => isValid=res.data)
    .catch(() => isValid=false)
    return isValid;
}