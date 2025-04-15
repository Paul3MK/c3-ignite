import type { Callout as CalloutProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export const CalloutBlock: React.FC<CalloutProps> = (props) => {
  return (
    <div style={{ backgroundColor: props.backgroundColor }}>
      <div className="container mx-auto py-32 md:py-64 relative grid gap-16 md:gap-0 grid-cols-4 md:grid-cols-12 grid-flow-row md:grid-flow-col items-center">
        <div className="w-[50%] md:w-full mx-auto col-span-full md:col-span-5 z-[1]">
          <RichText
            data={props.caption}
            className=" font-serif text-[5.625rem] md:text-[10rem]  text-center text-white leading-[0.8]"
          />
        </div>
        <div className="flex flex-col col-span-full md:col-span-5 md:col-start-8 gap-16">
          <RichText
            data={props.summaryText}
            className="font-sans text-base md:text-[1.312rem] text-white leading-snug"
          />
          <div className="flex flex-col gap-5">
            {props.CTAs?.map((cta) => (
              <span
                key={cta.id}
                className="grid gap-3 grid-flow-row grid-cols-[auto_auto] justify-start items-center group"
              >
                <RichText
                  data={cta.content!}
                  className="text-white w-fit text-[1.312rem] font-serif underline"
                />{' '}
                <ArrowRight className="text-white ml-2 text-sm inline-block group-hover:translate-x-2 transition-transform" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
