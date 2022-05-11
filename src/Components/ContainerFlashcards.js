function Flashcard(props) {

    return (
        <div className="flashcard">
            <div className="flashcard-fechado ">
                <div>
                    {/* Inicial: resposta
                        Após respondido o card: resposta-correta | resposta-quase | resposta-errada */}
                    <p className='resposta'>Pergunta {props.numPergunta}</p>
                    {/* Inicial: play-outline
                        Após respondido o card: checkmark-circle | help-circle | close-circle */}
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
            <div className="flashcard-aberto-frente ">
                <p>
                    {props.pergunta}
                </p>
                <img src="images/setinha.png" />
            </div>
            <div className="flashcard-aberto-tras ">
                <p>{props.resposta}</p>
                <div>
                    <button className="button1">Não lembrei</button>
                    <button className="button2">Quase não lembrei</button>
                    <button className="button3">Zap!</button>
                </div>
            </div>
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


            <div className="footer">
                <div className="fimJogoRuim escondido">
                    <p>🥲 Putz...</p>
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                </div>
                <div className="fimJogoBom escondido">
                    <p>🥳 Parabéns!</p>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </div>
                <p className="quantConcluido">8/8 CONCLUÍDOS</p>
                <div className="container-icones">
                    <ion-icon name="checkmark-circle"></ion-icon>
                    <ion-icon name="close-circle"></ion-icon>
                    <ion-icon name="help-circle"></ion-icon>
                    <ion-icon name="checkmark-circle"></ion-icon>
                    <ion-icon name="close-circle"></ion-icon>
                    <ion-icon name="checkmark-circle"></ion-icon>
                    <ion-icon name="help-circle"></ion-icon>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            </div>
        </>
    )
}