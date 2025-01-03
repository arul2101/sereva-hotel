import Image from 'next/image'
import React from 'react'

export default function HeroImageLargeWidth() {
  return (
    <div className="mt-5 lg:block hidden">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="w-full">
          <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image-room" width={1920} height={1080} className="rounded-2xl w-full" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image-room" width={1920} height={1080} className="rounded-2xl" />
          <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image-room" width={1920} height={1080} className="rounded-2xl" />
          <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image-room" width={1920} height={1080} className="rounded-2xl" />
          <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image-room" width={1920} height={1080} className="rounded-2xl" />
        </div>
      </div>
    </div>
  )
}
