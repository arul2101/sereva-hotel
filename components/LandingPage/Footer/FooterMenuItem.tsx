import type { Menu } from '@/constant';
import Link from 'next/link'
import React from 'react'


export default function FooterMenuItem({ href, label }: Menu) {
  return (
    <Link href={href} className="flex items-center gap-1 hover:text-black">
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="icon-arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
      </svg>
      {label}
    </Link>
  )
}
