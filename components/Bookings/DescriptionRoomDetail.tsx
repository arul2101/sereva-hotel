import { AirVent, EyeOff, Users, Wifi } from "lucide-react";
import Stars from "../Stars";

export default function DescriptionRoomDetail() {
  return (
    <div className="mt-4">
      <div className="mb-4">
        <div className="font-semibold text-[1.4rem]">Luxury Room</div>

        <div className='flex items-center gap-1'>
          <Stars length={5} fill={4} />
        </div>

        <div className='mt-2'>
          <span className='font-bold text-[1.1rem]'>Rp. 1.500.000</span>
          <span className='text-[#676464]'>/ Night</span>
        </div>
      </div>
      

      <div className="md:flex md:justify-between md:items-center">
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
  )
}
