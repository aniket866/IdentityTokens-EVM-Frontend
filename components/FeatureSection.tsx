"use client";
import React, { useRef } from "react";
import FeatureCard from "./cards/FeatureCard";

interface FeatureData {
  image: string;
  title: string;
}

export const FeatureSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features: FeatureData[] = [
    {
      image: "/cards/FeatureCard1.png",
      title: "Build and Earn Reputation from Endorsements",
    },
    {
      image: "/cards/FeatureCard2.png",
      title: "Showcase your on-chain reputation instantly.",
    },
    {
      image: "/cards/FeatureCard3.png",
      title: "Level up your credibility with every endorsement.",
    },
    {
      image: "/cards/FeatureCard4.png",
      title: "Your Identity travels with you across wallets!",
    },
    {
      image: "/cards/FeatureCard5.png",
      title: "You own the lock, You own the key Recover your identity",
    },
    {
      image: "/cards/FeatureCard6.png",
      title: "Mint your Identity Join the community.",
    },
  ];

  const getScrollAmount = () => {
    const isMobile = window.innerWidth < 768;
    return isMobile ? window.innerWidth * 0.85 + 16 : 466 + 42;
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-landing-bg py-20">
      <div className="relative mx-auto max-w-[1440px] px-4">
        {/* --- Header Section --- */}
        <div className="relative mb-16 flex flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="mb-2 font-utsaha text-3xl tracking-wide text-landhead-text md:text-5xl">
              The Architecture of
            </h2>
            <h1 className="font-utsaha text-4xl tracking-tight text-landhead-text md:text-6xl">
              Trust
            </h1>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute right-0 bottom-2 hidden gap-4 md:flex">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue transition-colors hover:bg-brand-blue-hover"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform group-hover:-translate-x-0.5"
              >
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll Right"
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue transition-colors hover:bg-brand-blue-hover"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* --- Carousel Section --- */}
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex snap-x snap-mandatory items-center overflow-x-auto pb-10"
        >
          <div className="flex gap-4 md:gap-[42px]">
            {features.map((item, index) => (
              <div key={index} className="shrink-0 snap-center">
                <FeatureCard
                  bgImage={item.image}
                  title={item.title}
                  textColor={index % 2 === 0 ? "text-white" : "text-black"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default FeatureSection;
