import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import Each from "@/utils/Each";
import { facilities, services } from "@/constant/index";
import { poppins } from "@/fonts";
import AboutServiceItem from "./AboutServiceItem";
import AboutFacilitieItem from "./AboutFacilitieItem";

export default function AboutUs() {
  return (
    <section className={`${poppins.className} max-w-[1812px] mx-auto px-2 py-16`} id="about-us">
      <div className="w-full p-4 space-y-12">
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-[42%]">
            <div className="font-semibold text-[2rem] lg:text-[2.4rem] mb-8">We strive to provide a range of facilities and amentities to enchance your stay and ensure your comfort</div>

            <Button variant='default' className={cn('text-white font-bold lg:h-[3rem] lg:w-[10rem] lg:text-[1.1rem]')}>SAVE A TOUR</Button>
          </div>

          <div className="space-y-4 mt-10 lg:w-[45%] xl:w-[40%]">
            <Each of={services} render={(props) =>
              <AboutServiceItem {...props} />
            } />
          </div>
        </div>

        <div className="">
          <div className="lg:mb-16 mb-8 lg:flex justify-between items-center text-center lg:text-start">
            <div className="font-semibold text-[2.4rem] lg:w-[45%] xl:text-[3rem] xl:w-[38%] mb-4">Exclusive Premium Facilities</div>

            <div className="lg:w-[45%] xl:text-[1.3rem]">Our exclusive amenities include a luxurious swimming pool and breathtaking integrated views. Every corner is meticulously designed to create an exceptional ambiance.</div>
          </div>

          <div className="flex gap-8 flex-col lg:flex-row lg:justify-center items-center">
            <Each of={facilities} render={(props) =>
              <AboutFacilitieItem {...props} />
            } />
          </div>
        </div>
      </div>
    </section>
  )
}
