import { getStrapiMedia } from "../../utils/media"

interface ImageProps {
  media: MediaData,
  width?: string | number,
  height?: string | number,
};

const Image = ({ media, width, height }: ImageProps) => {
  const imageUrl = getStrapiMedia(media.attributes.url)
  return (
    <img
      width={width}
      height={height}
      src={imageUrl}
      alt={media.attributes.alternativeText || ""}
    />
  )
}

export default Image
