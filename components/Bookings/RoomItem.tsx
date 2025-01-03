import Image from "next/image";
import { Card } from "../ui/card";
import Stars from "../Stars";
import { poppins } from "@/fonts";
import Link from "next/link";

export default function RoomItem() {
  return (
    <Link href='/bookings/testing-booking'>
      <Card className={`${poppins.className} overflow-hidden cursor-pointer`}>
        <div className='w-full h-[60%]'>
          <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='image-rooms' width={550} height={550} className='w-full h-full object-cover' />
        </div>

        <div className='p-4'>
          <div className=''>
            <h2 className='font-semibold text-[1.5rem]'>Luxury Room</h2>
            <span className='font-light text-[.8rem]'>Fits up to 4 person</span>
          </div>

          <div className='flex items-center gap-1 mt-2'>
            <Stars length={5} fill={4} />
          </div>

          <div className='mt-4'>
            <span className='font-bold text-[1.1rem]'>Rp. 1.500.000</span>
            <span className='text-[#676464]'>/ Night</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
