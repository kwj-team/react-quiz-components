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
  // isRepeatable: true,
  numberOfAttempts: 1,
  title: "Quiz about Strapi CMS",
  description:
    "Check how well you know the leading headless CMS - Strapi Ecosystem. Select correct answers and check the test result.",
  finalButton: {
    label: "Go to the ... ",
  },
  questions: [
    {
      __typename: "ComponentElementsQuestionMultipleAnswer",
      question: {
        title: "Select correct answers about Strapi CMS",
        description: "Select all correct answers",
        points: 3,
        isAnswerRequired: true,
        media: {
          url: "/uploads//quizcomponent_85dfa22985.png",
          height: 300,
          mime: "image/png",
        },
      },
      answers: [
        {
          key: "1",
          isCorrect: true,
          text: "Strapi is the open-source headless CMS",
        },
        {
          key: "2",
          isCorrect: false,
          text: "You can use only RESTful API to query your content",
        },
        {
          key: "3",
          isCorrect: false,
          text: "Strapi isn't open-source",
        },
        {
          key: "4",
          isCorrect: true,
          text: "Strapi is fully customizable",
        },
        {
          key: "5",
          isCorrect: true,
          text: "You can use a standard RESTful API or GraphQL to query your content",
        },
      ],
    },
    {
      __typename: "ComponentElementsQuestionSingleAnswer",
      question: {
        title: "Can you add your own plugin to Strapi Market?",
        description: "Select the correct answer",
        points: 1,
        isAnswerRequired: true,
        media: {
          url: "/uploads/screencast_market_strapi_io_2022_05_31_19_18_57_f42a00af57.webm",
          height: 300,
          mime: "video/webm",
        },
      },
      answers: [
        {
          key: "5",
          isCorrect: true,
          text: "Yes, I can",
        },
        {
          key: "6",
          isCorrect: false,
          text: "No, I can't",
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
    attemptsTaken: 0,
  },
};
