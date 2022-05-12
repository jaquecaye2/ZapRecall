export default function FlashcardAbertoFrente({ props, setEstadoFlashcardAberto }) {
    return (
        <div className="flashcard-aberto-frente ">
            <p>
                {props.pergunta}
            </p>
            <img src="images/setinha.png" onClick={() => setEstadoFlashcardAberto("tras")}/>
        </div>
    )
}