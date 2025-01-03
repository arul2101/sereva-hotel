import Link from "next/link";
import { Card } from "../ui/card";
import Image from "next/image";
import Stars from "../Stars";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { Dot, MoveRight } from "lucide-react";

export default function RoomReservations() {
  return (
    <Link href='/account/reservations/23nhgyud23'>
      <Card className={`overflow-hidden cursor-pointer`}>
        <div className='w-full h-[60%]'>
          <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='image-rooms' width={550} height={550} className='w-full h-full object-cover' />
        </div>

        <div className='p-4'>
          <div className=''>
            <h2 className='font-semibold text-[1.5rem]'>Luxury Room</h2>
          </div>

          <div className="flex items-center gap-2 text-[#676464]">
            <div>Thursday, Oct 31 2024</div>
            <MoveRight />
            <div>Sunday, Nov 24 2024</div>
          </div>

          <div className="flex items-center">
            {/* <Badge variant='outline' className={cn('bg-slate-200')}>Unconfirmed</Badge>
            <Badge variant='outline' className={cn('bg-green-200')}>Done</Badge>
            <Badge variant='outline' className={cn('bg-yellow-200')}>Current</Badge> */}
            <Badge variant='destructive'>Canceled</Badge>
            <Dot />
            <span className='text-[#676464] font-light'>4 guest</span>
            <Dot />
            <span className='text-[#676464] font-light'>6 Nights</span>
          </div>

          <div className='mt-4'>
            <span className='font-bold text-[1.1rem]'>Total Price: Rp. 1.500.000</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
