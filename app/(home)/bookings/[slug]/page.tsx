import RoomDetail from '@/components/Bookings/RoomDetail';
import { poppins } from '@/fonts';
import React from 'react'

type RoomDetailProps = {
  params: {
    slug: string;
  }
}

export default function page({ params }: RoomDetailProps) {
  return (
    <section className={`${poppins.className} max-w-[1812px] mx-auto px-6 py-8`}>
      <RoomDetail />
    </section>
  )
}
