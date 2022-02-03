import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'

interface QuizEndProps {
    quizEndingText?: string
}

export const QuizEnd = ({ quizEndingText }: QuizEndProps) => {
    const { t, i18n } = useTranslation();
    return (
        <Box gap={2} display={"flex"} flexDirection={"column"} textAlign={"center"} marginBottom={5} marginTop={3}>
            <Typography variant="h5" component="div">{quizEndingText || t("quiz.quizEnd.invisibleResult")}</Typography>
        </Box>
    );
};

