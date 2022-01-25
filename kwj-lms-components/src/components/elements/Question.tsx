import { Box, Typography } from '@mui/material'

interface QuestionProps {
  question: Pick<QuestionData, "title" | "description" | "points" | "isAnswerRequired">
}

const Question = ({ question }: QuestionProps) => {
  return (
    <Box gap={0} display={"flex"} flexDirection={"column"}>
      <Typography variant="questionTitle" component="span">{question.title}</Typography>
      <Typography variant="questionDescription">{question.description}</Typography>
    </Box>
  );
};

export default Question;