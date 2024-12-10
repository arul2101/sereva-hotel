import { Poppins } from "next/font/google";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Each from "@/utils/Each";
import { facilities, services } from "@/constant/index";

const poppins = Poppins({
  weight: ['400', '300', '600'],
  subsets: ["latin"],
});

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
            <Each of={services} render={({ title, icon, description }) =>
              <div className="flex gap-4 items-center shadow-[9px_9px_11px_4px_rgba(0,_0,_0,_0.1)] p-4 rounded-lg">
                <div className="text-black h-[5rem] w-[5rem] rounded-full flex justify-center items-center">
                  <span>
                    {icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-[1.5rem] font-semibold">{title}</h2>
                  <span className="text-[.8rem] font-light md:text-[1rem]">{description}</span>
                </div>
              </div>
            } />
          </div>
        </div>

        <div className="">
          <div className="lg:mb-16 mb-8 lg:flex justify-between items-center text-center lg:text-start">
            <div className="font-semibold text-[2.4rem] lg:w-[45%] xl:text-[3rem] xl:w-[38%] mb-4">Exclusive Premium Facilities</div>

            <div className="lg:w-[45%] xl:text-[1.3rem]">Our exclusive amenities include a luxurious swimming pool and breathtaking integrated views. Every corner is meticulously designed to create an exceptional ambiance.</div>
          </div>

          <div className="flex gap-8 flex-col lg:flex-row lg:justify-center items-center">
            <Each of={facilities} render={({ title, img, description }) =>
              <div className="">
                <div className="mb-2">
                  <Image src={img} alt={title} height={450} width={450} className="rounded-[2rem]" />
                </div>

                <div>
                  <h2 className="font-semibold text-[1.5rem]">{title}</h2>
                  <span>{description}</span>
                </div>
              </div>
            } />
          </div>
        </div>
      </div>
    </section>
  )
}
