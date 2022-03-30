import { Box, Typography } from '@mui/material'

interface QuestionProps {
  question: Pick<QuestionData, "title" | "description" | "points" | "isAnswerRequired">
  index: number
}

const Question = ({ question, index }: QuestionProps) => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography marginBottom={2} variant="h6" fontWeight={"bold"} component="span">{index + 1}. {question.title}</Typography>
        <Typography fontWeight={"bold"} variant="h6">0/{question.points}</Typography>
      </Box>
      <Typography marginBottom={3} variant="questionDescription">{question.description}</Typography>
    </Box>
  );
};

export default Question;