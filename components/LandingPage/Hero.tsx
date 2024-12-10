import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="max-w-[1812px] mx-auto px-2">
      <div className="bg-[url('https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen w-full bg-no-repeat bg-cover rounded-[2rem] flex justify-center relative px-4">
        <div className="w-full h-screen absolute top-0 left-0 right-0 bg-black bg-opacity-50 rounded-[2rem]"></div>
        <div className="flex flex-col justify-between items-center text-center py-4">
          <div className="text-white drop-shadow-2xl text-[2.2rem] md:text-[3.7rem] xl:text-[6rem] font-light">Secure Your Dream Vacation with a Reservation</div>

          <Button asChild className={cn('bg-primary text-white h-[2.5rem] w-[14rem] text-[1rem] md:h-[3.5rem] md:w-[16rem] md:text-[1.2rem] rounded-[2rem]')}>
            <Link href='/booking' className="z-50">
              Start Your Reservation
            </Link>
          </Button>

          <div className="flex items-center text-start justify-between w-[95%] text-white z-50">
            <div className="w-[50%] md:w-[30%] md:text-[1.2rem] font-light">We believe in the power of the great outdoors. We think that everyone deserved the chance to explore the wild and to find their very own adventure.</div>

            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div>
                <div className="text-[1.3rem] md:text-[2.5rem] font-bold">121+</div>
                <span className="font-light">Capital Record</span>
              </div>

              <div>
                <div className="text-[1.3rem] md:text-[2.5rem] font-bold">80+</div>
                <span className="font-light">Happy Customers</span>
              </div>

              <div>
                <div className="text-[1.3rem] md:text-[2.5rem] font-bold">1K+</div>
                <span className="font-light">Room options</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}
