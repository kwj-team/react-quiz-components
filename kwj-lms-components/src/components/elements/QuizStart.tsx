import { Box, Button, Stack, Typography } from '@mui/material'

interface QuizStartProps {
    onNextClick: () => void

    title: QuizData["title"]
    description: QuizData["description"]
}

const QuizStart = ({ title, description, onNextClick }: QuizStartProps) => {
    return (
        <Box gap={2} display={"flex"} flexDirection={"column"} textAlign={"center"}>
            <Typography variant="h5" component="div">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
            <Stack direction="row" mt={"40px"} textAlign={"center"} >
                <Button variant="contained" size="large" sx={{ minWidth: "200px", margin: " 0 auto " }} onClick={onNextClick}>Start</Button>
            </Stack>
        </Box>
    );
};

export default QuizStart;