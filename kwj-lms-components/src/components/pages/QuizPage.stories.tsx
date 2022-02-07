import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect } from "react";
import QuizPage from "./QuizPage";
import { useTranslation } from 'react-i18next';

export default {
    title: 'components/sections/quiz', component: QuizPage, decorators: [(Story) => {
        const { i18n } = useTranslation();
        console.log("Wykonał się kod dekoratora")

        useEffect(() => {
            i18n.changeLanguage("de")
            console.log("Zmieniło język na Niemiecki")

            return () => {
                i18n.changeLanguage("en")
                console.log("Zmieniło język na Angielski")
            }
        }, [])

        return <Story />
    }]
} as ComponentMeta<typeof QuizPage>

const quizPageProps = {
    showCorrectAnswers: false,
    title: "Quiz sprawdzający wiedzę o KPI",
    description: "Quiz dotyczy najważniejszych wskaźników efektywności w przedsiębiorstwie. Zaznacz prawidłowe odpowiedzi i sprawdź wynik testu.",
    questions: [{
        __typename: "ComponentElementsQuestionMultipleAnswer",
        question: {
            title: "Czy to jest prawda?",
            description: "Zaznacz prawda/fałsz ",
            points: 1,
            isAnswerRequired: true
        },
        answers: [
            {
                key: "true",
                isCorrect: true,
                text: "prawda"
            },
            {
                key: "false",
                isCorrect: false,
                text: "fałsz"
            }
        ]
    }, {
        __typename: "ComponentElementsQuestionSingleAnswer",
        question: {
            title: "Czy to jest prawda?",
            description: "Zaznacz prawda/fałsz ",
            points: 1,
            isAnswerRequired: true
        },
        answers: [
            {
                key: "true1",
                isCorrect: true,
                text: "prawda"
            },
            {
                key: "false1",
                isCorrect: false,
                text: "fałsz"
            }
        ]
    }, {
        __typename: "ComponentElementsQuestionSingleAnswer",
        question: {
            title: "Czy to jest prawda?",
            description: "Zaznacz prawda/fałsz ",
            points: 1,
            isAnswerRequired: true
        },
        answers: [
            {
                key: "true2",
                isCorrect: true,
                text: "prawda"
            },
            {
                key: "false2",
                isCorrect: false,
                text: "fałsz"
            }
        ]
    }]
};
const Template: ComponentStory<typeof QuizPage> = (args) => <QuizPage {...args} />

export const DefaultQuizPage = Template.bind({})
DefaultQuizPage.args = { quiz: quizPageProps }
