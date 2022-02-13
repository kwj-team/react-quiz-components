import Image from "../elements/Image";
import { Box, Typography } from '@mui/material'

const LargeImage = ({ data }: { data: LargeImageData }) => {
  const { media, title, description, width, height } = data
  return (
    <Box sx={{
      display: "block",
      float: "left",
      padding: "0 30px"
    }}>
      <Typography variant="h4" sx={{ marginBottom: "20px", textAlign: "left" }}>{title}</Typography>
      <Typography variant="body1" sx={{ marginBottom: "40px", textAlign: "left" }} >{description}</Typography>
      <Image
        media={media}
        width={width}
        height={height}
      />
    </Box>
  );
};

export default LargeImage;
