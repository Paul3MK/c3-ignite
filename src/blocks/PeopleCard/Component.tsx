import { Media } from '@/components/Media'
import type { Page, PeopleCard as PeopleCardProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const PeopleCard: React.FC<PeopleCardProps> = (props) => {
  const splitName = props.personName?.split(' ')
  return (
    <div className="relative container mx-auto grid grid-flow-row md:grid-flow-col md:grid-cols-2 h-[400px] md:h-auto">
      <div
        style={{ backgroundColor: props.backgroundColor! }}
        className="grid grid-flow-row row-start-1 pt-8 px-4 md:px-auto md:gap-8 md:mt-48 md:pt-16 md:pl-16 md:pb-16 col-start-1 col-span-2 h-full md:h-auto"
      >
        <div className="md:max-w-[40%] flex flex-col gap-4 md:gap-0 md:justify-between">
          <div className="pr-12 md:pr-20 relative w-fit">
            <span className="text-white font-serif italic text-[1.75rem] md:text-[4.188rem] font-light absolute top-[30%] right-0 z-[1]">
              {props.personTitle}
            </span>
            <div
              style={{ color: props.accentColor! }}
              className="relative grid grid-cols-6 grid-flow-row leading-[0.7]"
            >
              {splitName && (
                <span className="col-start-2 col-span-5 text-[4.188rem] md:text-[10rem] block font-headline uppercase">
                  {splitName[0]}
                </span>
              )}
              {splitName && (
                <span className="col-span-full text-[4.188rem] md:text-[10rem] block font-headline uppercase">
                  {splitName[1]}
                </span>
              )}
            </div>
          </div>
          <RichText data={props.textContent!} className="md:max-w-prose text-white font-sans" />
        </div>
      </div>
      <Media
        resource={props.coverImage}
        className="relative col-start-2 row-start-1 place-self-end"
      />
    </div>
  )
}
