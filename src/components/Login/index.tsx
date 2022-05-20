import { useState } from "react";
import * as userServices from "../../services/userServices"
import { AuthenticationContext} from "../../contexts/authenticated";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { setIsAuthenticated } = AuthenticationContext()
    
    return (
        <form onSubmit={(event) => userServices.loginUser(event, email, senha, setIsAuthenticated)}>
                <div className="campos">
                    <label htmlFor="email">
                        Faça login
                    </label>
                    <input 
                        value={email}
                        onChange={evento => setEmail(evento.target.value)}
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="E-mail"
                        required
                    />
                    <label htmlFor="senha">
                        Adicione uma descrição
                        </label>
                    <input 
                        value={senha}
                        onChange={evento => setSenha(evento.target.value)}
                        type="password" 
                        name="senha" 
                        id="senha" 
                        placeholder="Senha"
                        required
                    />
                    <input type="submit" />
                </div>
            </form>
    )
}