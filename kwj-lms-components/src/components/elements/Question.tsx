import { Box, Typography } from '@mui/material'

interface QuestionProps {
  question: Pick<QuestionData, "title" | "description" | "points" | "isAnswerRequired">
  index: number
}

const Question = ({ question, index }: QuestionProps) => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography marginBottom={2} variant="h6" fontWeight={"bold"} component="span">{index + 1}. {question.title}</Typography>
      <Typography marginBottom={3} variant="questionDescription">{question.description}</Typography>
    </Box>
  );
};

export default Question;