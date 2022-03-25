import { ComponentMeta, ComponentStory } from "@storybook/react";
import SingleChoiceQuestion from "./SingleChoiceQuestion";

export default { title: 'components/elements/single-question', component: SingleChoiceQuestion } as ComponentMeta<typeof SingleChoiceQuestion>

const SingleChoiceQuestionProps = {
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
} as SingleChoiceQuestionData;

const Template: ComponentStory<typeof SingleChoiceQuestion> = (args) => <SingleChoiceQuestion {...args} />

export const DefaultSingleChoiceQuestion = Template.bind({})
DefaultSingleChoiceQuestion.args = { question: SingleChoiceQuestionProps, userAnswer: "" }

export const WrongAnswer = Template.bind({})
WrongAnswer.args = {
    question: SingleChoiceQuestionProps,
    userAnswer: "prawda",
    showAnswers: true
}
export const CorrectAnswer = Template.bind({})
CorrectAnswer.args = {
    question: SingleChoiceQuestionProps,
    userAnswer: "fałsz",
    showAnswers: true
}
