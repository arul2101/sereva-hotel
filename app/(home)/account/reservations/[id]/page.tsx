import RoomReservationDetail from '@/components/Reservations/RoomReservationDetail';
import { poppins } from '@/fonts';
import React from 'react'

type ReservationDetailProps = {
  params: {
    id: string;
  }
}

export default function page({params}: ReservationDetailProps) {
  return (
    <section className={`${poppins.className} max-w-[1812px] mx-auto px-6 py-8`}>
      <RoomReservationDetail />
    </section>
)
}
