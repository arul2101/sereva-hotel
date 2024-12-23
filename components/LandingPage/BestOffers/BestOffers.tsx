import RoomsCarousel from '@/components/RoomsCarousel';


export default function BestOffers() {
  return (
    <section className='max-w-[1812px] mx-auto px-16 py-16 mt-8' id='best-offers'>
      <RoomsCarousel delay={8000} title='Best Offers' data={[1,2,3,4,5]} />
    </section>
  )
}
