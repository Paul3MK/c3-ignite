import { Media } from '@/components/Media'
import type { InfoCard as InfoCardProps, Media as MediaT } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { CircleArrowRight } from 'lucide-react'

export const InfoCard: React.FC<InfoCardProps> = (props) => {
  const i = props.cardImage as MediaT
  return (
    <div className="container mx-auto relative text-white grid grid-flow-col grid-cols-2">
      <div
        style={{ backgroundColor: props.backgroundColor }}
        className="grid grid-flow-row gap-6 mt-16 pt-16 pl-16 pb-16 col-start-1 col-span-2 row-start-1"
      >
        <div className="max-w-[40%] flex flex-col justify-between">
          <div className="grid grid-flow-row gap-5">
            <h2 className="font-serif text-[67px] leading-none">{props.cardCaption}</h2>
            <span className="max-w-prose font-sans text-[21px]">{props.cardDescription}</span>
          </div>
          {props.link && (
            <span>
              <RichText data={props.link} className="underline" />
            </span>
          )}
        </div>
      </div>
      <Media
        resource={props.cardImage}
        className="relative col-start-2 row-start-1 place-self-end"
      />
    </div>
  )
}
