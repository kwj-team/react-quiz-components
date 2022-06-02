import { Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { QuizStage } from "../elements/Quiz.types";
import { QuizEnd } from "../elements/QuizEnd";
import { QuizResult } from "../elements/QuizResult";
import { Timer } from "../elements/Timer";
import QuizComponent from "../elements/QuizComponent";
import QuizStart from "../elements/QuizStart";
import isEqual from "lodash.isequal";
import { shuffle } from "lodash";

type QuizPageData = Pick<
  QuizData,
  | "title"
  | "description"
  | "showCorrectAnswers"
  | "showPoints"
  | "randomize"
  | "questions"
  | "media"
  | "numberOfAttempts"
  | "finalButton"
>;

interface QuizProps {
  quiz: QuizPageData;
  userContext: {
    attemptsTaken: number;
  };
  onFinish: () => void;
  onSaveResults?: (args: {answers: Answer[], questions: QuestionComponentData[], quiz: QuizData}) => void;
}

const QuizPage = ({ quiz, userContext, onFinish, onSaveResults }: QuizProps) => {
  const [stage, setStage] = useState(QuizStage.QuizStart);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [questions, setQuestions] = useState(quiz.questions);

  const onRepeatQuiz = () => {
    setStage(QuizStage.QuizStart);
    setSeconds(0);
  };

  const remainingAttempts = quiz.numberOfAttempts - userContext.attemptsTaken;

  useEffect(() => {
    if (quiz.randomize) {
      const shuffledQuestions = shuffle(quiz.questions);
      const shuffledQuestionsAndAnswers = shuffledQuestions.map((question) => ({
        ...question,
        answers: shuffle(question.answers),
      }));
      setQuestions(shuffledQuestionsAndAnswers);
    }
  }, [quiz.randomize, quiz.questions]);

  const sumOfUserPoints = useMemo(() => {
    const correctAnswers = questions.map((question) => {
      return question.answers
        .filter((answer) => answer.isCorrect === true)
        .map((answer) => answer.key);
    });
    let userPoints = 0;
    for (let i = 0; i < questions.length; i++) {
      if (!answers[i]) {
        return userPoints;
      }
      if (isEqual(correctAnswers[i], answers[i].value)) {
        userPoints = userPoints + questions[i].question.points;
      }
    }
    return userPoints;
  }, [answers, questions]);

  const sumOfPoints = useMemo(
    () =>
      questions.reduce((prev, current) => prev + current.question.points, 0),
    [questions]
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
      if (onSaveResults) {
        onSaveResults({ answers: answers || [], questions, quiz })
      }

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
          media={quiz.media}
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
          <QuizComponent
            quiz={quiz}
            onFinishQuiz={onNextStep}
            questions={questions}
          />
        )}
        {stage === QuizStage.AnswersReview && (
          <QuizResult
            sumOfUserPoints={sumOfUserPoints}
            sumOfPoints={sumOfPoints}
            seconds={seconds}
            quiz={quiz}
            answers={answers}
            onNextStep={onNextStep}
            questions={questions}
          />
        )}
        {stage === QuizStage.End && (
          <QuizEnd
            remainingAttempts={remainingAttempts}
            // isRepeatable={quiz.isRepeatable}
            finalButton={quiz.finalButton}
            onFinish={onFinish}
            onRepeatQuiz={onRepeatQuiz}
          />
        )}
      </Box>
    </>
  );
};

export default QuizPage;
