import { ComponentMeta, ComponentStory } from "@storybook/react";
import QuizStart from "./QuizStart";

export default { title: 'components/sections/quiz', component: QuizStart } as ComponentMeta<typeof QuizStart>

const QuizStartProps = {
    title: "Quiz sprawdzający wiedzę o KPI",
    description: "Quiz dotyczy najważniejszych wskaźników efektywności w przedsiębiorstwie. Zaznacz prawidłowe odpowiedzi i sprawdź wynik testu.",
};
const Template: ComponentStory<typeof QuizStart> = (args) => <QuizStart {...args} />

export const QuizStartView = Template.bind({})
QuizStartView.args = QuizStartProps
