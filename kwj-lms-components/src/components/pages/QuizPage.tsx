import { Box, Alert, Stack } from '@mui/material'
import { useState } from 'react';
import MultipleQuestion from '../elements/MultipleQuestion';
import { QuizFooter } from '../elements/QuizFooter';
import SingleQuestion from '../elements/SingleQuestion';
import { useTranslation } from 'react-i18next'
import { QuizResult } from '../elements/QuizResult';
import { QuizEnd } from '../elements/QuizEnd';

type QuizPageData = Pick<QuizData,
    "title" | "description" | "showCorrectAnswers"
    | "showPoints" | "randomize" | "questions" | "isAnswerRequired">

interface QuizProps {
    quiz: QuizPageData
}

// const QuizPageAllInOne = ({ quiz }: QuizProps) => {
//     return (
//         <Box gap={0} display={"flex"} flexDirection={"column"}>
//             {quiz.Questions.map((question) => {
//                 switch (question.__typename) {
//                     case "ComponentElementsQuestionMultipleAnswer":
//                         return <MultipleQuestion question={question} />
//                     case "ComponentElementsQuestionSingleAnswer":
//                         return <SingleQuestion question={question} />
//                     default:
//                         return null
//                 }
//             })}

//             {/* <MultipleQuestion />
//             <QuizFooter /> */}
//         </Box>
//     );
// };



const QuizPage = ({ quiz }: QuizProps) => {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState<Answer[]>([])
    const [error, setError] = useState("")
    const question = quiz.questions[step]
    const { t } = useTranslation();
    const isLastStep = step === quiz.questions.length - 1;
    const isResultStep = step === quiz.questions.length;

    const nextStep = () => {
        if (
            !question.question.isAnswerRequired ||
            answers[step] && answers[step].isFilled
        ) {
            if (isLastStep) {
                console.log("wyslij na backend odpowiedzi")
            }

            setStep(step + 1)
        } else {
            const error = "quiz.question.requiredError"
            setError(error)
        }
    }


    const prevStep = () => {
        setStep(step - 1)
    }

    const setAnswer = (answer: Answer) => {
        const newAnswers = [...answers]
        newAnswers[step] = answer
        setAnswers(newAnswers)
        setError("")
    }

    const component = question && getComponent(question, answers[step], setAnswer)

    return (
        <Box gap={0} display={"flex"} flexDirection={"column"}>
            {error &&
                <Stack sx={{ mt: "10px", display: "flex", justifyContent: "flexEnd" }} spacing={2}>
                    <Alert severity="error">{t(error)}</Alert>
                </Stack>
            }
            {isResultStep && quiz.showCorrectAnswers && <QuizResult quiz={quiz} answers={answers} />}
            {isResultStep && !quiz.showCorrectAnswers && <QuizEnd />}
            {component}

            <QuizFooter
                prevDisabled={step === 0 || isResultStep}
                submitStep={isLastStep}
                onNextClick={nextStep}
                onPrevClick={prevStep}
            />

        </Box>
    );
};

export default QuizPage;

function getComponent(question: QuestionComponentData, userAnswer: Answer | undefined, setAnswer: (answer: Answer) => void) {
    switch (question.__typename) {
        case "ComponentElementsQuestionMultipleAnswer":
            return <MultipleQuestion userAnswer={userAnswer && userAnswer.value} question={question} onChange={setAnswer} />
        case "ComponentElementsQuestionSingleAnswer":
            return <SingleQuestion userAnswer={userAnswer && userAnswer.value} question={question} onChange={setAnswer} />
        default:
            return null
    }
} 