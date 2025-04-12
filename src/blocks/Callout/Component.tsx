import type { Callout as CalloutProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { ArrowUpRight } from 'lucide-react'

export const CalloutBlock: React.FC<CalloutProps> = (props) => {
  return (
    <div style={{ backgroundColor: props.backgroundColor }} className="-mt-16">
      <div className="container mx-auto py-64 relative grid grid-cols-12 grid-flow-col items-center">
        <RichText
          data={props.caption}
          className="col-span-5 font-serif text-[157px] text-center text-white leading-[0.8] z-[1]"
        />
        <div className="flex flex-col col-span-5 col-start-8 gap-16">
          <RichText data={props.summaryText} className="font-sans text-[21px] text-white" />
          {props.CTAs?.map((cta) => (
            <span
              key={cta.id}
              className="grid gap-3 grid-flow-row grid-cols-[auto_auto] justify-start items-end "
            >
              <RichText data={cta.content!} className="text-white w-fit text-[28px] font-serif" />{' '}
              <ArrowUpRight className="text-white ml-4" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
