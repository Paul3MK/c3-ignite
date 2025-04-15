import type { IntroSection as IntroSectionProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const IntroSection: React.FC<IntroSectionProps> = (props) => {
  return (
    <div style={{ backgroundColor: props.backgroundColor }} className="-mt-16">
      <div className="container mx-auto py-20 relative grid grid-cols-4 md:grid-cols-12 gap-20 md:gap-4 grid-flow-col items-center">
        <span
          style={{ color: props.accentColor, opacity: '10%' }}
          className="font-headline text-[7.5rem] md:text-[13.3rem] absolute left-8 bottom-24 md:bottom-auto max-w-[42rem] my-auto leading-[0.7] uppercase"
        >
          {props.graphicText}
        </span>
        <div className="col-span-full md:col-span-5 w-[50%] mx-auto md:w-auto md:mx-0 z-[1]">
          <RichText
            data={props.caption}
            className="font-serif text-[5.625rem] md:text-[10rem] text-center text-white leading-[0.8]"
          />
        </div>
        <RichText
          data={props.summaryText}
          className="col-span-full row-start-1 md:row-start-auto md:col-span-5 md:col-start-8 font-sans text-base md:text-[1.312rem] leading-snug text-white"
        />
      </div>
    </div>
  )
}
