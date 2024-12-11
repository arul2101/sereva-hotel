import { Globe, Phone } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";

export default function ContactUs() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="">
        <NavigationMenuItem className="">
          <NavigationMenuTrigger><Phone className="max-sm:h-5 max-sm:w-5" /></NavigationMenuTrigger>
          <NavigationMenuContent>
            <section className="w-[150px] p-4">
              <div className="text-primary font-bold text-[1.1rem] py-2">Contact Us</div>
              <div className="h-[.01rem] w-full bg-slate-200"></div>
              <div className="flex items-center gap-1 py-4">
                <Globe className="text-primary h-5 w-5" />
                <span className="font-light text-[.9rem] text-primary">Global Access</span>
              </div>

              <div className="font-light">
                +621-7250855
              </div>
            </section>

          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
