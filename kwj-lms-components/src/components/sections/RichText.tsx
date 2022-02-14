import Markdown from "react-markdown"
import { Box } from '@mui/material'

const RichText = ({ data }: { data: RichTextData }) => {
  const { content } = data
  return (
    <Box sx={{ p: "20px" }}>
      <Markdown>{content}</Markdown>
    </Box>
  )
}


export default RichText
