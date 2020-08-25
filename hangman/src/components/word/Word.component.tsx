import React from "react";

export type answerProps = {
    selectedWord: string,
    correctLetters: string[]
};

export type wordProps = answerProps & { wrongLetters: string[] };

const Word: React.FC<answerProps> = ({ selectedWord, correctLetters }) => {
    return (
        <div className="word">
            {
                selectedWord.split("").map((letter, i) => {
                    return (
                        <span className="letter" key={i}>
                            {correctLetters.includes(letter) ? letter : ""}
                        </span>
                    );
                })
            }
        </div>
    );
};

export default Word;
