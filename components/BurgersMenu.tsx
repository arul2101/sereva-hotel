import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { menuNavbar } from "@/constant";
import Each from "@/utils/Each";
import Link from "next/link";



export default function BurgersMenu({ hidden = true }: { hidden: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`${hidden ? 'lg:hidden' : ''} text-black cursor-pointer block outline-none`}>
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
  )
}
