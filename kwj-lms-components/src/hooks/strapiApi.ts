import { useEffect } from "react";

interface StrapiQuizAPI {
    storeResults(result: Result): Promise<any>
    getQuiz(quizId: number): Promise<QuizData>
}

export const strapiApi = {
    strapiAddress: process.env.STRAPI_API_URL || "https://lms-strapi.kwjteam.com",

    storeResults,
    getQuiz
}

type StrapiResponse<T> = {
    data: {
        attributes: Omit<T, "id">,
        id: string
    },
    meta: object
}

export function getQuiz(quizId: number): Promise<QuizData> {
    return fetch(`${strapiApi.strapiAddress}/v1/quizzes/${quizId}?populate=questions,questions.answers,questions.question`, {
        method: "GET"
    }).then((res) => res.json()).then((response : StrapiResponse<QuizData>) => ({
        ...response.data.attributes,
        id: response.data.id
    }))
}


type Result = {
    quiz: QuizData;
    answers: Answer[];
    quizResultTitle?: string;
    seconds: number;
    sumOfUserPoints: number;
    sumOfPoints: number;
    questions: QuizData["questions"];
}

type StoreResult = {

}

function storeResults(result: Result): Promise<StoreResult> {
    return fetch(`${strapiApi.strapiAddress}/api/quiz-results`, {
        method: "POST",
        body: JSON.stringify(result),
    }).then((res) => res.json())
}

export default null