import { ComponentMeta, ComponentStory } from "@storybook/react";
import Question from "./Question";

export default { title: 'components/elements/question', component: Question } as ComponentMeta<typeof Question>

const simpleQuestionProps = {
    title: "Czy to jest prawda?",
    description: "Zaznacz prawda/fałsz ",
    points: 1
};
const Template: ComponentStory<typeof Question> = (args) => <Question {...args} />

export const SimpleQuestion = Template.bind({})
SimpleQuestion.args = { question: simpleQuestionProps, index: 1 }
