'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';
import Each from '@/utils/Each';
import BestOffersItem from './BestOffersItem';


export default function BestOffers() {
  return (
    <section className='max-w-[1812px] mx-auto px-16 py-16 mt-8' id='best-offers'>
      <div className='font-semibold text-[2.4rem] mb-8 text-center'>Best Offers</div>

      <Carousel
        opts={{
          align: "start"
        }}
        className="max-w-[1412px] mx-auto"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          <Each of={[1, 2, 3, 4, 5]} render={() =>
            <BestOffersItem />
          } />
        </CarouselContent>
        <CarouselPrevious className='h-8 w-16' />
        <CarouselNext className='h-8 w-16' />
      </Carousel>
    </section>
  )
}
