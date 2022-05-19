import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import { ToDo } from './components/ToDo';
import { validateToken } from './services/userServices';

function App() {
  validateToken(localStorage.getItem('token') || "");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;