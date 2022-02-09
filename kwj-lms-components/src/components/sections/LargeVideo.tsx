import Video from "../elements/Video";
import { Box, Typography } from '@mui/material'

const LargeVideo = ({ data }: { data: LargeVideoData }) => {
  const { media, poster, title, description } = data
  return (
    <Box sx={{
      display: "block",
      float: "left",
      padding: "0 30px"
    }}>

      <Typography variant="h4" sx={{ marginBottom: "20px", textAlign: "left", }}>{title}</Typography>
      <Typography variant="body1" sx={{ marginBottom: "40px", textAlign: "left", }} >{description}</Typography>
      <Video
        media={media}
        poster={poster}
      />
    </Box>
  );
};

export default LargeVideo;
