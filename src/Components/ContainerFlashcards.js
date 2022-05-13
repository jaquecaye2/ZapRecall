import React from 'react';

function Flashcard(props) {
    const [estadoFlashcard, setEstadoFlashcard] = React.useState("flashcardFechado")
    const [estadoFLashcardAberto, setEstadoFlashcardAberto] = React.useState("frente")
    const [estadoResposta, setEstadoResposta] = React.useState("resposta")
    const [iconeResposta, setIconeResposta] = React.useState("play-outline")

    // criar contador para cada tipo de resposta,

    function perguntaRespondidaCerta(){
        setEstadoFlashcard("flashcardFechado") 
        setEstadoResposta("resposta-correta") 
        setIconeResposta("checkmark-circle") 
    }

    function perguntaRespondidaMeio(){
        setEstadoFlashcard("flashcardFechado") 
        setEstadoResposta("resposta-quase") 
        setIconeResposta("help-circle") 
    }

    function perguntaRespondidaErrada(){
        setEstadoFlashcard("flashcardFechado") 
        setEstadoResposta("resposta-errada") 
        setIconeResposta("close-circle") 
    }

    return (
        <div className="flashcard">

            {/*OPERADOR TERNÁRIO PARA VERIFICAR SE O CARD ESTA ABERTO OU FECHADO*/}
            {
                estadoFlashcard === 'flashcardFechado' ? (
                    <div className="flashcard-fechado ">
                        <div>
                            {/* Inicial: resposta
                        Após respondido o card: resposta-correta | resposta-quase | resposta-errada */}
                            <p className={estadoResposta}>Pergunta {props.key}</p>
                            {/* Inicial: play-outline
                        Após respondido o card: checkmark-circle | help-circle | close-circle */}
                            <ion-icon name={iconeResposta} onClick={() => setEstadoFlashcard("flashcardAberto")}></ion-icon>
                        </div>
                    </div>
                ) : 
                (
                    <div className="flashcard-aberto">
                        {/*OPERADOR TERNÁRIO PARA VERIFICAR SE O CARD ABERTO ESTA NA FRENTE OU ATRÁS*/}
                        {
                            estadoFLashcardAberto === 'frente'
                                ?
                                (<div className="flashcard-aberto-frente ">
                                    <p>
                                        {props.pergunta}
                                    </p>
                                    <img src="images/setinha.png" onClick={() => setEstadoFlashcardAberto("tras")} />
                                </div>)
                                :
                                (
                                    <div className="flashcard-aberto-tras ">
                                        <p>{props.resposta}</p>
                                        <div>
                                            <button className="button1" onClick={perguntaRespondidaErrada}>Não lembrei</button>
                                            <button className="button2" onClick={perguntaRespondidaMeio}>Quase não lembrei</button>
                                            <button className="button3" onClick={perguntaRespondidaCerta} >Zap!</button>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                )
            }

        </div>
    )
}

export default function ContainerFlashcards() {
    const flashcards = [
        {
            pergunta: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScript"
        },
        {
            pergunta: "O React é __",
            resposta: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            pergunta: "Componentes devem iniciar com __",
            resposta: "letra maiúscula"
        },
        {
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta: "expressões"
        },
        {
            pergunta: "O ReactDOM nos ajuda __",
            resposta: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            pergunta: "Usamos o npm para __",
            resposta: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            pergunta: "Usamos props para __",
            resposta: "passar diferentes informações para componentes "
        },
        {
            pergunta: "Usamos estado (state) para __",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ]

    function comparador() { 
        return Math.random() - 0.5; 
    }

    flashcards.sort(comparador)

    return (
        <>
            <div className="container-flashcards">
                {flashcards.map((flashcard, index) => <Flashcard key={index} pergunta={flashcard.pergunta} resposta={flashcard.resposta} />)}
            </div>
        </>
    )
}