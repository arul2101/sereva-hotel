import { menuNavbar } from "@/constant/index";
import Each from "@/utils/Each";
import { Button } from "./ui/button";
import { BookText, Globe, LogIn, Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";

const inter = Inter({
  weight: ['400', '700'],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400'],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="py-3 text-[#353030] px-2">
      <div className="max-w-[1712px] mx-auto flex items-center justify-between">
        <div>
          <Link href='/'>
            <span className={`${inter.className} font-bold text-[1.3rem]`}>Sereva</span>
            <span className="text-[2rem]">.</span>
            <span className="text-primary font-bold text-[1.3rem]">{" "}Hotel</span>
          </Link>
        </div>

        <div className="lg:flex lg:items-center gap-12 hidden">
          <Each of={menuNavbar} render={({ label, href }) =>
            <Link href={href} className={`${poppins.className} hover:text-primary transition-all`}>{label}</Link>
          } />
        </div>

        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger><Phone className="max-sm:h-5 max-sm:w-5" /></NavigationMenuTrigger>
                <NavigationMenuContent>
                  <section className="w-[200px] p-4">
                    <div className="text-primary font-bold text-[1.1rem] py-2">Contact Us</div>
                    <div className="h-[.01rem] w-full bg-slate-200"></div>
                    <div className="flex items-center gap-1 py-4">
                      <Globe className="text-primary h-5 w-5" />
                      <span className="font-light text-primary">Global Access</span>
                    </div>

                    <div className="font-light">
                      +621-7250855
                    </div>
                  </section>

                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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

          <DropdownMenu>
            <DropdownMenuTrigger className="text-black cursor-pointer lg:hidden block outline-none">
              <Menu className="outline-none" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-[200px] mt-4 mr-4">
              <DropdownMenuLabel className="p-2">Menu</DropdownMenuLabel>

              <DropdownMenuSeparator />

              <Each of={menuNavbar} render={({ label, href }) =>
                <DropdownMenuItem>
                  <Link href={href} className="w-full transition-all px-4 py-2 rounded-md hover:bg-slate-100 ">{label}</Link>
                </DropdownMenuItem>
              } />

            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}
