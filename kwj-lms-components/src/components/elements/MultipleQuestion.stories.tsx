import { ComponentMeta, ComponentStory } from "@storybook/react";
import { findAllByTestId } from "@testing-library/react";
import MultipleQuestion from "./MultipleQuestion";

export default { title: 'components/elements/multiple-question', component: MultipleQuestion } as ComponentMeta<typeof MultipleQuestion>

const multipleQuestionProps = {
    __typename: "ComponentElementsQuestionMultipleAnswer",
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
} as MultiQuestionData;

const Template: ComponentStory<typeof MultipleQuestion> = (args) => <MultipleQuestion {...args} />

export const DefaultMultipleQuestion = Template.bind({})
DefaultMultipleQuestion.args = { question: multipleQuestionProps, userAnswer: [] }

export const SingleWrongAnswer = Template.bind({})
SingleWrongAnswer.args = {
    question: multipleQuestionProps,
    userAnswer: ["random4"],
    showAnswers: true
}
export const AllCorrectAnswers = Template.bind({})
AllCorrectAnswers.args = {
    question: multipleQuestionProps,
    userAnswer: ["random1", "random2", "random3"],
    showAnswers: true
}
export const WrongAndCorrectAnswers = Template.bind({})
WrongAndCorrectAnswers.args = {
    question: multipleQuestionProps,
    userAnswer: ["random2", "random3", "random4"],
    showAnswers: true
}