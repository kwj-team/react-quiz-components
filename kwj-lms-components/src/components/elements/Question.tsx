import { Box, CardMedia, Typography } from "@mui/material";

interface QuestionProps {
  question: QuestionData;
  index: number;
  userPoints?: number | null;
}

const Question = ({ question, index, userPoints = null }: QuestionProps) => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography
          marginBottom={2}
          variant="h6"
          fontWeight={"bold"}
          component="span"
        >
          {index + 1}. {question.title}
        </Typography>
        {userPoints !== null && (
          <Typography fontWeight={"bold"} variant="h6">
            {userPoints}/{question.points}
          </Typography>
        )}
      </Box>
      <Typography marginBottom={3} variant="questionDescription">
        {question.description}
      </Typography>
      {question.media && (
        <CardMedia
          sx={{ marginBottom: 3 }}
          component={
            (question.media.mime?.startsWith("image")
              ? "img"
              : question.media.mime?.startsWith("video")
              ? "video"
              : "audio") || "img"
          }
          height={question.media.height}
          width={question.media.width}
          autoPlay
          controls
          src={"http://localhost:1337" + question.media.url}
        />
      )}
    </Box>
  );
};

export default Question;
