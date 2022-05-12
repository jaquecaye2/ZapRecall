import React from 'react';

import TelaInicial from './TelaInicial.js';
import TelaFlashcards from './TelaFlashcards.js';

export default function App() {
    const [tela, setTela] = React.useState("telaInicial")

    return (
        <>
            {
                tela === 'telaInicial' ? <TelaInicial setTela={setTela}/> : <TelaFlashcards />
            }   
        </>
    )
}