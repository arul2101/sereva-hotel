import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import type { MenuFAQ } from "@/constant";

export default function FAQItem({ id, question, answer }: MenuFAQ) {
  return (
    <Card className="px-6">
      <AccordionItem value={id}>
        <AccordionTrigger className="text-[1.2rem]">{question}</AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </Card>
  )
}
