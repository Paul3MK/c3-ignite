import { Media } from '@/components/Media'
import type { Page, PeopleCard as PeopleCardProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const PeopleCard: React.FC<PeopleCardProps> = (props) => {
  const splitName = props.personName?.split(' ')
  return (
    <div className="relative container mx-auto">
      <div
        style={{ backgroundColor: props.backgroundColor! }}
        className="grid grid-flow-row gap-8 p-16"
      >
        <div className="pr-20 relative w-fit">
          <span className="text-white font-serif italic text-[67px] font-light absolute top-[30%] right-0 z-[1]">
            {props.personTitle}
          </span>
          <div
            style={{ color: props.accentColor! }}
            className="relative grid grid-cols-6 grid-flow-row leading-[0.7]"
          >
            {splitName && (
              <span className="col-start-2 col-span-5 text-[160px] block font-headline uppercase">
                {splitName[0]}
              </span>
            )}
            {splitName && (
              <span className="col-span-full text-[160px] block font-headline uppercase">
                {splitName[1]}
              </span>
            )}
          </div>
        </div>
        <RichText data={props.textContent!} className="max-w-prose text-white font-sans" />
      </div>
      <Media resource={props.coverImage} className="absolute right-0 bottom-0" />
    </div>
  )
}
