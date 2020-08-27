import React from "react";

import { WrongLettersContainer } from "./WrongLetters.styles";

const WrongLetters = ({ wrongLetters }: { wrongLetters: string[] }) => {
    return (
        <WrongLettersContainer>
            <div>
                {wrongLetters.length && <p>Wrong</p>}
                {
                    wrongLetters
                        .map((letter, i) => <span key={i}>{letter}</span>)
                        .reduce((prev: any, curr: any) => prev === null ? [curr] : [prev, ", ", curr], null)
                }
            </div>
        </WrongLettersContainer>
    );
};

export default WrongLetters;
