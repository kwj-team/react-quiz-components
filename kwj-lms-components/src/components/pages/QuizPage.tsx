import { Box } from "@mui/material";
import { useMemo, useState } from "react";
import { QuizStage } from "../elements/Quiz.types";
import { QuizEnd } from "../elements/QuizEnd";
import { QuizResult } from "../elements/QuizResult";
import { Timer } from "../elements/Timer";
import QuizComponent from "../elements/QuizComponent";
import QuizStart from "../elements/QuizStart";
import isEqual from "lodash.isequal";

type QuizPageData = Pick<
  QuizData,
  | "title"
  | "description"
  | "showCorrectAnswers"
  | "showPoints"
  | "randomize"
  | "questions"
  | "isRepeatable"
  | "numberOfAttempts"
  | "finalButton"
>;

interface QuizProps {
  quiz: QuizPageData;
  userContext: {
    attemptsTaken: number;
  };
}

const QuizPage = ({ quiz, userContext }: QuizProps) => {
  const [stage, setStage] = useState(QuizStage.QuizStart);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const onRepeatQuiz = () => {
    setStage(QuizStage.QuizStart);
    setSeconds(0);
  };

  const remainingAttempts = quiz.numberOfAttempts - userContext.attemptsTaken;

  const sumOfUserPoints = useMemo(() => {
    const correctAnswers = quiz.questions.map((question) => {
      return question.answers
        .filter((answer) => answer.isCorrect === true)
        .map((answer) => answer.key);
    });
    let userPoints = 0;
    for (let i = 0; i < quiz.questions.length; i++) {
      if (!answers[i]) {
        return userPoints;
      }
      if (isEqual(correctAnswers[i], answers[i].value)) {
        userPoints = userPoints + quiz.questions[i].question.points;
      }
    }
    return userPoints;
  }, [answers, quiz.questions]);

  const sumOfPoints = useMemo(
    () =>
      quiz.questions.reduce(
        (prev, current) => prev + current.question.points,
        0
      ),
    [quiz.questions]
  );

  const onNextStep = (answers?: Answer[]) => {
    if (stage === QuizStage.QuizStart) {
      setIsActive(true);
      setShowTime(true);
      setStage(QuizStage.Questions);
    }
    if (stage === QuizStage.Questions) {
      setIsActive(false);
      setShowTime(false);
      setAnswers(answers || []);
      if (quiz.showCorrectAnswers) {
        setStage(QuizStage.AnswersReview);
      } else {
        setStage(QuizStage.End);
      }
    }
    if (stage === QuizStage.AnswersReview) {
      setStage(QuizStage.End);
    }
  };

  return (
    <>
      {stage === QuizStage.QuizStart && (
        <QuizStart
          title={quiz.title}
          description={quiz.description}
          onNextClick={onNextStep}
        />
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 800,
          margin: "0 auto",
        }}
      >
        {showTime && (
          <Timer
            isActive={isActive}
            seconds={seconds}
            setSeconds={setSeconds}
          />
        )}
        {stage === QuizStage.Questions && (
          <QuizComponent quiz={quiz} onFinishQuiz={onNextStep} />
        )}
        {stage === QuizStage.AnswersReview && (
          <QuizResult
            sumOfUserPoints={sumOfUserPoints}
            sumOfPoints={sumOfPoints}
            seconds={seconds}
            quiz={quiz}
            answers={answers}
            onNextStep={onNextStep}
          />
        )}
        {stage === QuizStage.End && (
          <QuizEnd
            remainingAttempts={remainingAttempts}
            isRepeatable={quiz.isRepeatable}
            finalButton={quiz.finalButton}
            onRepeatQuiz={onRepeatQuiz}
          />
        )}
      </Box>
    </>
  );
};

export default QuizPage;
