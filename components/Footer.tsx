import { menuFooter, menuFooterCompany, menuFooterProduct } from "@/constant";
import Each from "@/utils/Each";
import { Inter, Poppins } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  weight: ['400', '700'],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '300'],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] border-t border-1 border-muted">
      <div className="max-w-[1412px] mx-auto px-2 py-8">
        <div className="mb-4 md:flex md:justify-between">
          <div className="md:w-[45%]">
            <div className="mb-2">
              <span className={`${inter.className} font-bold text-[1.3rem]`}>Sereva</span>
              <span className="text-[2rem]">.</span>
              <span className="text-primary font-bold text-[1.3rem]">{" "}Hotel</span>
            </div>
            
            <div className={`${poppins.className} flex flex-col text-[#676464] font-light mb-4`}>
              <span>We believe in the power of the great outdoors. We think that everyone deserved the chance to explore the wild and to find their very own adventure.</span>
            </div>
          </div>

          <div className="flex gap-16 mt-8 md:mt-0">
            <div>
              <div className={`${inter.className} text-[1.3rem] font-bold mb-4`}>Product</div>
              <div className={`${poppins.className} flex flex-col font-light gap-2 text-[#676464]`}>
                <Each of={menuFooterProduct} render={({label, href}) => 
                  <Link href={href} className="flex items-center gap-1 hover:text-black">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="icon-arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                    </svg>
                    {label}
                  </Link>
                } />
              </div>
            </div>

            <div>
              <div className={`${inter.className} text-[1.3rem] font-bold mb-4`}>Company</div>
              <div className={`${poppins.className} flex flex-col font-light gap-2 text-[#676464]`}>
                <Each of={menuFooterCompany} render={({label, href}) => 
                  <Link href={href} className="flex items-center gap-1 hover:text-black">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="icon-arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                    </svg>
                    {label}
                  </Link>
                } />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[.5px] bg-slate-300 mb-8 mt-12"></div>

        <div className="text-[#353030] p-2 space-y-4 lg:space-y-0 lg:flex lg:justify-between lg:items-center font-light">
          <div>&copy; 2024 Sereva Hotel. All rights reserved.</div>

          <div className="flex gap-4">
            <Each of={menuFooter} render={({label, href}) => 
              <Link href={href} className="hover:text-black">{label}</Link>
            } />
          </div>
        </div>
      
      </div>
    </footer>
  )
}
