import { Story } from "@storybook/api";
import { useState } from "react";
import { QuizResult } from "../components/elements/QuizResult";
import { strapiApi } from "./strapiApi";

const quizData: QuizData = {
  showCorrectAnswers: true,
  showPoints: true,
  randomize: true,
  numberOfAttempts: 1,
  title: "Quiz sprawdzający wiedzę o KPI",
  description:
    "Quiz dotyczy najważniejszych wskaźników efektywności w przedsiębiorstwie. Zaznacz prawidłowe odpowiedzi i sprawdź wynik testu.",
  questions: [
    {
      __typename: "ComponentKwjComponentsMultiChoiceQuestion",
      question: {
        title: "Jakie powinny być KPIs?",
        description:
          "To pytanie wielokrotnego wyboru. Może być więcej niż jedna prawidłowa odpowiedź.",
        points: 2,
      },
      answers: [
        {
          key: "random1",
          isCorrect: true,
          text: "zorientowane na przyszłość",
        },
        {
          key: "random2",
          isCorrect: true,
          text: "zrozumiałe dla całej organizacji",
        },
        {
          key: "random3",
          isCorrect: true,
          text: "mierzone możliwie często, np. w cyklu dziennym",
        },
        {
          key: "random4",
          isCorrect: false,
          text: "uniwersalne dla wszystkich organizacji",
        },
      ],
    },
    {
      __typename: "ComponentKwjComponentsSingleChoiceQuestion",
      question: {
        title: "Jakie powinny być KPIs?",
        description:
          "To pytanie wielokrotnego wyboru. Może być więcej niż jedna prawidłowa odpowiedź.",
        points: 2,
      },
      answers: [
        {
          key: "random1",
          isCorrect: true,
          text: "zorientowane na przyszłość",
        },
        {
          key: "random2",
          isCorrect: true,
          text: "zrozumiałe dla całej organizacji",
        },
        {
          key: "random3",
          isCorrect: true,
          text: "mierzone możliwie często, np. w cyklu dziennym",
        },
        {
          key: "random4",
          isCorrect: false,
          text: "uniwersalne dla wszystkich organizacji",
        },
      ],
    },
  ],
};

export default {
  title: "functions/storeResults",
};

const Template = (res: Result) => {
  const [storeResponse, setStoreResponse] = useState<StrapiQuizResult>();
  const onStoreData = () => {
    const result: StrapiQuizResult = {
      answers: res.answers,
      points: res.sumOfUserPoints,
      percentScore: res.sumOfUserPoints / res.sumOfPoints,
      questions: res.questions,
      quiz: (res.quiz as any).id,
      totalPoints: res.sumOfPoints,
      attempts: 1,
    };

    strapiApi
      .storeResults(result)
      .then((response) => setStoreResponse(response.data.attributes));
  };

  return (
    <div>
      {storeResponse && <pre>{JSON.stringify(storeResponse)}</pre>}
      <button onClick={onStoreData}>Store data to strapi</button>
      <QuizResult {...(res as any)} />
    </div>
  );
};

const defaultAnswers = [
  { value: ["random1", "random2"] },
  { value: ["random3", "random4"] },
];

export const StoreProperResults: any = Template.bind({});
StoreProperResults.args = {
  quiz: quizData,
  answers: defaultAnswers,
  questions: quizData.questions,
  seconds: 10,
  sumOfPoints: 10,
  sumOfUserPoints: 1,
};
