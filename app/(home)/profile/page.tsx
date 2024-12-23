import { poppins } from "@/fonts";
import { Pencil } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <section className={`${poppins.className} px-4 py-12 flex flex-col gap-4 justify-center items-center`}>

      <div className="w-[180px] h-[180px]">
        <Image
          src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
          alt="profile image"
          width={500}
          height={500}
          className="rounded-full w-full h-full object-cover"
        />
      </div>

      <div className="font-semibold text-[1.2rem] mb-4">John Doe</div>

      <div className="w-[440px] space-y-2">
        <div className="flex gap-3">
          <label htmlFor="" className="font-semibold w-[35%]">Email Address</label>
          <p className="w-[50%]">johndoe123@gmail.com</p>
          {/* <Pencil className="cursor-pointer text-primary" /> */}
        </div>
        <div className="flex gap-3">
          <label htmlFor="" className="font-semibold w-[35%]">Username</label>
          <p className="w-[50%]">johndoe123</p>
          <Pencil className="cursor-pointer text-primary" />
        </div>

        <div className="flex gap-3">
          <label htmlFor="" className="font-semibold w-[35%]">Full Name</label>
          <p className="w-[50%]">John Doe</p>
          <Pencil className="cursor-pointer text-primary" />
        </div>

        
      </div>
      
    </section>
  )
}
