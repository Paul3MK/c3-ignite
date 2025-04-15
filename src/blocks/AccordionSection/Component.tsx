import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { AccordionSection as AccordionSectionProps } from '@/payload-types'
import config from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayload } from 'payload'

export const AccordionSection: React.FC<AccordionSectionProps> = async ({
  backgroundColor,
  title,
  content,
  contentColor,
}) => {
  const payload = await getPayload({ config })

  const faqs = await payload.find({
    collection: 'faqs',
    where: {
      faqCategory: {
        equals: content,
      },
    },
  })

  return (
    <div style={{ backgroundColor: backgroundColor, color: contentColor }}>
      <div className="container mx-auto py-20  grid grid-flow-row gap-16">
        <h3 className="font-serif text-[1.75rem] md:text-[3.188rem]">{title}</h3>
        <Accordion type="single" collapsible>
          {faqs.docs.map((doc) => {
            return (
              <AccordionItem value={doc.id} key={doc.id}>
                <AccordionTrigger className=" text-base font-semibold md:font-normal md:text-[1.312rem]">
                  {doc.question}
                </AccordionTrigger>
                <AccordionContent>
                  <RichText data={doc.answer!} className="text-base max-w-prose leading-snug" />
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </div>
  )
}
