import { Box, Alert, Stack, Card, CardContent, Button } from "@mui/material";
import MultiChoiceQuestion from "./MultiChoiceQuestion";
import SingleChoiceQuestion from "./SingleChoiceQuestion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

type QuizComponentData = Pick<
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

interface QuizComponentProps {
  quiz: QuizComponentData;
  onFinishQuiz: (answers: Answer[]) => void;
  questions: QuizData["questions"];
}
const QuizComponent = ({
  quiz,
  onFinishQuiz,
  questions,
}: QuizComponentProps) => {
  const [error, setError] = useState("");
  const [step, setStep] = useState(0);
  const question = questions[step];
  const { t } = useTranslation();

  const [answers, setAnswers] = useState<Answer[]>([]);
  const setAnswer = (answer: Answer) => {
    const newAnswers = [...answers];
    newAnswers[step] = answer;
    setAnswers(newAnswers);
    setError("");
  };
  const nextStep = () => {
    if (
      !question ||
      !question.question.isAnswerRequired ||
      (answers[step] && answers[step].isFilled)
    ) {
      if (step === quiz.questions.length - 1) {
        onFinishQuiz(answers);
        return;
      }
      setStep(step + 1);
    } else {
      const error = "quiz.question.requiredError";
      setError(error);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const component =
    question && getComponent(question, answers[step], step, setAnswer);

  // const randomQuestions = () => {
  //   let allQuestions = quiz.questions;
  //   for (let i = allQuestions.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  //   }
  // };

  return (
    <>
      {component && (
        <Card sx={{ width: 800, margin: "0 auto" }}>
          <CardContent>
            {error && (
              <Stack
                sx={{
                  marginBottom: 3,
                  marginTop: 2,
                  display: "flex",
                  justifyContent: "flexEnd",
                }}
                spacing={2}
              >
                <Alert severity="error">{t(error)}</Alert>
              </Stack>
            )}
            {component}
          </CardContent>
        </Card>
      )}
      <Box gap={1} marginTop={3} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          size="large"
          onClick={prevStep}
          disabled={step === 0}
        >
          {t("quiz.button.label.prev")}
        </Button>
        <Button variant="contained" size="large" onClick={nextStep}>
          {t("quiz.button.label.next")}
        </Button>
      </Box>
    </>
  );
};
function getComponent(
  question: QuestionComponentData,
  userAnswer: Answer | undefined,
  index: number,
  setAnswer: (answer: Answer) => void
) {
  switch (question.__typename) {
    case "ComponentElementsQuestionMultipleAnswer":
      return (
        <MultiChoiceQuestion
          index={index}
          userAnswer={userAnswer && userAnswer.value}
          question={question}
          onChange={setAnswer}
        />
      );
    case "ComponentElementsQuestionSingleAnswer":
      return (
        <SingleChoiceQuestion
          index={index}
          userAnswer={userAnswer && userAnswer.value}
          question={question}
          onChange={setAnswer}
        />
      );
    default:
      return null;
  }
}

export default QuizComponent;
