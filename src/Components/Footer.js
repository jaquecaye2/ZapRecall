export default function Footer() {
    return (
        <div className="footer">
            <div className="fimJogoRuim escondido">
                <p>🥲 Putz...</p>
                <p>Ainda faltam alguns... Mas não desanime!</p>
            </div>
            <div className="fimJogoBom escondido">
                <p>🥳 Parabéns!</p>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </div>
            <p className="quantConcluido">0/8 CONCLUÍDOS</p>
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
    )
}