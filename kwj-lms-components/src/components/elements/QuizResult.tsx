import { Box, Card, CardContent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import MultipleQuestion from './MultipleQuestion';
import SingleQuestion from './SingleQuestion';


type QuizResultData = Pick<QuizData,
    "title" | "description" | "showCorrectAnswers"
    | "showPoints" | "randomize" | "questions">

interface QuizResultProps {
    quiz: QuizResultData
    answers: Answer[]
    quizResultTitle?: string
}

export const QuizResult = ({ quiz, answers, quizResultTitle }: QuizResultProps) => {
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
            {quiz.questions.map((question, i) => getComponent(question, answers[i], i))}
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