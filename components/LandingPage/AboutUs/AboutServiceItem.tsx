import type { Services } from "@/constant";

export default function AboutServiceItem({ icon, title, description }: Services) {
  return (
    <div className="flex gap-4 items-center shadow-[9px_9px_11px_4px_rgba(0,_0,_0,_0.1)] p-4 rounded-lg">
      <div className="text-black h-[5rem] w-[5rem] rounded-full flex justify-center items-center">
        <span>
          {icon}
        </span>
      </div>
      <div className="flex-1">
        <h2 className="text-[1.5rem] font-semibold">{title}</h2>
        <span className="text-[.8rem] font-light md:text-[1rem]">{description}</span>
      </div>
    </div>
  )
}
