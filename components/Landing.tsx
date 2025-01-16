"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Landing = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col   my-auto">
      <div className="flex flex-col items-center justify-center my-8">
        <h1 className="text-3xl font-bold">Next Frames</h1>
        <p>Your first step to learning frames</p>
      </div>

      <div className="grid grid-cols-2 gap-8 max-w-2xl">
        {[
          { title: "Learn Basics", image: "/learnimage.png", link: "/learn" },
          {
            title: "Examples",
            image: "/examplesimage.png",
            link: "/awesome-frames",
          },
          { title: "Build Projects", image: "/startimage.png", link: "/build" },
          {
            title: "Docs",
            image: "/resourcesimage.png",
            link: "https://docs.farcaster.xyz/developers/frames/v2/getting-started",
          },
        ].map((item, index) => (
          <div
            onClick={() => router.push(`${item.link}`)}
            key={index}
            className="relative group cursor-pointer transition-all duration-300"
          >
            <div className="relative w-[200px] h-[200px] overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:opacity-20 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xl font-bold z-10 group-hover:scale-110 transition-transform duration-300">
                  {item.title}
                </p>
                <span className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
