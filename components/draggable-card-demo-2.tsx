"use client";
import React from "react";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Mail, Github } from "lucide-react"; 


export default function DraggableCardDemo() {
  const items = [
    {
      title: "Profile",
      image: "/profile.png",
    },
    {
      title: "Agency",
      image: "/agency.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Beauty Product",
      image: "/beauty product.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Bakery",
      image:
        "/bakery.jpeg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Blog",
      image:
        "/blog.jpeg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
      {
      title: "Paw Care",
      image: "/paw care.jpeg",
    },
    {
      title: "Cake",
      image:
        "/cake.jpeg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Card",
      image:
        "/card.jpeg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Delicious",
      image:
        "/delicious.jpeg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
     {
      title: "Nail Studio",
      image:
        "/nails.jpeg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
     {
      title: "Freelance ToolKit",
      image:
        "/freelance toolkit.jpeg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "Fitness",
      image:
        "/fitness.jpeg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];


return (
  <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
    {/* 🔥 Catchy background text with icons */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[90%] text-center">
      <h2 className="text-3xl md:text-6xl font-extrabold text-neutral-300 dark:text-neutral-800 mb-6">
        🚀 Let’s Build Something Amazing
      </h2>
      <div className="flex items-center justify-center gap-8 text-neutral-500">
        {/* Email */}
        <a
          href="mailto:mansipatel2900@gmail.com"
          className="flex items-center gap-2 hover:text-pink-600 transition-colors"
        >
          <Mail size={28} />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/01maya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-pink-600 transition-colors"
        >
          <Github size={28} />
        </a>
      </div>
    </div>

    {/* 🔥 Cards */}
    {items.map((item, i) => (
      <DraggableCardBody
        key={i}
        className={`${item.className} rounded-2xl shadow-xl bg-white scale-85`}

      >
        <img
          src={item.image}
          alt={item.title}
          className="pointer-events-none relative z-10 h-[95%] w-[95%] rounded-2xl object-cover"

        />
        <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
          {item.title}
        </h3>
      </DraggableCardBody>
    ))}
  </DraggableCardContainer>
);

}
