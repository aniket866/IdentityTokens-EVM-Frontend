"use client";

import React from "react";

const CTASection = () => {
  return (
    <section className="flex w-full justify-center bg-dark-bg px-4 py-10 md:py-20">
      {/* Gradient Box */}
      <div className="gradient-cta relative flex h-auto min-h-[300px] w-full max-w-[1264px] flex-col items-center overflow-hidden rounded-[30px] text-center shadow-2xl md:h-[510px] md:rounded-[57px]">
        {/* --- Main Content Area --- */}

        {/* Headline */}
        <h2 className="mx-auto mt-8 max-w-[90%] px-4 font-utsaha text-2xl tracking-tight text-black md:mt-[72px] md:max-w-[768px] md:px-0 md:text-6xl">
          By Stability Nexus, For Everyone
        </h2>

        {/* Subheadline */}
        <p className="mt-5 px-4 font-utsaha text-lg text-black md:mt-[24px] md:text-2xl">
          Mint your Decentralized ID today
        </p>

        {/* --- Footer Area (Logos) --- */}
        <div className="mt-auto flex w-full flex-row items-center justify-between px-6 pb-8 md:px-20 md:pb-16">
          <div className="flex items-center gap-2 md:gap-3">
            {/* Logo Icon */}
            <img
              src="/assets/logo.svg"
              alt="DIT Logo"
              className="h-6 w-6 object-contain md:h-12 md:w-12"
            />
            {/* Logo Text with Custom Font */}
            <span className="font-atyp text-xl tracking-tighter text-dark-bg md:text-4xl">
              dit
            </span>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://stability.nexus/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110"
            >
              <img
                src="/stability.svg"
                alt="Stability Nexus"
                className="h-6 w-6 object-contain md:h-10 md:w-10"
              />
            </a>
            <a
              href="https://github.com/StabilityNexus"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110"
            >
              <img
                src="/socials/GitHub.svg"
                alt="GitHub"
                className="h-6 w-6 object-contain md:h-10 md:w-10"
              />
            </a>

            <a
              href="https://discord.gg/YzDKeEfWtS"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110"
            >
              <img
                src="/socials/Discord.svg"
                alt="Discord"
                className="h-6 w-6 object-contain md:h-10 md:w-10"
              />
            </a>

            <a
              href="https://linkedin.com/company/stability-nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110"
            >
              <img
                src="/socials/LinkedIn.svg"
                alt="LinkedIn"
                className="h-6 w-6 object-contain md:h-10 md:w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
