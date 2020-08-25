import React from "react";

const WrongLetters = ({ wrongLetters }: { wrongLetters: string[] }) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {wrongLetters.length && <p>Wrong</p>}
                {
                    wrongLetters
                        .map((letter, i) => <span key={i}>{letter}</span>)
                        .reduce((prev: any, curr: any) => prev === null ? [curr] : [prev, ", ", curr], null)
                }
            </div>
        </div>
    )
};

export default WrongLetters;
