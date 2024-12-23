import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import { Loader2, UserRound } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

export default function LogoProfile() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="">
        <NavigationMenuItem className="">
          <NavigationMenuTrigger><UserRound className="max-sm:h-5 max-sm:w-5" /></NavigationMenuTrigger>
          <NavigationMenuContent>
            <section className="w-[150px] p-4">
              <div className="text-primary font-bold text-[1.1rem] py-2">Hi John!</div>
              <div className="h-[.01rem] w-full bg-slate-200"></div>
              <div className='space-y-4 mt-4'>
                <Button asChild variant='outline' className={cn('w-full')}>
                  <Link href='/profile' className='font-light'>Edit Profile</Link>
                </Button>

                <Button asChild variant='outline' className={cn('w-full')}>
                  <Link href='/my-bookings' className='font-light'>My Bookings</Link>
                </Button>

                <Button variant='destructive' className={cn('w-full')}>Logout</Button>
                <Button disabled variant='destructive' className={cn('w-full')}><Loader2 className='animate-spin' />Loading</Button>
              </div>
            </section>

          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
