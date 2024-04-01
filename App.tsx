import './App.css';
import Funcoes from './componentes/Funcoes';
import Guia from './componentes/servicos/Guia';
import Daltonismo from './componentes/servicos/Daltonismo';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <header className="bg-gradient-to-r from-blue-800 to-blue-500 text-white p-4">
                    <h1 className="text-3xl">SalesForce</h1>
                </header>

                <nav>
                    <ul className="flex justify-center space-x-4 p-3">
                        <li><Link to="/" className="hover:text-blue-500">HOME</Link></li>
                        <li><Link to="/Guia" className="hover:text-blue-500">Guia</Link></li>
                        <li><Link to="/Daltonismo" className="hover:text-blue-500">Daltonismo</Link></li>
                    </ul>
                </nav>

                <main className="flex-grow bg-gray-500">
                    <Routes>
                        <Route path="/" element={<Funcoes />} />
                        <Route path="/Guia" element={<Guia />} />
                        <Route path="/Daltonismo" element={<Daltonismo />} />
                    </Routes>
                </main>

                <footer className="bg-gradient-to-r from-blue-800 to-blue-500 text-white p-4">
                    <p>© 2024 Salesforce-Fiap. Todos os direitos reservados</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
