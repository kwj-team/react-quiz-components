import { ComponentMeta, ComponentStory } from "@storybook/react";
// import { useEffect } from "react";
import QuizPage from "./QuizPage";
// import { useTranslation } from 'react-i18next';

export default {
  title: "components/sections/quiz",
  component: QuizPage,
  decorators: [
    (Story) => {
      // const { i18n } = useTranslation();
      console.log("Wykonał się kod dekoratora");

      // useEffect(() => {
      //     // i18n.changeLanguage("de")
      //     // console.log("Zmieniło język na Niemiecki")

      //     return () => {
      //         i18n.changeLanguage("en")
      //         console.log("Zmieniło język na Angielski")
      //     }
      // }, [])

      return <Story />;
    },
  ],
} as ComponentMeta<typeof QuizPage>;

const quizPageProps: QuizData = {
  showCorrectAnswers: true,
  randomize: true,
  showPoints: true,
  isRepeatable: true,
  numberOfAttempts: 3,
  title: "Quiz about KPI",
  description:
    "The quiz deals with the most important performance indicators in the enterprise. Select correct answers and check the test result.",
  finalButton: {
    url: "/",
    label: "Go to the ... ",
  },
  questions: [
    {
      __typename: "ComponentElementsQuestionMultipleAnswer",
      question: {
        title: "Is it true?",
        description: "Select all correct answers",
        points: 3,
        isAnswerRequired: true,
      },
      answers: [
        {
          key: "1",
          isCorrect: true,
          text: "true answer",
        },
        {
          key: "2",
          isCorrect: false,
          text: "false answer",
        },
        {
          key: "3",
          isCorrect: false,
          text: "false answer",
        },
        {
          key: "4",
          isCorrect: true,
          text: "true answer",
        },
      ],
    },
    {
      __typename: "ComponentElementsQuestionSingleAnswer",
      question: {
        title: "Which sentence is true?",
        description: "Select the correct answer",
        points: 1,
        isAnswerRequired: true,
      },
      answers: [
        {
          key: "5",
          isCorrect: true,
          text: "true answer",
        },
        {
          key: "6",
          isCorrect: false,
          text: "false answer",
        },
      ],
    },
    {
      __typename: "ComponentElementsQuestionSingleAnswer",
      question: {
        title: "Which sentence is true?",
        description: "Select the correct answer",
        points: 1,
        isAnswerRequired: true,
      },
      answers: [
        {
          key: "7",
          isCorrect: true,
          text: "true answer",
        },
        {
          key: "8",
          isCorrect: false,
          text: "false answer",
        },
      ],
    },
  ],
};
const Template: ComponentStory<typeof QuizPage> = (args) => (
  <QuizPage {...args} />
);

export const DefaultQuizPage = Template.bind({});
DefaultQuizPage.args = {
  quiz: quizPageProps,
  userContext: {
    attemptsTaken: 3,
  },
};
