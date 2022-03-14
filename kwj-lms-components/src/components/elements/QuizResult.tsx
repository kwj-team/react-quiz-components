import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { formatSeconds } from "./Timer";
import MultipleQuestion from './MultipleQuestion';
import SingleQuestion from './SingleQuestion';

type QuizResultData = Pick<QuizData,
    "title" | "description" | "showCorrectAnswers"
    | "showPoints" | "randomize" | "questions">

interface QuizResultProps {
    onNextStep: () => void

    quiz: QuizResultData
    answers: Answer[]
    quizResultTitle?: string
    seconds: number
}

export const QuizResult = ({ quiz, answers, quizResultTitle, seconds, onNextStep }: QuizResultProps) => {
    const { t, i18n } = useTranslation();

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "30px"
        }}>

            <Typography sx={{
                textAlign: "center",
            }} variant="h4">{quizResultTitle || t("quiz.quizResult.title")}</Typography>
            <Typography variant="h6">Your time to complete the quiz: {formatSeconds(seconds)}</Typography>
            {quiz.questions.map((question, i) => getComponent(question, answers[i], i))}
            <Box gap={1} marginTop={3} display="flex" justifyContent="flex-end" >
                <Button variant="contained" size="large" onClick={onNextStep}>{t("quiz.button.label.next")}</Button>
            </Box >
        </Box >
    );
};

function getComponent(question: QuestionComponentData, userAnswer: Answer | undefined, index: number) {
    switch (question.__typename) {
        case "ComponentElementsQuestionMultipleAnswer":
            return <Card sx={{ width: 800, margin: "0 auto" }}>
                <CardContent><MultipleQuestion index={index} showAnswers userAnswer={userAnswer && userAnswer.value} question={question} /></CardContent></Card>
        case "ComponentElementsQuestionSingleAnswer":
            return <Card sx={{ width: 800, margin: "0 auto" }}>
                <CardContent><SingleQuestion index={index} showAnswers userAnswer={userAnswer && userAnswer.value} question={question} /></CardContent></Card>
        default:
            return null
    }
} 