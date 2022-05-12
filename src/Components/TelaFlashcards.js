import HeaderTelaFlashcards from './HeaderTelaFlashcards.js';
import ContainerFlashcards from './ContainerFlashcards.js';
import Footer from "./Footer.js";

export default function TelaFlashcards() {
    return (
        <div className="tela-flashcards">
            <HeaderTelaFlashcards />
            <ContainerFlashcards />
            <Footer />
        </div>
    )
}