import './App.css';
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

                <div className="bg-white-500 p-4 flex justify-center">
                    <button className="bg-blue-500 text-black font-bold py-2 px-4 rounded mr-4">Faça o teste grátis</button>
                    <button className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded">Saiba mais</button>
                </div>
                <br/>

                <main className="flex-grow bg-white-500">
                    <h2 className="text-lg font-bold">O que há de novo na Salesforce?</h2>

                    <div className="flex justify-center">
                        <div className="funcoes-section mr-4">
                            <h2 className="text-white font-bold text-lg mb-4">Nova função: Guia</h2>
                            <div className="table-container">
                                <table className="table" style={{ border: '1px solid black' }}>
                                    <tbody>
                                        <tr>
                                            <td className="image-cell" align="center">
                                                <img src="/imagem3.webp" alt="Guia" width="200" height="200" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mb-4"><Link to="/Guia" className="hover:text-blue-500">Nova função: Guia</Link></button>
                                                <p>Nova ferramenta onde o usuário pode <br/>ativar um "guia" por voz e também um<br/> leitor de imagem.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="funcoes-section">
                            <h2 className="text-white font-bold text-lg mb-4">Nova função: Daltonismo</h2>
                            <div className="table-container">
                                <table className="table" style={{ border: '1px solid black' }}>
                                    <tbody>
                                        <tr>
                                            <td className="image-cell" align="center">
                                                <img src="/imagem2.png" alt="Daltonismo" width="200" height="200" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded mb-4"><Link to="/Daltonismo" className="hover:text-blue-500">Nova função: Daltonismo</Link></button>
                                                 <p>Nova ferramenta onde o usuário pode <br/>escolher a paleta de cores do site<br/> adaptada para os tipos de daltonismo.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <Routes>
                        <Route path="/Guia" element={<Guia />} />
                        <Route path="/Daltonismo" element={<Daltonismo />} />
                    </Routes>
                </main>


                <footer className="bg-blue-500 text-white p-4">
                    <p>© 2024 Salesforce-Fiap - rm:554184 Gustavo Henrique Camacho Dos Santos - rm:554064 Gabriel Sá Bragança - rm:553927 Erick Lopes Silva</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
