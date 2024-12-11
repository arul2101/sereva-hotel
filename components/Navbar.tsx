import { menuNavbar } from "@/constant/index";
import Each from "@/utils/Each";
import { Button } from "./ui/button";
import { BookText, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { poppins } from "@/fonts/index";
import LogoBrand from "./LogoBrand";
import ContactUs from "./ContactUs";
import BurgersMenu from "./BurgersMenu";

export default function Navbar() {
  return (
    <nav className="py-3 text-[#353030] px-2 sticky top-0 left-0 right-0 z-[999] bg-white backdrop-blur-[10px] bg-opacity-90">
      <div className="max-w-[1712px] mx-auto flex items-center justify-between">
        <div>
          <LogoBrand />
        </div>

        <div className="lg:flex lg:items-center gap-12 hidden">
          <Each of={menuNavbar} render={({ label, href }) =>
            <Link href={href} className={`${poppins.className} hover:text-primary transition-all`}>{label}</Link>
          } />
        </div>

        <div className="flex items-center gap-2">
          <ContactUs />
          <Button asChild variant='outline' className={cn('max-sm:w-[3rem] h-[2.2rem] w-[7rem] rounded-2xl')}>
            <Link href='/login' className="flex items-center">
              <LogIn />
              <span className="max-sm:hidden">Login</span>
            </Link>
          </Button>
          <Button asChild variant='default' className={cn('bg-primary text-white h-[2.2rem] w-[7rem] max-sm:w-[3rem] rounded-2xl')}>
            <Link href='booking' className="flex items-center">
              <BookText />
              <span className="max-sm:hidden">Book Now</span>
            </Link>
          </Button>

          <BurgersMenu hidden />
        </div>
      </div>
    </nav>
  )
}
