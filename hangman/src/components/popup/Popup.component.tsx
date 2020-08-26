import React, { useEffect } from "react";

import { PopupContainer, ButtonPopup } from "./Popup.styles";
import { wordProps } from "../word/Word.component";

import { checkWin } from "../../utils";

type ownProps = wordProps & { setPlayable: React.Dispatch<boolean>, playAgain: any };

const Popup: React.FC<ownProps> = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    let finalMessage = "";
    let revealWord = "";
    let playable = true;

    if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
        finalMessage = "Congratulations You Win!";
        playable = false;
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
        finalMessage = "Unfortunately You Lose...";
        revealWord = `The Word is ${selectedWord}`;
        playable = false;
    };

    useEffect(() => setPlayable(playable));

    return (
        <div className="popup-container" style={finalMessage !== "" ? { display: "flex" } : {}} >
            <PopupContainer>
                <h2>{finalMessage}</h2>
                <h3>{revealWord}</h3>
                <ButtonPopup onClick={playAgain}>Play Again</ButtonPopup>
            </PopupContainer>
        </div>
    )
};

export default Popup;
