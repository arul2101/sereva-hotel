import { Star } from "lucide-react";

type StartsProps = {
  length: number;
  fill?: number;
}

export default function Stars({ length, fill = 0 }: StartsProps) {
  return Array.from({ length }).map((_, index) => index + 1 <= fill ? (
    <Star key={index} className='text-orange-400' fill='orange' />
  ) : (
    <Star key={index} className='text-orange-400' fill='white' />
  ))
}


