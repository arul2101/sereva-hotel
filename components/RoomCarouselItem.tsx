import RoomItem from '@/components/Bookings/RoomItem'
import { CarouselItem } from '@/components/ui/carousel'
import React from 'react'

export default function RoomCarouselItem() {
  return (
    <CarouselItem className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <RoomItem />
    </CarouselItem>
  )
}
