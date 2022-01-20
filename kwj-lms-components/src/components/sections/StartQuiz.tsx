import { Box, Button, Stack, Typography } from '@mui/material'

type StartQuizData = Pick<QuizData, "title" | "description">

interface StartQuizProps {
    startquiz: StartQuizData
}

const StartQuiz = ({ startquiz }: StartQuizProps) => {
    return (
        <Box gap={2} display={"flex"} flexDirection={"column"} textAlign={"center"}>
            <Typography variant="h5" component="div">{startquiz.title}</Typography>
            <Typography variant="body2">{startquiz.description}</Typography>
            <Stack direction="row" mt={"40px"} textAlign={"center"} >
                <Button variant="contained" size="large" sx={{ minWidth: "200px", margin: " 0 auto " }} >Start</Button>
            </Stack>
        </Box>
    );
};

export default StartQuiz;