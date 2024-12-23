"use client"

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Each from "@/utils/Each";
import RoomCarouselItem from "./RoomCarouselItem";

type RoomsCarouselProps = {
  title: string;
  data: [1, 2, 3, 4, 5];
  delay: number;
}

export default function RoomsCarousel({title, data, delay}: RoomsCarouselProps) {
  return (
    <>
      <div className='font-semibold text-[2.4rem] mb-8 text-center'>{title}</div>

      <Carousel
        opts={{
          align: "start"
        }}
        className="max-w-[1412px] mx-auto"
        plugins={[
          Autoplay({
            delay,
          }),
        ]}
      >
        <CarouselContent>
          <Each of={data} render={() =>
            <RoomCarouselItem />
          } />
        </CarouselContent>
        <CarouselPrevious className='h-8 w-16' />
        <CarouselNext className='h-8 w-16' />
      </Carousel>
    </>
  )
}
