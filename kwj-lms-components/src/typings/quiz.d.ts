type QuizData = {
  title: string;
  description: string;
  showCorrectAnswers: boolean;
  showPoints: boolean;
  randomize: boolean;
  media?: {
    url: string;
    height?: number;
    width?: number;
    mime?: string;
  };
  numberOfAttempts: number;
  finalButton?: {
    label: string;
  };

  questions: QuestionComponentData[];
};

type Result = {
  quiz: QuizData;
  answers: Answer[];
  quizResultTitle?: string;
  seconds: number;
  sumOfUserPoints: number;
  sumOfPoints: number;
  questions: QuizData["questions"];
}

type StrapiQuizResult = {
  quiz: number;
  points: number;
  percentScore: number;
  totalPoints: number;
  attempts: number;
  answers: Answer[];
  questions: QuestionComponentData[];
}

type QuestionComponentData = SingleChoiceQuestionData | MultiChoiceQuestionData;

type SingleChoiceQuestionData = {
  question: QuestionData;

  answers: {
    key: string;
    text: string;
    isCorrect: boolean;
  }[];
} & ({ __typename: "ComponentKwjComponentsSingleChoiceQuestion", __component?: never } | { __typename?: never, __component: "kwj-components.single-choice-question" });

type MultiChoiceQuestionData = {
  question: QuestionData;

  answers: {
    key: string;
    text: string;
    isCorrect: boolean;
  }[];
} & ({ __typename: "ComponentKwjComponentsMultiChoiceQuestion", __component?: never } | { __typename?: never, __component: "kwj-components.multi-choice-question" });

type QuestionData = {
  title: string;
  description: string;
  points: number;
  isAnswerRequired?: boolean;
  media?: {
    url: string;
    height?: number;
    width?: number;
    mime?: string;
  };
};

interface Answer {
  value: any[];
  isFilled?: boolean;
}

// type MediaData = {
//   id: string | number;
//   attributes: {
//     alternativeText?: string;
//     mime: string;
//     url: string;
//   };
// };

// type LargeVideoData = {
//   __typename: "ComponentSectionsLargeVideo";
//   media: MediaData;
//   poster?: MediaData;
//   title: string;
//   description: string;
// };

// type RichTextData = {
//   __typename: "ComponentSectionsRichText";
//   content: string;
// };

// type LargeImageData = {
//   __typename: "ComponentSectionsLargeImage";
//   media: MediaData;
//   title: string;
//   description: string;
//   width?: number | string;
//   height?: number | string;
// };

// type CourseData = {
//   title?: string;
//   description?: string;
//   courseSections: CourseComponentData[];
// };
// type CourseComponentData = LargeVideoData | LargeImageData | RichTextData;
