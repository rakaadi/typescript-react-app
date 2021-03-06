import React, { useState, useEffect } from "react";

import "./App.css";
import { GlobalStyle, GameContainer } from "./App.styles";
import Header from "./components/header/Header.component";
import Figure from "./components/figure/Figure.component";
import WrongLetters from "./components/wrong-letters/WrongLetters.component";
import Word from "./components/word/Word.component";
import Notification from "./components/notification/Notification.component";
import { showNotification as show } from "./utils";
import Popup from "./components/popup/Popup.component";

const words = ['application', 'programming', 'interface', 'wizard'];
const random = Math.floor(Math.random() * words.length);
let selectedWord = words[random];

const App = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, keyCode } = event;
      if (keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter])
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter])
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [correctLetters, wrongLetters, playable])

  const playAgain = () => {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);

    selectedWord = words[random];
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <GameContainer>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </GameContainer>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
};

export default App;
