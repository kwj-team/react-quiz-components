import { Box, Typography } from '@mui/material'
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
            <Typography
                // sx={{
                //     marginBottom: 3,
                //     fontWeight: "bold",
                // }}
                variant="h4"  >{quizResultTitle || t("quiz.quizResult.title")}</Typography>
            {
                quiz.questions.map((question, i) => getComponent(question, answers[i], i))
            }
        </Box >
    );
};

function getComponent(question: QuestionComponentData, userAnswer: Answer | undefined, index: number) {
    switch (question.__typename) {
        case "ComponentElementsQuestionMultipleAnswer":
            return <MultipleQuestion index={index} showAnswers userAnswer={userAnswer && userAnswer.value} question={question} />
        case "ComponentElementsQuestionSingleAnswer":
            return <SingleQuestion index={index} showAnswers userAnswer={userAnswer && userAnswer.value} question={question} />
        default:
            return null
    }
} 