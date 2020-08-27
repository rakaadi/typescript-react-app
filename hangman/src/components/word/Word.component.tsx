import React from "react";

import { WordContainer, LetterContainer } from "./Word.styles";

export type answerProps = {
    selectedWord: string,
    correctLetters: string[]
};

export type wordProps = answerProps & { wrongLetters: string[] };

const Word: React.FC<answerProps> = ({ selectedWord, correctLetters }) => {
    return (
        <WordContainer>
            {
                selectedWord.split("").map((letter, i) => {
                    return (
                        <LetterContainer key={i}>
                            {correctLetters.includes(letter) ? letter : ""}
                        </LetterContainer>
                    );
                })
            }
        </WordContainer>
    );
};

export default Word;
