import { getStrapiMedia } from "../../utils/media";

interface VideoProps {
  media: MediaData,
  poster?: MediaData,
  className?: string,
  controls?: boolean,
  autoPlay?: boolean,
};

const Video = ({
  media,
  poster,
  className,
  controls = true,
  autoPlay = false,
}: VideoProps) => {
  const fullVideoUrl = getStrapiMedia(media.attributes.url);
  const fullPosterUrl = getStrapiMedia(poster?.attributes.url);

  return (
    <video
      className={className}
      poster={fullPosterUrl}
      controls={controls}
      autoPlay={autoPlay}
    >
      <source src={fullVideoUrl} type={media.attributes.mime} />
    </video>
  );
};



export default Video;
