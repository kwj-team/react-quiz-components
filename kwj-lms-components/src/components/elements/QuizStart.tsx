import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import { getStrapiMedia } from "../../utils/media";

interface QuizStartProps {
  onNextClick: () => void;

  title: QuizData["title"];
  description: QuizData["description"];
  media: QuizData["media"];
}

const QuizStart = ({
  title,
  description,
  media,
  onNextClick,
}: QuizStartProps) => {
  return (
    <Box
      sx={{
        gap: "2",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="div" sx={{ marginTop: "16px" }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "16px" }}>
        {description}
      </Typography>
      {media && (
        <Box sx={{ width: "1000px", margin: "0 auto" }}>
          <CardMedia
            sx={{ marginTop: "16px" }}
            component={
              (media.mime?.startsWith("image")
                ? "img"
                : media.mime?.startsWith("video")
                ? "video"
                : "audio") || "img"
            }
            height={media.height}
            width={media.width}
            autoPlay
            controls
            src={getStrapiMedia(media.url)}
          />
        </Box>
      )}
      <Stack direction="row" mt={"20px"} textAlign={"center"}>
        <Button
          variant="contained"
          size="large"
          sx={{
            minWidth: "300px",
            fontSize: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
            margin: " 0 auto ",
          }}
          onClick={onNextClick}
        >
          Start
        </Button>
      </Stack>
    </Box>
  );
};

export default QuizStart;
