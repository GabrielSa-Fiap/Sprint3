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
            <header className="bg-white text-gray-800 p-4">
                <div className="flex items-start">
                    <div className="flex items-start">
                        <img src="/logosalesforce.png" alt="Logo Salesforce" className="h-12 w-auto mr-2" />
                        
                    </div>
                    <nav>
                        <ul className="flex space-x-4 p-3">
                            <li><Link to="/" className="hover:text-blue-500">HOME</Link></li>
                            <li><Link to="/Guia" className="hover:text-blue-500">Guia</Link></li>
                            <li><Link to="/Daltonismo" className="hover:text-blue-500">Daltonismo</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="bg-white-200 p-4">
                    <div className="flex justify-center items-center">
                        <div className="mr-4">
                            <p className="font-bold text-xl">Entregue sucesso agora <br/>com o Salesforce Customer 360.</p>
                            <p>O Customer 360 é a nossa suíte de produtos e serviços que ajuda <br/>98% dos clientes a alcançar ou superar suas metas de ROI.</p>
                        </div>
                        <img src="/imagem1.webp" alt="Imagem 1" width="200" height="200" />
                    </div>
                </div>

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
