import { Media } from '@/components/Media'
import type { InfoCard as InfoCardProps, Media as MediaT } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import clsx from 'clsx'
import { CircleArrowRight } from 'lucide-react'

export const InfoCard: React.FC<InfoCardProps> = (props) => {
  const i = props.cardImage as MediaT
  return (
    <div
      className={clsx('container mx-auto relative grid md:grid-flow-col  md:grid-cols-2', {
        'grid-cols-[2fr_1fr]': props.variant == 'chip',
        'grid-cols-2': props.variant == 'fullWidth',
      })}
      style={{ color: props.contentColor }}
    >
      <div
        style={{ backgroundColor: props.backgroundColor }}
        className={clsx(
          'grid grid-flow-row gap-4 pt-8 pb-4 px-4 md:px-auto md:gap-6 col-start-1 col-span-2 row-start-1',
          {
            'md:mt-16 md:pt-16 md:pl-16 md:pb-16': props.variant == 'fullWidth',
            'md:mt-32 md:pt-8 md:pl-8 md:pb-8': props.variant == 'chip',
          },
        )}
      >
        <div
          className={clsx('md:max-w-[40%] flex flex-col gap-4 md:gap-0 md:h-auto', {
            'md:justify-between h-[400px]': props.variant == 'fullWidth',
            'md:justify-end': props.variant == 'chip',
          })}
        >
          <div className="grid grid-flow-row gap-5">
            <h2
              className={clsx('font-serif text-[1.75rem] leading-none', {
                'md:text-[4.188rem]': props.variant == 'fullWidth',
                'md:text-[3.188rem]': props.variant == 'chip',
              })}
            >
              {props.cardCaption}
            </h2>
            {props.cardDescription && (
              <RichText
                data={props.cardDescription}
                className="max-w-prose font-sans text-base md:text-[1.312rem]"
              />
            )}
          </div>
          {props.link && (
            <span>
              <RichText data={props.link} className="underline" />
            </span>
          )}
        </div>
      </div>
      {props.cardImage && (
        <Media
          resource={props.cardImage}
          className="relative col-start-2 row-start-1 place-self-end"
        />
      )}
    </div>
  )
}
