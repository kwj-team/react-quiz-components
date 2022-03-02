import { Button, Box } from '@mui/material'
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next'
import { QuizStage } from './Quiz.types';

interface QuizActionsProps {
    onNextClick: () => void
    onPrevClick: () => void

    prevDisabled?: boolean
    stage: QuizStage
    prevLabel?: string
    nextLabel?: string
    finishLabel?: string
    repeatQuizLabel?: string
    submitLabel?: string
    finalButton?: QuizData["finalButton"]
}

export const QuizActions = ({ prevDisabled, stage, finalButton, prevLabel, finishLabel, repeatQuizLabel, nextLabel, submitLabel, onNextClick, onPrevClick }: QuizActionsProps) => {
    const { t } = useTranslation();

    const ctaLabel = useMemo(() => {
        switch (stage) {
            case QuizStage.LastQuestion:
                return submitLabel || t("quiz.button.label.submit")
            case QuizStage.AnswersReview:
                return finishLabel || t("quiz.button.label.finish")
            case (QuizStage.EndRepeat):
                return repeatQuizLabel || t("quiz.button.label.repeat")
            default:
                return (nextLabel || t("quiz.button.label.next"))
        }
    }, [stage, submitLabel, prevLabel, finishLabel, repeatQuizLabel, nextLabel, t])

    const isEnd = stage === QuizStage.End || stage === QuizStage.EndRepeat;
    return (
        <Box gap={1} marginTop={3} display="flex" justifyContent="flex-end" >
            {!isEnd && <Button variant="contained" size="large" onClick={onPrevClick} disabled={prevDisabled}>{prevLabel || t("quiz.button.label.prev")}</Button>}
            {finalButton && isEnd && <Button variant="contained" size="large" href={finalButton.url}>{finalButton.label || t("quiz.button.label.final")}</Button>}
            <Button variant="contained" size="large" onClick={onNextClick}>{ctaLabel}</Button>

        </Box >
    );
};
