import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { formatSeconds } from "./Timer";
import MultiChoiceQuestion from "./MultiChoiceQuestion";
import SingleChoiceQuestion from "./SingleChoiceQuestion";
import isEqual from "lodash.isequal";

interface QuizResultProps {
  onNextStep: () => void;

  quiz: QuizData;
  answers: Answer[];
  quizResultTitle?: string;
  seconds: number;
  sumOfUserPoints: number;
  sumOfPoints: number;
  questions: QuizData["questions"];
}

export const QuizResult = ({
  quiz,
  answers,
  quizResultTitle,
  seconds,
  onNextStep,
  sumOfUserPoints,
  sumOfPoints,
  questions,
}: QuizResultProps) => {
  const { t } = useTranslation();
  const result = (sumOfUserPoints / sumOfPoints) * 100;
  const percentageResult = `${result}%`;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "30px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
        }}
        variant="h4"
      >
        {quizResultTitle || t("quiz.quizResult.title")}
      </Typography>
      <Typography variant="h6">
        Your time to complete the quiz: {formatSeconds(seconds)}
      </Typography>
      <Typography variant="h6">
        Your result: {sumOfUserPoints}/{sumOfPoints} points ({percentageResult})
      </Typography>
      {questions.map((question, i) => getComponent(question, answers[i], i))}
      <Box gap={1} marginTop={3} display="flex" justifyContent="flex-end">
        <Button variant="contained" size="large" onClick={onNextStep}>
          {t("quiz.button.label.next")}
        </Button>
      </Box>
    </Box>
  );
};

function getComponent(
  question: QuestionComponentData,
  userAnswer: Answer | undefined,
  index: number
) {
  const correctAnswers = question.answers
    .filter((answer) => answer.isCorrect === true)
    .map((answer) => answer.key);
  const userPoints =
    userAnswer && isEqual(correctAnswers, userAnswer.value)
      ? question.question.points
      : 0;

  console.log(userPoints);

  
  switch (question.__component) {
    case "kwj-quiz-components.multi-choice":
      return (
        <Card sx={{ width: 800, margin: "0 auto" }}>
          <CardContent>
            <MultiChoiceQuestion
              userPoints={userPoints}
              index={index}
              showAnswers
              userAnswer={userAnswer && userAnswer.value}
              question={question}
            />
          </CardContent>
        </Card>
      );
    case "kwj-quiz-components.single-choice-question":
      return (
        <Card sx={{ width: 800, margin: "0 auto" }}>
          <CardContent>
            <SingleChoiceQuestion
              userPoints={userPoints}
              index={index}
              showAnswers
              userAnswer={userAnswer && userAnswer.value}
              question={question}
            />
          </CardContent>
        </Card>
      );
  }

  switch (question.__typename) {
    case "ComponentKwjQuizComponentsMultiChoice":
      return (
        <Card sx={{ width: 800, margin: "0 auto" }}>
          <CardContent>
            <MultiChoiceQuestion
              userPoints={userPoints}
              index={index}
              showAnswers
              userAnswer={userAnswer && userAnswer.value}
              question={question}
            />
          </CardContent>
        </Card>
      );
    case "ComponentKwjQuizComponentsSingleChoice":
      return (
        <Card sx={{ width: 800, margin: "0 auto" }}>
          <CardContent>
            <SingleChoiceQuestion
              userPoints={userPoints}
              index={index}
              showAnswers
              userAnswer={userAnswer && userAnswer.value}
              question={question}
            />
          </CardContent>
        </Card>
      );
    default:
      return null;
  }
}
