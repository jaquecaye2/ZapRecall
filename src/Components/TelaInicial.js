import logo from "../assets/images/logo.png"

export default function TelaInicial({setTela}) {
    return (
        <div className="tela-inicial">
            <div>
                <img src={logo} />
                <h1>ZapRecall</h1>
                <button onClick={() => setTela('telaFlashcard')}>Iniciar Recall!</button>
            </div>
        </div>
    )
}