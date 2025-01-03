'use client'

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"
import { Card } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import HeroImageLargeWidth from "./HeroImageLargeWidth";
import ImageCarousel from "./ImageCarousel";
import DescriptionRoomDetail from "./DescriptionRoomDetail";

export default function RoomDetail() {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(new Date())

  return (
    <>
      <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />

      {/* max width : 1024px */}
      <HeroImageLargeWidth />
      {/* min width :  1024px*/}
      <ImageCarousel />
      <DescriptionRoomDetail />

      <div className="mt-8 w-full">
        <div className="font-semibold text-[1.2rem] text-center mb-4">Reserve Today, pay on arrival.</div>

        <Card className="max-w-[1220px] mx-auto flex justify-center flex-wrap gap-16 p-8 items-center">
          <div className="flex flex-col items-center gap-3">
            <label htmlFor="" className="font-semibold">Choose your check in date</label>
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              className="rounded-md border"
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            <label htmlFor="" className="font-semibold">Choose your check out date</label>
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              className="rounded-md border"
            />
          </div>
          
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="font-semibold">How many guest?</label>
              <Select>
                <SelectTrigger className="w-[300px] sm:w-[480px]">
                  <SelectValue placeholder="Select a number of guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a number of guests</SelectLabel>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="" className="font-semibold">Anything message we should know about your stay?</label>

              <Textarea className="resize-none w-[300px] sm:w-[480px]" placeholder="type your message here..." />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="text-white" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Include breakfast?
              </label>
            </div>

            <div>
              <div className="font-semibold">Total Price: Rp. 2.000.000 </div>
            </div>

            <div>
              <Button variant='default' className={cn('text-white')}>Reserve Now</Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
