import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'

interface QuizEndProps {
    onRepeatQuiz: () => void

    quizEndingText?: string
    finalButton?: {
        url: string
        label: string
    }
    isRepeatable?: boolean
}

export const QuizEnd = ({ quizEndingText, isRepeatable = false, onRepeatQuiz, finalButton }: QuizEndProps) => {
    const { t, i18n } = useTranslation();
    return (
        <Box gap={2} display={"flex"} flexDirection={"column"} textAlign={"center"} marginBottom={5} marginTop={3}>
            <Typography variant="h5" component="div">{quizEndingText || t("quiz.quizEnd.invisibleResult")}</Typography>
            <Box gap={1} marginTop={3} display="flex" justifyContent="flex-end" >
                {isRepeatable && <Button variant="contained" size="large" onClick={onRepeatQuiz}>{t("quiz.button.label.repeat")}</Button>}
                {finalButton && <Button variant="contained" size="large" href={finalButton.url}>{finalButton.label || t("quiz.button.label.final")}</Button>}
            </Box >
        </Box>
    );
};

