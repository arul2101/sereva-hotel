import type { Facilities } from "@/constant";
import Image from "next/image";

export default function AboutFacilitieItem({ img, title, description }: Facilities) {
  return (
    <div className="">
      <div className="mb-2">
        <Image src={img} alt={title} height={450} width={450} className="rounded-[2rem]" />
      </div>

      <div>
        <h2 className="font-semibold text-[1.5rem]">{title}</h2>
        <span>{description}</span>
      </div>
    </div>
  )
}
