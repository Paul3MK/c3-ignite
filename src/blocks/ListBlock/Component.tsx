import { Media } from '@/components/Media'
import type { ListBlock as ListBlockProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import clsx from 'clsx'

export const ListBlock: React.FC<ListBlockProps> = ({ content, title, variant }) => {
  if (variant == 'simple') {
    return (
      <div className="container mx-auto grid grid-flow-row gap-4">
        {title && <h3 className="font-serif text-[1.75rem] md:text-[3.188rem]">{title}</h3>}
        {content.map((row) => {
          return (
            <div key={row.id}>
              <div className=" text-base font-semibold md:font-normal md:text-[1.312rem]">
                <RichText data={row.main} />
              </div>
              {row.sub && (
                <div>
                  <RichText data={row.sub} className="text-base max-w-prose leading-snug" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  } else if (variant == 'expanded') {
    return (
      <div className="container mx-auto flex flex-col justify-between gap-8 md:gap-16">
        <div className="grid grid-cols-4 grid-flow-row md:grid-cols-12 gap-16 md:gap-4">
          {content.map((row, i) => (
            <div
              key={row.id}
              className={clsx('col-span-full grid grid-cols-4 grid-flow-row gap-4 md:contents', {
                'mb-16': i == content.length - 1,
              })}
            >
              <span className="row-start-2 col-span-full md:row-start-auto md:col-span-3 text-[#ED6328] italic text-base uppercase font-semibold">
                {i + 1}
              </span>
              <Media
                resource={row.image}
                className="row-start-1 col-span-full md:row-start-auto md:col-span-4 h-[300px]"
                imgClassName="object-cover h-full"
                style={{ objectPosition: `center ${row.mediaPosition}%` }}
              />
              <div className="row-start-3 col-span-full md:row-start-auto md:col-span-5 grid grid-flow-row gap-4 content-start">
                <RichText data={row.main} className="text-[1.312rem]" />
                {row.sub && <RichText data={row.sub} className="text-base" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
