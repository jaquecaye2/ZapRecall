import React from 'react';

import FlashcardAbertoFrente from './FlashcardAbertoFrente.js';
import FlashcardAbertoTras from './FlashcardAbertoTras.js';

export default function FlashcardAberto({props}) {

    const [estadoFLashcardAberto, setEstadoFlashcardAberto] = React.useState("frente")

    return (
        
        <div className="flashcard-aberto">
            {
                estadoFLashcardAberto === 'frente' ? 
                <FlashcardAbertoFrente props={props} setEstadoFlashcardAberto={setEstadoFlashcardAberto}/> : <FlashcardAbertoTras props={props}/>
            }
        </div>
    )
} 