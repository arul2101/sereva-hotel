'use client'

import { AirVent, ArrowLeft, EyeOff, Users, Wifi } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Each from "@/utils/Each";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"

const testCarouselImage = [
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
]

export default function RoomDetail() {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <>
      <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />

      <div className="mt-5 lg:block hidden">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="w-full">
            <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image-room" width={1920} height={1080} className="rounded-2xl w-full" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image-room" width={1920} height={1080} className="rounded-2xl" />
            <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image-room" width={1920} height={1080} className="rounded-2xl" />
            <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image-room" width={1920} height={1080} className="rounded-2xl" />
            <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image-room" width={1920} height={1080} className="rounded-2xl" />
          </div>
        </div>
      </div>

      <div className="lg:hidden block mt-5">
        <Carousel
          opts={{
            align: "start"
          }}
          className="max-w-[1412px] mx-auto"
          plugins={[
            Autoplay({
              delay: 12000,
            }),
          ]}
        >
          <CarouselContent>
            <Each of={testCarouselImage} render={({ src }) =>
              <CarouselItem className="rounded-2xl">
                <Image src={src} alt="image-room" width={1920} height={1080} className="w-full h-full rounded-2xl" />
              </CarouselItem>
            } />
          </CarouselContent>
          <CarouselPrevious className='ml-8 h-8 w-8' />
          <CarouselNext className='mr-8 w-8' />
        </Carousel>
      </div>

      <div className="mt-4">
        <div className="font-semibold text-[1.4rem] mb-4">Luxury Room</div>

        <div className="md:flex md:justify-between">
          <div className="md:w-[60%] text-slate-800 font-light">Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.</div>

          <div className="md:w-[30%] space-y-2 mt-4">
            <div className="flex items-center gap-2">
              <Users className="text-primary" />
              <span className="font-light text-slate-800">Up to 2 guests</span>
            </div>
            <div className="flex items-center gap-2">
              <EyeOff className="text-primary" />
              <span className="font-light text-slate-800">Privacy 100% guaranted</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="text-primary" />
              <span className="font-light text-slate-800">Free Wifi</span>
            </div>
            <div className="flex items-center gap-2">
              <AirVent className="text-primary" />
              <span className="font-light text-slate-800">Air Conditioning</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 w-full">
        <div className="font-semibold text-[1.2rem] text-center mb-4">Reserve Today, pay on arrival.</div>

        <div className="flex justify-center max-md:flex-col max-md:items-center gap-32">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    </>
  )
}
