import { useState } from "react";
import * as userServices from "../../services/userServices"
import { AuthenticationContext } from "../../contexts/authenticated";


export default function Login({ loginUser }: { loginUser:(evento: React.FormEvent<Element>, email: string, password: string, setIsAuthenticated: (x: boolean) => void) => Promise<void> }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { setIsAuthenticated } = AuthenticationContext()
    
    return (
        <form onSubmit={(event) => loginUser(event, email, senha, setIsAuthenticated)}>
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
                    <input type="submit" data-testid="logar"/>
                </div>
            </form>
    )
}