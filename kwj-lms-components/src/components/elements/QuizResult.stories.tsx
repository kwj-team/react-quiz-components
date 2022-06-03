import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QuizResult } from "./QuizResult";

export default {
    title: 'components/elements/quizresult',
    component: QuizResult
} as ComponentMeta<typeof QuizResult>

const quizData: QuizData = {
    showCorrectAnswers: true, showPoints: true, randomize: true, numberOfAttempts: 1,
    title: "Quiz sprawdzający wiedzę o KPI",
    description: "Quiz dotyczy najważniejszych wskaźników efektywności w przedsiębiorstwie. Zaznacz prawidłowe odpowiedzi i sprawdź wynik testu.",
    questions: [{
        __typename: "ComponentKwjComponentsMultiChoiceQuestion",
        question: {
            title: "Jakie powinny być KPIs?",
            description: "To pytanie wielokrotnego wyboru. Może być więcej niż jedna prawidłowa odpowiedź.",
            points: 2
        },
        answers: [
            {
                key: "random1",
                isCorrect: true,
                text: "zorientowane na przyszłość"
            },
            {
                key: "random2",
                isCorrect: true,
                text: "zrozumiałe dla całej organizacji"
            },
            {
                key: "random3",
                isCorrect: true,
                text: "mierzone możliwie często, np. w cyklu dziennym"
            },
            {
                key: "random4",
                isCorrect: false,
                text: "uniwersalne dla wszystkich organizacji"
            }
        ]
    }, {
        __typename: "ComponentKwjComponentsSingleChoiceQuestion",
        question: {
            title: "Jakie powinny być KPIs?",
            description: "To pytanie wielokrotnego wyboru. Może być więcej niż jedna prawidłowa odpowiedź.",
            points: 2
        },
        answers: [
            {
                key: "random1",
                isCorrect: true,
                text: "zorientowane na przyszłość"
            },
            {
                key: "random2",
                isCorrect: true,
                text: "zrozumiałe dla całej organizacji"
            },
            {
                key: "random3",
                isCorrect: true,
                text: "mierzone możliwie często, np. w cyklu dziennym"
            },
            {
                key: "random4",
                isCorrect: false,
                text: "uniwersalne dla wszystkich organizacji"
            }
        ]
    }],
};

const Template: ComponentStory<typeof QuizResult> = (args) => {
    return <QuizResult {...args} />;
}

const defaultAnswers = [{ value: ["random1", "random2"] }, { value: ["random3", "random4"] }];
export const DefaultQuizResult = Template.bind({})
DefaultQuizResult.args = { quiz: quizData, answers: defaultAnswers, questions: quizData.questions, seconds: 10, sumOfPoints: 10, sumOfUserPoints: 1, quizResultTitle: "Test" }

