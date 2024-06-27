import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/categorias/tarefas">Categorias de Tarefa</Link>
                        </li>
                        <li>
                            <Link to="/lista/tarefas">Lista de Tarefa</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
              
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;