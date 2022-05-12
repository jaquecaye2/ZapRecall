export default function FlashcardAbertoTras({props}) {
    return (
        <div className="flashcard-aberto-tras ">
            <p>{props.resposta}</p>
            <div>
                <button className="button1">Não lembrei</button>
                <button className="button2">Quase não lembrei</button>
                <button className="button3">Zap!</button>
            </div>
        </div>
    )
}