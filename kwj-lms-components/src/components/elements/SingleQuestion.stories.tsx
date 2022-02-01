import { ComponentMeta, ComponentStory } from "@storybook/react";
import SingleQuestion from "./SingleQuestion";

export default { title: 'components/elements/single-question', component: SingleQuestion } as ComponentMeta<typeof SingleQuestion>

const singleQuestionProps = {
    __typename: "ComponentElementsQuestionSingleAnswer",
    question: {
        title: "Czy to jest prawda?",
        description: "Zaznacz prawda/fałsz ",
        points: 1
    },
    answers: [
        {
            key: "prawda",
            isCorrect: true,
            text: "prawda"
        },
        {
            key: "fałsz",
            isCorrect: false,
            text: "fałsz"
        }
    ]
} as SingleQuestionData;

const Template: ComponentStory<typeof SingleQuestion> = (args) => <SingleQuestion {...args} />

export const DefaultSingleQuestion = Template.bind({})
DefaultSingleQuestion.args = { question: singleQuestionProps, userAnswer: "" }

export const WrongAnswer = Template.bind({})
WrongAnswer.args = {
    question: singleQuestionProps,
    userAnswer: "prawda",
    showAnswers: true
}
export const CorrectAnswer = Template.bind({})
CorrectAnswer.args = {
    question: singleQuestionProps,
    userAnswer: "fałsz",
    showAnswers: true
}
