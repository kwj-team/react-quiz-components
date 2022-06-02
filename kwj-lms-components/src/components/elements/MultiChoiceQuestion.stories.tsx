import { ComponentMeta, ComponentStory } from "@storybook/react";
import MultiChoiceQuestion from "./MultiChoiceQuestion";

export default { title: 'components/elements/multiple-question', component: MultiChoiceQuestion } as ComponentMeta<typeof MultiChoiceQuestion>

const MultiChoiceQuestionProps = {
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
} as MultiChoiceQuestionData;

const Template: ComponentStory<typeof MultiChoiceQuestion> = (args) => <MultiChoiceQuestion {...args} />

export const DefaultMultiChoiceQuestion = Template.bind({})
DefaultMultiChoiceQuestion.args = { question: MultiChoiceQuestionProps, userAnswer: [] }

export const SingleWrongAnswer = Template.bind({})
SingleWrongAnswer.args = {
    question: MultiChoiceQuestionProps,
    userAnswer: ["random4"],
    showAnswers: true
}
export const AllCorrectAnswers = Template.bind({})
AllCorrectAnswers.args = {
    question: MultiChoiceQuestionProps,
    userAnswer: ["random1", "random2", "random3"],
    showAnswers: true
}
export const WrongAndCorrectAnswers = Template.bind({})
WrongAndCorrectAnswers.args = {
    question: MultiChoiceQuestionProps,
    userAnswer: ["random2", "random3", "random4"],
    showAnswers: true
}