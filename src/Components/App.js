import React from 'react';
import TelaInicial from './TelaInicial.js';
import TelaFlashcards from './TelaFlashcards.js';
import "../assets/styles/reset.css"
import "../assets/styles/style.css"
import logo from "../assets/images/logo.png"

export default function App() {
    const [tela, setTela] = React.useState("telaInicial")

    return (
        <>
            {
                tela === 'telaInicial' ? <TelaInicial setTela={setTela} logo={logo}/> : <TelaFlashcards />
            }   
        </>
    )
}