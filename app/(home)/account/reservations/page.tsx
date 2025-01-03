import RoomReservations from "@/components/Reservations/RoomReservations";
import { Button } from "@/components/ui/button";
import { poppins } from "@/fonts";
import { cn } from "@/lib/utils";

export default function page() {
  return (
    <section className={`${poppins.className} max-w-[1812px] mx-auto px-16 pb-20 space-y-8`}>
      <div className="flex items-center gap-2 flex-wrap">
        <Button variant='default' className={cn('text-white rounded-3xl hover:bg-primary')}>All</Button>
        <Button variant='outline' className={cn('rounded-3xl hover:bg-primary hover:text-white')}>Unconfirmed</Button>
        <Button variant='outline' className={cn('rounded-3xl hover:bg-primary hover:text-white')}>Current</Button>
        <Button variant='outline' className={cn('rounded-3xl hover:bg-primary hover:text-white')}>Canceled</Button>
        <Button variant='outline' className={cn('rounded-3xl hover:bg-primary hover:text-white')}>Done</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <RoomReservations />
        <RoomReservations />
        <RoomReservations />
        <RoomReservations />
        <RoomReservations />
      </div>
      
    </section>
  )
}
