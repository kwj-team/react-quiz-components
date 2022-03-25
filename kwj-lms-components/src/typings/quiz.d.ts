type QuizData = {
  title: string;
  description: string;
  points: number;
  showCorrectAnswers: boolean;
  showPoints: boolean;
  randomize: boolean;
  isRepeatable?: boolean;
  numberOfAttempts?: number;
  finalButton?: {
    url: string;
    label: string;
  };

  questions: QuestionComponentData[];
};

type QuestionComponentData = SingleChoiceQuestionData | MultiChoiceQuestionData;

type SingleChoiceQuestionData = {
  question: QuestionData;
  __typename: "ComponentElementsQuestionSingleAnswer";

  answers: {
    key: string;
    text: string;
    isCorrect: boolean;
  }[];
};

type MultiChoiceQuestionData = {
  question: QuestionData;
  __typename: "ComponentElementsQuestionMultipleAnswer";

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
};

interface Answer {
  value: any;
  isFilled: boolean;
}

type MediaData = {
  id: string | number;
  attributes: {
    alternativeText?: string;
    mime: string;
    url: string;
  };
};

type LargeVideoData = {
  __typename: "ComponentSectionsLargeVideo";
  media: MediaData;
  poster?: MediaData;
  title: string;
  description: string;
};

type RichTextData = {
  __typename: "ComponentSectionsRichText";
  content: string;
};

type LargeImageData = {
  __typename: "ComponentSectionsLargeImage";
  media: MediaData;
  title: string;
  description: string;
  width?: number | string;
  height?: number | string;
};

type CourseData = {
  title?: string;
  description?: string;
  courseSections: CourseComponentData[];
};
type CourseComponentData = LargeVideoData | LargeImageData | RichTextData;
