import { useEffect } from "react";

interface StrapiQuizAPI {
    storeResults(result: Result): Promise<any>
    getQuiz(quizId: number): Promise<QuizData>
}

export const strapiApi = {
    strapiAddress: process.env.STRAPI_API_URL || "https://lms-strapi.kwjteam.com/",
    strapiApiPath: process.env.STRAPI_API_PATH_URL || "/v1",

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
    return fetch(`${strapiApi.strapiAddress}${strapiApi.strapiApiPath}/quizzes/${quizId}?populate=questions,questions.answers,questions.question`, {
        method: "GET"
    }).then((res) => res.json()).then((response: StrapiResponse<QuizData>) => ({
        ...response.data.attributes,
        id: response.data.id
    }))
}

function storeResults(result: StrapiQuizResult): Promise<StrapiResponse<StrapiQuizResult>> {
    return fetch(`${strapiApi.strapiAddress}/v1/quiz-results`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ data: result }),
    }).then((res) => res.json())
}

export default null