import { Box } from '@chakra-ui/react'

// Component to render video files like GIFs (autoplay, loop, no controls)
const VideoAsGif = ({ mp4Src, webmSrc, alt, width = '100%', height = 'auto' }) => {
  return (
    <Box
      as="video"
      autoPlay
      loop
      muted
      playsInline
      width={width}
      height={height}
      style={{ display: 'block', maxWidth: '100%' }}
      aria-label={alt}
    >
      {webmSrc && <source src={webmSrc} type="video/webm" />}
      {mp4Src && <source src={mp4Src} type="video/mp4" />}
      Your browser does not support the video tag.
    </Box>
  )
}

export default VideoAsGif
