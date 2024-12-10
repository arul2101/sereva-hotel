'use client'

import React from 'react'
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import Autoplay from 'embla-carousel-autoplay';

const poppins = Poppins({
  weight: ['400', '300', '600'],
  subsets: ["latin"],
});


export default function BestOffers() {
  return (
    <section className='max-w-[1812px] mx-auto px-16 mt-8'>
      <div className='font-semibold text-[2.4rem] mb-8 text-center'>Best Offers</div>

      
      <Carousel
        opts={{
          align:"start"
        }}
        className="max-w-[1412px] mx-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Link href='/'>
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
                        <Star className='text-orange-400' fill='orange' />
                        <Star className='text-orange-400' fill='orange' />
                        <Star className='text-orange-400' fill='orange' />
                        <Star className='text-orange-400' fill='orange' />
                        <Star className='text-orange-400' fill='white' />
                      </div>

                      <div className='mt-4'>
                        <span className='font-bold text-[1.1rem]'>Rp. 1.500.000</span>
                        <span className='text-[#676464]'>/ Night</span>
                      </div>
                    </div>
                  </Card>
                </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='h-8 w-16' />
        <CarouselNext className='h-8 w-16' />
      </Carousel>
    </section>
  )
}
