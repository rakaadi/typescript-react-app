export const showNotification = (setter: React.Dispatch<boolean>) => {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000);
};

export const checkWin = (correct: string[], wrong: string[], word: string): string => {
    let status = "win";

    // Check for win
    word.split("").forEach((letter) => {
        if (!correct.includes(letter)) status = "";
    });

    //Check for lose
    if (wrong.length === 6) status = "lose";

    return status;
};