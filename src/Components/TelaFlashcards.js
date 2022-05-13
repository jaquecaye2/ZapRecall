import React from 'react';

import HeaderTelaFlashcards from './HeaderTelaFlashcards.js';
import ContainerFlashcards from './ContainerFlashcards.js';
//import Footer from "./Footer.js";

export default function TelaFlashcards() {

    {/*const [contadorRespondidas, setContadorRespondidas] = React.setState("0")*/}

    return (
        <div className="tela-flashcards">
            <HeaderTelaFlashcards />
            <ContainerFlashcards/>
            {/*<Footer/>*/}
        </div>
    )
}