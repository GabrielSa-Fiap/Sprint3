import React from "react";
interface Funcao{
    id: number;
    title: string;
    description: string;
}

const funcoes: Funcao[] = [
    { id:1, title:'Guia', description:'Nova ferramenta onde o usuario pode ativar um guia por voz e também um leitor de imagem'},
    { id:2, title:'Daltonismo', description:'Nova ferramenta onde o usuario pode escolher a paleta de cores do site adaptada para os tipos de daltonismo'},
]
const Funcoes: React.FC = () => {
return(
    <div>
        <h2 className="text-lg font-bold">O que há de novo na Salesforce?</h2>
        {}
        <ul>
            { }
            {funcoes.map((funcoes) => 
            <li key={funcoes.id} className="mt-2">
                { }
                <h3 className="text-md font-bold">{funcoes.title}</h3>
                { }
                <p>{funcoes.description}</p>
            </li>
            )}
        </ul>
    </div>
)
}

export default Funcoes;