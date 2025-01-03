'use client'

import { AirVent, ArrowLeft, Check, Dot, EyeOff, MoonStar, MoveRight, User, Users, Utensils, Wifi } from "lucide-react";
import { useRouter } from "next/navigation";
import HeroImageLargeWidth from "../Bookings/HeroImageLargeWidth";
import ImageCarousel from "../Bookings/ImageCarousel";
import DescriptionRoomDetail from "../Bookings/DescriptionRoomDetail";
import { Badge } from "../ui/badge";
import Stars from "../Stars";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function RoomReservationDetail() {
  const router = useRouter();
  return (
    <>
      <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />

      {/* max width : 1024px */}
      <HeroImageLargeWidth />
      {/* min width :  1024px*/}
      <ImageCarousel />
      <div className="mt-4">
        <div className="mb-4">
          <div className="flex max-sm:flex-col justify-between max-sm:mb-4">
            <div className="basis-[40%]">
              <div className="font-semibold text-[1.4rem]">Luxury Room</div>
              <Badge variant='destructive'>Canceled</Badge>

              <div className="md:w-[60%] text-slate-800 font-light">Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.</div>
            </div>
            
            <div className="basis-[55%]">
              <div className="flex items-center gap-2 text-[#676464]">
                <div>Thursday, Oct 31 2024</div>
                <MoveRight />
                <div>Sunday, Nov 24 2024</div>
              </div>

              <div className='flex items-center gap-2'>
                <User className="text-primary" />
                <span className="text-[#676464] font-light">4 Guest</span>
              </div>

              <div className='flex items-center gap-2'>
                <MoonStar className="text-primary" />
                <span className="text-[#676464] font-light">6 Nights</span>
              </div>

              <div className="flex items-center gap-2">
                <Utensils className="text-primary" />
                <span className="text-[#676464] font-light">Has Breakfast</span>
              </div>

              <div className='mt-4'>
                <span className='font-bold text-[1.1rem]'>Total Price: Rp. 1.500.000</span>
              </div>
            </div>
          </div>

          <div className="max-w-[720px] mx-auto text-center space-y-3 mt-16">
            <h2 className="font-bold mb-2">Feedback your experience</h2>
            <div className="flex items-center justify-center">
              <Stars length={5} fill={0} />
            </div>

            <Textarea placeholder="type your review.." className="resize-none h-[200px]" />
            <Button variant='default' className={cn('text-white')}>Submit</Button>
          </div>

            
          {/* </div> */}
          

          {/* <div className=""> */}
            {/* <Badge variant='outline' className={cn('bg-slate-200')}>Unconfirmed</Badge>
            <Badge variant='outline' className={cn('bg-green-200')}>Done</Badge>
            <Badge variant='outline' className={cn('bg-yellow-200')}>Current</Badge> */}
            
        {/* </div> */}

        
        

        {/* <div className="md:flex md:justify-between md:items-center">
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
        </div> */}
        </div>
      </div>
    </>
  )
}
