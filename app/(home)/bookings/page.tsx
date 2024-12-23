import RoomItem from "@/components/Bookings/RoomItem";
import RoomsCarousel from "@/components/RoomsCarousel";
import { Button } from "@/components/ui/button";
import { poppins } from "@/fonts";
import { cn } from "@/lib/utils";
import Each from "@/utils/Each";

export default function page() {
  return (
    <section className={`${poppins.className} max-w-[1812px] mx-auto px-16 pt-4 pb-20 space-y-8`}>
      <RoomsCarousel delay={12000} title="Best Offers" data={[1, 2, 3, 4, 5]} />
      <RoomsCarousel delay={4000} title="Recomendation" data={[1,2,3,4,5]} />

      <div className="max-w-[1412px] mx-auto">
        <h2 className="font-semibold text-[2.4rem] text-center mb-4">Available Rooms</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          <Each of={[1,2,3,4,5,6]} render={() => 
            <RoomItem />
          } />
        </div>

        <div className="text-center mt-12">
          <Button type="button" variant='outline' className={cn('rounded-2xl')}>Load More</Button>
        </div>
      </div>
    </section>
  )
}
