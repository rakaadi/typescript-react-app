import React from "react";

import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";
import { AnswerObject } from "../App";

type Props = {
    question: string,
    answers: string[],
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNum: number,
    totalQuestions: number
};

const QuestionCard: React.FC<Props> = ({ ...Props }) => {
    return (
        <Wrapper>
            <p className="number">
                Question: {Props.questionNum} / {Props.totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: Props.question }} />
            <div>
                {Props.answers.map(answer => (
                    <ButtonWrapper key={answer} correct={Props.userAnswer?.correctAnswer === answer} userClicked={Props.userAnswer?.answer === answer} >
                        <button disabled={Props.userAnswer ? true : false} value={answer} onClick={Props.callback} >
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    );
};

export default QuestionCard;
