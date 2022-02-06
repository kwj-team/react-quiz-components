import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import MultipleQuestion from './MultipleQuestion';
import SingleQuestion from './SingleQuestion';

type QuizResultData = Pick<QuizData,
    "title" | "description" | "showCorrectAnswers"
    | "showPoints" | "randomize" | "questions" | "isAnswerRequired">

interface QuizResultProps {
    quiz: QuizResultData
    answers: Answer[]
}

export const QuizResult = ({ quiz, answers }: QuizResultProps) => {
    const { t, i18n } = useTranslation();

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "30px"
        }}>
            {
                quiz.questions.map((question, i) => getComponent(question, answers[i])
                )
            }
        </Box >
    );
};

function getComponent(question: QuestionComponentData, userAnswer: Answer | undefined) {
    switch (question.__typename) {
        case "ComponentElementsQuestionMultipleAnswer":
            return <MultipleQuestion showAnswers userAnswer={userAnswer && userAnswer.value} question={question} />
        case "ComponentElementsQuestionSingleAnswer":
            return <SingleQuestion showAnswers userAnswer={userAnswer && userAnswer.value} question={question} />
        default:
            return null
    }
} 