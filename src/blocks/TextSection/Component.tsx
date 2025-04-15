import type { TextSection as TextSectionProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const TextSection: React.FC<TextSectionProps> = (props) => {
  return (
    <div className="container mx-auto flex flex-col gap-8 md:gap-16">
      <h2 className="font-serif text-[1.750rem] md:text-[3.188rem]">{props.heading}</h2>
      <RichText data={props.content} className="max-w-prose leading-snug" />
    </div>
  )
}
