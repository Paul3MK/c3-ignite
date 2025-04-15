import { Media } from '@/components/Media'
import type { EventsBlock as EventsProps } from '@/payload-types'
import config from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayload } from 'payload'

export const EventsBlock: React.FC<EventsProps> = async (props) => {
  const payload = await getPayload({ config })
  const events = await payload.find({
    collection: 'events',
    select: {
      eventDate: true,
      eventImage: true,
      eventName: true,
      summary: true,
    },
  })

  return (
    <div className="container mx-auto flex flex-col justify-between gap-8 md:gap-16">
      <h2 className="font-serif text-[1.750rem] md:text-[3.188rem]">{props.heading}</h2>
      <div className="grid grid-cols-4 grid-flow-row md:grid-flow-col md:grid-cols-12 gap-3 md:gap-4">
        {events.docs.map((event) => (
          <div key={event.id} className="contents">
            <span className="row-start-2 col-span-full md:row-start-auto md:col-span-3 text-[#ED6328] italic text-base uppercase font-semibold">
              {new Date(event.eventDate).toString().slice(4, 10)}
            </span>
            <Media
              resource={event.eventImage}
              className="row-start-1 col-span-full md:row-start-auto md:col-span-4"
            />
            <div className="row-start-3 col-span-full md:row-start-auto md:col-span-5 grid grid-flow-row gap-4 content-start">
              <h3 className="text-[1.312rem]">{event.eventName}</h3>
              <RichText data={event.summary} className="text-base" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
