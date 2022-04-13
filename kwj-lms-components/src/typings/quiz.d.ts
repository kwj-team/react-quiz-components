type QuizData = {
  title: string;
  description: string;
  showCorrectAnswers: boolean;
  showPoints: boolean;
  randomize: boolean;
  // isRepeatable?: boolean;
  numberOfAttempts: number;
  finalButton?: {
    label: string;
  };

  questions: QuestionComponentData[];
};

type QuestionComponentData = SingleChoiceQuestionData | MultiChoiceQuestionData;

type SingleChoiceQuestionData = {
  __typename: "ComponentElementsQuestionSingleAnswer";
  question: QuestionData;

  answers: {
    key: string;
    text: string;
    isCorrect: boolean;
  }[];
};

type MultiChoiceQuestionData = {
  __typename: "ComponentElementsQuestionMultipleAnswer";
  question: QuestionData;

  answers: {
    key: string;
    text: string;
    isCorrect: boolean;
  }[];
};

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
  isFilled: boolean;
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
