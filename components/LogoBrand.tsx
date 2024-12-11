import { inter } from "@/fonts";
import Link from "next/link";

export default function LogoBrand() {
  return (
    <Link href='/'>
      <span className={`${inter.className} font-bold text-[1.3rem]`}>Sereva</span>
      <span className="text-[2rem]">.</span>
      <span className="text-primary font-bold text-[1.3rem]">{" "}Hotel</span>
    </Link>
  )
}
