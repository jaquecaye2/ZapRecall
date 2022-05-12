import React from 'react';

import FlashcardFechado from './FlashcardFechado.js';
import FlashcardAberto from './FlashcardAberto.js';

function Flashcard(props) {
    const [estadoFlashcard, setEstadoFlashcard] = React.useState("flashcardFechado")

    return (
        <div className="flashcard">
            {
                estadoFlashcard === 'flashcardFechado' ? <FlashcardFechado props={props} setEstadoFlashcard={setEstadoFlashcard}/> : <FlashcardAberto props={props}/>
            }   
     
        </div>
    )
}

export default function ContainerFlashcards() {
    const flashcards = [
        {
            numPergunta: '1',
            pergunta: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScript"
        },
        {
            numPergunta: '2',
            pergunta: "O React é __",
            resposta: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            numPergunta: '3',
            pergunta: "Componentes devem iniciar com __",
            resposta: "letra maiúscula"
        },
        {
            numPergunta: '4',
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta: "expressões"
        },
        {
            numPergunta: '5',
            pergunta: "O ReactDOM nos ajuda __",
            resposta: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            numPergunta: '6',
            pergunta: "Usamos o npm para __",
            resposta: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            numPergunta: '7',
            pergunta: "Usamos props para __",
            resposta: "passar diferentes informações para componentes "
        },
        {
            numPergunta: '8',
            pergunta: "Usamos estado (state) para __",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ]

    return (
        <>
            <div className="container-flashcards">
                {flashcards.map((flashcard, index) => <Flashcard key={index} numPergunta={flashcard.numPergunta} pergunta={flashcard.pergunta} resposta={flashcard.resposta} />)}
            </div>
        </>
    )
}