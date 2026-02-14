// components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Button } from "./Button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import ToggleButton from "./ToggleButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const PAUSE_DURATION = 2000;
const WORDS = ["Earned", "Decentralized", "Sovereign", "Yours..."];

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
    lastScrollY.current = currentScrollY;
  });

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, DELETING_SPEED);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
        }, 0);
      }
    } else {
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, TYPING_SPEED);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_DURATION);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center bg-landing-bg dark:bg-landing-bg-dark">
      <motion.div
        className="fixed top-0 right-0 left-0 z-50 w-full bg-landing-bg dark:bg-landing-bg-dark"
        initial={{ y: 0 }}
        animate={{ y: isNavVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1512px] items-center justify-between px-4 md:h-[80px] md:px-[56px]">
          <Link href="/" className="flex items-center gap-2 md:gap-[17px]">
            <div className="relative h-8 w-8 md:h-10 md:w-10">
              {/* Light mode logo */}
              <Image
                src="/assets/logo.svg"
                alt="DIT Logo"
                fill
                className="object-contain dark:hidden"
              />

              {/* Dark mode logo */}
              <Image
                src="/assets/dark-logo.svg"
                alt="DIT Logo Dark"
                fill
                className="hidden object-contain dark:block"
              />
            </div>
            <span className="pt-1 font-atyp text-2xl leading-none text-black md:pt-2 md:text-[40px] dark:text-white">
              dit
            </span>
          </Link>
          <div className="flex items-center gap-3 md:gap-4">
            <ToggleButton />

            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === "authenticated");

                return (
                  <div
                    {...(!ready && {
                      "aria-hidden": true,
                      style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <Button
                            onClick={openConnectModal}
                            variant="primary"
                            className="px-4 py-2 text-sm font-semibold shadow-none md:px-6 md:py-3 md:text-base"
                          >
                            Connect Wallet
                          </Button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <Button
                            onClick={openChainModal}
                            variant="secondary"
                            className="bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-none hover:bg-red-600 md:px-6 md:py-3 md:text-base"
                          >
                            Wrong Network
                          </Button>
                        );
                      }

                      return (
                        <div style={{ display: "flex", gap: 12 }}>
                          <Button
                            onClick={openAccountModal}
                            variant="primary"
                            className="px-4 py-2 text-sm font-semibold shadow-none md:px-6 md:py-3 md:text-base"
                          >
                            {account.displayName}
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ""}
                          </Button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </div>
        </div>
      </motion.div>

      {/* Spacer for Fixed Navbar */}
      <div className="h-16 w-full flex-shrink-0 md:h-[80px]" />

      {/* Main Content Container */}
      <div
        className="relative mx-4 mt-4 flex w-full max-w-[1400px] flex-col items-center gap-8 overflow-hidden rounded-[28px] border border-corner-stroke/80 bg-slate-white/20 p-6 md:mx-[56px] md:mt-[19px] md:w-[calc(100%-112px)] md:flex-row md:gap-12 md:p-16 dark:border-corner-stroke-dark dark:bg-slate-dark/20"
        style={{ minHeight: "clamp(600px, 80vh, 862px)" }}
      >
        {/* Left Content: Text */}
        <div className="z-10 flex h-full w-full flex-1 flex-col justify-center space-y-6 text-center md:space-y-8 md:text-left">
          <div>
            <h1 className="font-atyp text-[32px] leading-[1.1] tracking-wide text-brand-blue md:text-[48px]">
              TRUST AND IDENTITY <br />
              <span className="mt-2 block text-black dark:text-white">ARE</span>
            </h1>

            <div className="mt-4 min-h-[60px] md:min-h-[80px]">
              <p className="font-garamond text-[28px] leading-tight text-black/90 italic sm:text-4xl md:text-5xl lg:text-6xl dark:text-white/90">
                {displayedText}
                <span className="animate-pulse font-normal">|</span>
              </p>
            </div>
          </div>

          <p className="mx-auto max-w-lg font-sans text-base leading-relaxed text-gray-600 md:mx-0 md:text-lg dark:text-gray-200">
            The first portable, recover-able and self-sovereign identity.
            <br className="hidden md:block" />
            Carry your reputation across any wallet, anywhere
          </p>
        </div>

        <div className="relative hidden h-full w-full flex-1 items-center justify-center md:flex">
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              src="/assets/IsometricID.png"
              alt="Identity Card"
              width={800}
              height={600}
              className="object-contain dark:drop-shadow-md/40 dark:drop-shadow-white"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
