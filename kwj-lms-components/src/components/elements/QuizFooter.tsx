import { Button, Box } from '@mui/material'
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next'
import { QuizStage } from './Quiz.types';

interface QuizFooterProps {
    onNextClick: () => void
    onPrevClick: () => void

    prevDisabled?: boolean
    stage: QuizStage
    prevLabel?: string
    nextLabel?: string
    finishLabel?: string
    repeatQuizLabel?: string
    submitLabel?: string
}

export const QuizFooter = ({ prevDisabled, stage, prevLabel, finishLabel, repeatQuizLabel, nextLabel, submitLabel, onNextClick, onPrevClick }: QuizFooterProps) => {
    const { t } = useTranslation();

    const ctaLabel = useMemo(() => {
        switch (stage) {
            case QuizStage.LastQuestion:
                return submitLabel || t("quiz.button.label.submit")
            case QuizStage.AnswersReview:
                return finishLabel || t("quiz.button.label.finish")
            case QuizStage.End:
                return repeatQuizLabel || t("quiz.button.label.repeat")
            default:
                return (nextLabel || t("quiz.button.label.next"))
        }
    }, [stage, t])

    return (
        <Box gap={1} marginTop={3} display="flex" justifyContent="flex-end" >
            <Button variant="contained" size="large" onClick={onPrevClick} disabled={prevDisabled}>{prevLabel || t("quiz.button.label.prev")}</Button>
            <Button variant="contained" size="large" onClick={onNextClick}>{ctaLabel}</Button>
        </Box>
    );
};
