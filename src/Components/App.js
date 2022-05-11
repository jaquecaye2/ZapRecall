export default function App() {
    return (
        <>
            <div className="tela-inicial escondido">
                <div>
                    <img src="images/logo.png" />
                    <h1>ZapRecall</h1>
                    <button>Iniciar Recall!</button>
                </div>
            </div>

            <div className="tela-flashcards">
                <div className="header">
                    <img src="images/logo.png" />
                    <h2>ZapRecall</h2>
                </div>
                
                <div className="container-flashcards">

                    <div className="flashcards">
                        <div className="flashcard">
                            <div className="flashcard-fechado">
                                <div>
                                    <p>Pergunta 1</p>
                                    <ion-icon name="play-outline"></ion-icon>
                                </div>
                            </div>
                            <div className="flashcard-aberto-frente">
                                <p>
                                    O que é JSX?
                                </p>
                                <img src="images/setinha.png" />
                            </div>
                            <div className="flashcard-aberto-tras">
                                <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                                <div>
                                    <button className="button1">Não lembrei</button>
                                    <button className="button2">Quase não lembrei</button>
                                    <button className="button3">Zap!</button>
                                </div>
                            </div>
                        </div>

                        <div className="flashcard">
                            <div className="flashcard-fechado">
                                <div>
                                    <p>Pergunta 2</p>
                                    <ion-icon name="play-outline"></ion-icon>
                                </div>
                            </div>
                            <div className="flashcard-aberto-frente">
                                <p>
                                    O React é __
                                </p>
                                <img src="images/setinha.png" />
                            </div>
                            <div className="flashcard-aberto-tras">
                                <p>uma biblioteca JavaScript para construção de interfaces</p>
                                <div>
                                    <button className="button1">Não lembrei</button>
                                    <button className="button2">Quase não lembrei</button>
                                    <button className="button3">Zap!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <p>0/4 CONCLUÍDOS</p>
                </div>
            </div>
        </>
    )
}