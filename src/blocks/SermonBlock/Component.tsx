import type { SermonBlock as SermonBlockProps } from '@/payload-types'

export const SermonBlock: React.FC<SermonBlockProps> = (props) => {
  return (
    <>
      {props.videos.map((video) => (
        <div key={video.id}>
          <span>{video.sermonDate}</span>
          <span>{video.sermonTitle}</span>
        </div>
      ))}
    </>
  )
}
