import { Media } from '@/components/Media'
import type { Page, PeopleCard as PeopleCardProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const PeopleCard: React.FC<PeopleCardProps> = (props) => {
  const splitName = props.personName?.split(' ')
  return (
    <div className="relative container mx-auto grid grid-flow-col grid-cols-2">
      <div
        style={{ backgroundColor: props.backgroundColor! }}
        className="grid grid-flow-row gap-8 mt-48 pt-16 pl-16 pb-16 col-start-1 row-start-1 col-span-2"
      >
        <div className="max-w-[40%] flex flex-col justify-between">
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
      </div>
      <Media
        resource={props.coverImage}
        className="relative col-start-2 row-start-1 place-self-end"
      />
    </div>
  )
}
