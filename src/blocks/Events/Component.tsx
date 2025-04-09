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
    <div className="container mx-auto font-sans">
      <h2 className="font-serif text-[51px]">{props.heading}</h2>
      <div className="grid grid-cols-12 gap-4">
        {events.docs.map((event) => (
          <div key={event.id} className="contents">
            <span className="col-span-3 text-[#ED6328] italic text-[21px] uppercase font-semibold">
              {new Date(event.eventDate).toString().slice(4, 10)}
            </span>
            <Media resource={event.eventImage} className="col-span-4" />
            <div className="col-span-5 grid grid-flow-row gap-4 content-start">
              <h3 className="text-[21px]">{event.eventName}</h3>
              <RichText data={event.summary} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
