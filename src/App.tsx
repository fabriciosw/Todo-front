import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { ToDo } from './pages/ToDo';
import { Authentication } from './contexts/AuthenticationContext';
import * as userServices from './services/userServices';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  useEffect(() => {
    async function validacaoInicial() {
     const auth = await userServices.validateToken();
    if(auth)
    setIsAuthenticated(auth);
    }

    validacaoInicial()
  }, [])

  return (
    <Authentication.Provider value={{isAuthenticated, setIsAuthenticated}}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/todo" replace /> : <Login loginUser={ userServices.loginUser }/>} />
          <Route path="/todo" element={isAuthenticated ? <ToDo /> : <Navigate to="/login" replace />} />
          <Route path="*" element={isAuthenticated ? <ToDo /> : <Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </Authentication.Provider>
  );
}

export default App;