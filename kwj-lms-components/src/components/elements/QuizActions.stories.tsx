import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect } from "react";
import { QuizActions } from "./QuizActions";
import { useTranslation } from 'react-i18next';

export default {
    title: 'components/elements/quizactions',
    component: QuizActions,
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
} as ComponentMeta<typeof QuizActions>

const quizActionsProps = {
    prevLabel: "Back",
    nextLabel: "Next",
};
const Template: ComponentStory<typeof QuizActions> = (args) => {
    return <QuizActions {...args} />;
}

export const DefaultQuizActions = Template.bind({})
DefaultQuizActions.args = quizActionsProps

export const DrugaHistoria = Template.bind({})
DefaultQuizActions.args = quizActionsProps