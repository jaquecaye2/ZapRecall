export default function FlashcardFechado({props, setEstadoFlashcard}) {
    return (
        <div className="flashcard-fechado ">
            <div>
                {/* Inicial: resposta
                        Após respondido o card: resposta-correta | resposta-quase | resposta-errada */}
                <p className='resposta'>Pergunta {props.numPergunta}</p>
                {/* Inicial: play-outline
                        Após respondido o card: checkmark-circle | help-circle | close-circle */}
                <ion-icon name="play-outline" onClick={() => setEstadoFlashcard("flashcardAberto")}></ion-icon>
            </div>
        </div>
    )
}