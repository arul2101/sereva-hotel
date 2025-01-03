import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Each from "@/utils/Each";
import Image from "next/image";

const testCarouselImage = [
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
]

export default function ImageCarousel() {
  return (
    <div className="lg:hidden block mt-5">
      <Carousel
        opts={{
          align: "start"
        }}
        className="max-w-[1412px] mx-auto"
        plugins={[
          Autoplay({
            delay: 12000,
          }),
        ]}
      >
        <CarouselContent>
          <Each of={testCarouselImage} render={({ src }) =>
            <CarouselItem className="rounded-2xl">
              <Image src={src} alt="image-room" width={1920} height={1080} className="w-full h-full rounded-2xl" />
            </CarouselItem>
          } />
        </CarouselContent>
        <CarouselPrevious className='ml-8 h-8 w-8' />
        <CarouselNext className='mr-8 w-8' />
      </Carousel>
    </div>
  )
}
