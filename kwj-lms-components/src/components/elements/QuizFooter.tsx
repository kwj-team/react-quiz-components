import { Button, Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface QuizFooterProps {
    onNextClick: () => void
    onPrevClick: () => void

    prevDisabled?: boolean;
    submitStep?: boolean;
    prevLabel?: string
    nextLabel?: string
    submitLabel?: string

}

export const QuizFooter = ({ prevDisabled, submitStep, prevLabel, nextLabel, submitLabel, onNextClick, onPrevClick }: QuizFooterProps) => {
    const { t, i18n } = useTranslation();
    return (
        <Box gap={1} display="flex" justifyContent="flex-end" >
            <Button variant="contained" size="large" onClick={onPrevClick} disabled={prevDisabled}>{prevLabel || t("quiz.footer.prevlabel")}</Button>
            <Button variant="contained" size="large" onClick={onNextClick}>{submitStep ? (submitLabel || t("quiz.footer.submitlabel")) : (nextLabel || t("quiz.footer.nextlabel"))}</Button>
        </Box>
    );
};
