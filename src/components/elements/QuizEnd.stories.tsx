import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QuizEnd } from "./QuizEnd";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

export default {
    title: 'components/elements/quizend', component: QuizEnd,
} as ComponentMeta<typeof QuizEnd>

const quizEndProps = {
    // quizEndingText: "Thank you for taking the quiz!",
};
const Template: ComponentStory<typeof QuizEnd> = (args) => <QuizEnd {...args} />

export const QuizEndView = Template.bind({})
QuizEndView.args = quizEndProps 