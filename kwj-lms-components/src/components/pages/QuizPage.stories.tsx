import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import { getQuiz } from "../../hooks/strapiApi";
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
  numberOfAttempts: 1,
  title: "Quiz about Strapi CMS",
  description:
    "Check how well you know the leading headless CMS - Strapi Ecosystem. Select correct answers and check the test result.",
  media: {
    url: "/uploads/JPG_logo_purple_white_4724ea237e.jpg",
    height: 500,
    mime: "image/jpg",
  },
  finalButton: {
    label: "Go to the ... ",
  },
  questions: [
    {
      __typename: "ComponentKwjComponentsMultiChoiceQuestion",
      question: {
        title: "Select correct answers about Strapi CMS",
        description: "Select all correct answers",
        points: 3,
        isAnswerRequired: true,
        media: {
          url: "/uploads//quizcomponent_85dfa22985.png",
          height: 400,
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
      __typename: "ComponentKwjComponentsSingleChoiceQuestion",
      question: {
        title: "Can you add your own plugin to Strapi Market?",
        description: "Select the correct answer",
        points: 1,
        isAnswerRequired: true,
        media: {
          url: "/uploads/screencast_market_strapi_io_2022_05_31_19_18_57_f42a00af57.webm",
          height: 400,
          mime: "video/webm",
        },
      },
      answers: [
        {
          key: "6",
          isCorrect: true,
          text: "Yes, I can",
        },
        {
          key: "7",
          isCorrect: false,
          text: "No, I can not",
        },
      ],
    },
    {
      __typename: "ComponentKwjComponentsMultiChoiceQuestion",
      question: {
        title: "What modern technologies does the Strapi System work with?",
        description: "Select all correct answer",
        points: 1,
        isAnswerRequired: true,
        media: {
          url: "/uploads/3180754_a3ad6b52b7.jpg",
          height: 400,
          mime: "image/jpg",
        },
      },
      answers: [
        {
          key: "8",
          isCorrect: true,
          text: "React, Vue.js, Angular, Next.js, Gatsby, Svelte, Sapper, Hugo, Nuxt.js",
        },
        {
          key: "9",
          isCorrect: false,
          text: "Vue.js, Angular, Next.js",
        },
        {
          key: "10",
          isCorrect: false,
          text: "Next.js, Gatsby, Svelte, Sapper, Hugo, Nuxt.js",
        },
        {
          key: "11",
          isCorrect: false,
          text: "only Angular",
        },
        {
          key: "12",
          isCorrect: false,
          text: "only React",
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

export const QuizDataFromStrapi: ComponentStory<typeof QuizPage> = (args) => {
  const [quiz, setQuiz] = useState<QuizData>()

  useEffect(() => {
    (async function () {
      const quiz = await getQuiz(1)
      setQuiz(quiz)
    })()
  }, [])

  if (!quiz) {
    return <div>Loading</div>
  }

  return (<div>
    <Template {...args} quiz={quiz} />
  </div>);
};

QuizDataFromStrapi.args = {
  userContext: {
    attemptsTaken: 0,
  },
};
export const QuizDataFromStrapiWithSave = QuizDataFromStrapi.bind({})
QuizDataFromStrapiWithSave.args = {
  userContext: {
    attemptsTaken: 0,
  },
}

