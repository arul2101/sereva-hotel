import React from "react";
import { Luggage, Sparkles, UtensilsCrossed, WavesLadder } from "lucide-react";

export type Menu = {
  label: string;
  href: string;
};

export type Services = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

export type Facilities = {
  img: string;
  title: string;
  description: string;
};

export type MenuFAQ = {
  id: string;
  question: string;
  answer: string;
};

export const menuNavbar: Menu[] = [
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
    href: '#best-offers'
  }
];

export const services: Services[] = [
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

export const facilities: Facilities[] = [
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

export const menuFooterProduct: Menu[] = [
  {
    label: 'Features',
    href: '/features'
  },
  {
    label: 'Integrations',
    href: '/integrations'
  },
  {
    label: 'Pricing',
    href: '/pricing'
  }
];

export const menuFooterCompany: Menu[] = [
  {
    label: 'About Us',
    href: '/about-us'
  },
  {
    label: 'Careers',
    href: '/careers'
  },
  {
    label: 'Offers & Inspiration',
    href: '/'
  },
  {
    label: 'Brand',
    href: '/'
  },
]

export const menuFooter: Menu[] = [
  {
    label: 'Terms of Services',
    href: '/'
  },
  {
    label: 'Policy Service',
    href: '/'
  },
  {
    label: 'Cookie Policy',
    href: '/'
  },
  {
    label: 'Partners',
    href: '/'
  }
]

export const menuFAQ: MenuFAQ[] = [
  {
    id: 'item-1',
    question: 'What is Sereva Hotel?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis, sequi vero sint fuga quo expedita quas adipisci inventore nam rerum consectetur temporibus assumenda nobis nemo, quod blanditiis, vel eius.'
  },
  {
    id: 'item-2',
    question: 'Where is the location?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis, sequi vero sint fuga quo expedita quas adipisci inventore nam rerum consectetur temporibus assumenda nobis nemo, quod blanditiis, vel eius.'
  },
  {
    id: 'item-3',
    question: 'How much are the prices?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis, sequi vero sint fuga quo expedita quas adipisci inventore nam rerum consectetur temporibus assumenda nobis nemo, quod blanditiis, vel eius.'
  },
  {
    id: 'item-4',
    question: 'What are the facilities provided in Sereva Hotel?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis, sequi vero sint fuga quo expedita quas adipisci inventore nam rerum consectetur temporibus assumenda nobis nemo, quod blanditiis, vel eius.'
  },
]