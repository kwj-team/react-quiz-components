import { Box, Alert, Stack, Card, CardContent, } from '@mui/material'
import { useMemo, useState } from 'react';
import MultipleQuestion from '../elements/MultipleQuestion';
import { QuizActions } from '../elements/QuizActions';
import SingleQuestion from '../elements/SingleQuestion';
import { useTranslation } from 'react-i18next'
import { QuizResult } from '../elements/QuizResult';
import { QuizEnd } from '../elements/QuizEnd';
import { QuizStage } from '../elements/Quiz.types';

type QuizPageData = Pick<QuizData,
    "title" | "description" | "showCorrectAnswers"
    | "showPoints" | "randomize" | "questions" | "isRepeatable" | "numberOfAttempts" | "finalButton">

interface QuizProps {
    quiz: QuizPageData
}

const QuizPage = ({ quiz }: QuizProps) => {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState<Answer[]>([])
    const [error, setError] = useState("")
    const question = quiz.questions[step]
    const { t } = useTranslation();

    const stage = useMemo(() => {
        if (step == 0) {
            return QuizStage.FirstQuestion
        }
        if (step === quiz.questions.length - 1) {
            return QuizStage.LastQuestion
        }
        if (step === quiz.questions.length && quiz.showCorrectAnswers) {
            return QuizStage.AnswersReview
        }

        const isEndStep = (step === quiz.questions.length && !quiz.showCorrectAnswers) ||
            step > quiz.questions.length;

        if (quiz.isRepeatable && isEndStep) {
            return QuizStage.EndRepeat
        }

        if (isEndStep) {
            return QuizStage.End
        }

        return QuizStage.Normal
    }, [step, quiz])

    const nextStep = () => {
        if (stage === QuizStage.EndRepeat) {
            setStep(0)
            setAnswers([])
            return;
        }

        if (
            !question || !question.question.isAnswerRequired ||
            answers[step] && answers[step].isFilled
        ) {
            // if (stage === QuizStage.LastQuestion) {
            //     console.log("wyslij na backend odpowiedzi")
            // }

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


    const component = question && getComponent(question, answers[step], step, setAnswer)

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", width: 800, margin: "0 auto"

        }} >
        //to wyciągnąć jako osobny komponent do section
            {component && <><Card sx={{ width: 800, margin: "0 auto" }}>
                <CardContent>

                    {error &&
                        <Stack sx={{ marginBottom: 3, marginTop: 2, display: "flex", justifyContent: "flexEnd" }} spacing={2}>
                            <Alert severity="error">{t(error)}</Alert>
                        </Stack>
                    }


                    {component}
                </CardContent>
            </Card>

            </>}

            {stage === QuizStage.AnswersReview && <QuizResult quiz={quiz} answers={answers} />}
            {(stage === QuizStage.End || stage === QuizStage.EndRepeat) && <QuizEnd />}

            <QuizActions
                stage={stage}
                prevDisabled={stage === QuizStage.FirstQuestion || stage === QuizStage.AnswersReview}
                onNextClick={nextStep}
                onPrevClick={prevStep}
                finalButton={quiz.finalButton}
            />
        </Box>

    );
};

export default QuizPage;

function getComponent(question: QuestionComponentData, userAnswer: Answer | undefined, index: number, setAnswer: (answer: Answer) => void) {
    switch (question.__typename) {
        case "ComponentElementsQuestionMultipleAnswer":
            return <MultipleQuestion index={index} userAnswer={userAnswer && userAnswer.value} question={question} onChange={setAnswer} />
        case "ComponentElementsQuestionSingleAnswer":
            return <SingleQuestion index={index} userAnswer={userAnswer && userAnswer.value} question={question} onChange={setAnswer} />
        default:
            return null
    }
} 