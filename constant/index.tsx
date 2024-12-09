import React from "react";
import { Luggage, Sparkles, UtensilsCrossed, WavesLadder } from "lucide-react";

export const menuNavbar: {
  label: string;
  href: string;
}[] = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About Us',
      href: '#about-us'
    },
    {
      label: 'Offers & Inspiration',
      href: '/bookings'
    }
  ];

export const services: {
  title: string;
  icon: React.ReactNode;
  description: string;
}[] = [
    {
      title: 'Most Baggage Hold',
      icon: <Luggage className="h-12 w-12" />,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos ullam rerum iste consequuntur modi corrupti similique minima obcaecati nobis.'
    },
    {
      title: 'Lunch & Dinner',
      icon: <UtensilsCrossed className="h-12 w-12" />,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos ullam rerum iste consequuntur modi corrupti similique minima obcaecati nobis.'
    },
    {
      title: 'Beauty & Spa',
      icon: <Sparkles className="h-12 w-12" />,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos ullam rerum iste consequuntur modi corrupti similique minima obcaecati nobis.'
    },
    {
      title: 'Swimming Pool',
      icon: <WavesLadder className="h-12 w-12" />,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos ullam rerum iste consequuntur modi corrupti similique minima obcaecati nobis.'
    },
  ];

export const facilities: {
  img: string;
  title: string;
  description: string;
}[] = [
    {
      title: 'Nature Inspired Pool',
      img: 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Serene Swimming Pool with a Touch of Paradise.'
    },
    {
      title: 'Integrated Tourist Area',
      img: 'https://images.unsplash.com/photo-1521092593988-d2188e25a77d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Tourism integration is enhancing travel experiences.'
    },
    {
      title: 'Window Sunset',
      img: 'https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'From the Room, Witness the Beauty of the World.'
    },
  ];