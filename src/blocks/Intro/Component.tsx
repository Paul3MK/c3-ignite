import type { IntroSection as IntroSectionProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const IntroSection: React.FC<IntroSectionProps> = (props) => {
  return (
    <div style={{ backgroundColor: props.backgroundColor }} className="-mt-16">
      <div className="container mx-auto py-40 relative grid grid-cols-12 grid-flow-col items-center">
        <span
          style={{ color: props.accentColor, opacity: '10%' }}
          className="font-headline text-[213px] absolute left-8 max-w-[42rem] my-auto leading-[0.7] uppercase"
        >
          {props.graphicText}
        </span>
        <RichText
          data={props.caption}
          className="col-span-5 font-serif text-[157px] text-center text-white leading-[0.8] z-[1]"
        />
        <RichText
          data={props.summaryText}
          className="col-span-5 col-start-8 font-sans text-[21px] text-white"
        />
      </div>
    </div>
  )
}
