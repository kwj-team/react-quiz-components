import { ComponentMeta, ComponentStory } from "@storybook/react";
import StartQuiz from "./StartQuiz";

export default { title: 'components/sections/quiz', component: StartQuiz } as ComponentMeta<typeof StartQuiz>

const startQuizProps = {
    title: "Quiz sprawdzający wiedzę o KPI",
    description: "Quiz dotyczy najważniejszych wskaźników efektywności w przedsiębiorstwie. Zaznacz prawidłowe odpowiedzi i sprawdź wynik testu.",
};
const Template: ComponentStory<typeof StartQuiz> = (args) => <StartQuiz {...args} />

export const QuizStartView = Template.bind({})
QuizStartView.args = startQuizProps
