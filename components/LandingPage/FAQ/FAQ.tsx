import {
  Accordion,
} from "@/components/ui/accordion"
import Each from "@/utils/Each"
import { menuFAQ } from "@/constant"
import FAQItem from "./FAQItem"


export default function FAQ() {
  return (
    <section className="max-w-[1812px] mx-auto px-6 py-16" id="FAQ">
      <div className="lg:flex justify-between">
        <div className="lg:w-[45%] xl:w-[40%] mb-10">
          <h2 className="font-semibold text-[2.4rem] text-center lg:text-start">Frequently Asked Questions</h2>
          <p className="text-center lg:text-start mt-5 text-[1.2rem]">If there are question you want to ask. We will answer all your question.</p>
        </div>

        <div className="mt-4 lg:w-[50%]">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <Each of={menuFAQ} render={(props) =>
              <FAQItem {...props} />
            } />
          </Accordion>
        </div>
      </div>
    </section>
  )
}
