"use client";

import React from "react";
import { X } from "lucide-react";

interface CreateTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateTokenModal({ isOpen, onClose }: CreateTokenModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm duration-200"
      onClick={onClose}
    >
      <div
        className="animate-in zoom-in-95 relative w-full max-w-xl rounded-2xl p-6 shadow-2xl duration-200 md:max-w-2xl md:p-8"
        style={{
          backgroundColor: "#18191D",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="font-utsaha text-2xl text-white">
            Mint Identity Token
          </h2>
        </div>

        {/* Form */}
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Token Name */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              Token Name
            </label>
            <input
              type="text"
              placeholder="Enter the token name"
              className="w-full rounded-lg px-4 py-2 font-utsaha text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </div>

          {/* Token Type */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              Token Type
            </label>
            <select
              className="w-full appearance-none rounded-lg px-4 py-2 font-utsaha text-white transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <option value="" disabled selected>
                Select a Token Type
              </option>
              <option value="education">Education Credential</option>
              <option value="professional">Professional Skill</option>
              <option value="achievement">Achievement</option>
              <option value="identity">Identity Document</option>
              <option value="socials">Socials</option>
            </select>
          </div>

          {/* Token Value */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              Token Value
            </label>
            <input
              type="text"
              placeholder="Enter the token value"
              className="w-full rounded-lg px-4 py-2 font-utsaha text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </div>

          {/* About Token */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              About Token
            </label>
            <textarea
              rows={3}
              placeholder="Describe this identity token…"
              className="w-full resize-none rounded-lg px-4 py-2 font-utsaha text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </div>

          {/* Recovery Wallet Address */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              Recovery Wallet Address
            </label>
            <input
              type="text"
              placeholder="Enter the recovery wallet address"
              className="w-full rounded-lg px-4 py-2 font-utsaha text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </div>

          {/* Submit */}
          <div className="mt-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-brand-green py-2.5 font-utsaha text-black transition-all hover:bg-brand-green active:scale-[0.98]"
            >
              Mint Identity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
