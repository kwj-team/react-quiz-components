import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect } from "react";
import { QuizFooter } from "./QuizFooter";
import { useTranslation } from 'react-i18next';

export default {
    title: 'components/elements/quizfooter',
    component: QuizFooter,
    decorators: [(Story) => {
        const { i18n } = useTranslation();

        useEffect(() => {
            i18n.changeLanguage("de")

            return () => {
                i18n.changeLanguage("en")
            }
        }, [])

        return <Story />
    }]
} as ComponentMeta<typeof QuizFooter>

const quizFooterProps = {
    prevLabel: "Back",
    nextLabel: "Next",
};
const Template: ComponentStory<typeof QuizFooter> = (args) => {
    return <QuizFooter {...args} />;
}

export const DefaultQuizFooter = Template.bind({})
DefaultQuizFooter.args = quizFooterProps

export const DrugaHistoria = Template.bind({})
DefaultQuizFooter.args = quizFooterProps