"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";

interface TokenFormProps {
  isOpen: boolean;
  onClose: () => void;
  tokenName?: string;
  tokenId?: string;
  onEdit?: (data: {
    tokenId: string;
    tokenName: string;
    tokenType: string;
    tokenValue: string;
    aboutToken: string;
    recoveryAddress: string;
  }) => void;
  onBurn?: (tokenId: string) => void;
}

export function TokenForm({
  isOpen,
  onClose,
  tokenName = "Token Name",
  tokenId = "tk-0x0000000000000000",
  onEdit,
  onBurn,
}: TokenFormProps) {
  const [formData, setFormData] = useState({
    tokenName: tokenName,
    tokenType: "",
    tokenValue: "",
    aboutToken: "",
    recoveryAddress: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData, string>>
  >({});

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof formData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};
    if (!formData.tokenName.trim())
      newErrors.tokenName = "Token Name is required";
    if (!formData.tokenType.trim())
      newErrors.tokenType = "Token Type is required";
    if (!formData.tokenValue.trim())
      newErrors.tokenValue = "Token Value is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (onEdit) {
      onEdit({ tokenId, ...formData });
    }
    setErrors({});
    onClose();
  };

  const handleBurn = () => {
    if (onBurn) {
      onBurn(tokenId);
    }
    onClose();
  };

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm duration-200"
      onClick={onClose}
    >
      <div
        className="animate-in zoom-in-95 relative w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl duration-200 md:max-w-2xl"
        style={{
          backgroundColor: "#18191D",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between border-b border-white/5 px-6 pt-6 pb-5">
          {/* Title + dropdown */}
          <button
            type="button"
            className="flex min-w-0 cursor-pointer items-center gap-2 font-utsaha text-lg leading-tight text-white transition-opacity hover:opacity-80"
          >
            <span className="max-w-[260px] truncate md:max-w-sm">
              {tokenName} /{" "}
              <span className="text-base text-gray-400">{tokenId}</span>
            </span>
            <ChevronDown size={20} className="shrink-0 text-gray-400" />
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="ml-4 shrink-0 rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* ── Form body ── */}
        <form className="flex flex-col gap-4 px-6 py-5" onSubmit={handleSubmit}>
          {/* Token Name */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              Token Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="tokenName"
              value={formData.tokenName}
              onChange={handleChange}
              placeholder="Enter the token name"
              className="w-full rounded-lg px-4 py-2 font-utsaha text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            {errors.tokenName && (
              <span className="text-xs text-red-500">{errors.tokenName}</span>
            )}
          </div>

          {/* Token Type */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              Token Type <span className="text-red-500">*</span>
            </label>
            <select
              name="tokenType"
              value={formData.tokenType}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg px-4 py-2 font-utsaha text-white transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <option value="" disabled>
                Select token type
              </option>
              <option value="education">Education Credential</option>
              <option value="professional">Professional Skill</option>
              <option value="achievement">Achievement</option>
              <option value="identity">Identity Document</option>
              <option value="socials">Socials</option>
            </select>
            {errors.tokenType && (
              <span className="text-xs text-red-500">{errors.tokenType}</span>
            )}
          </div>

          {/* Token Value */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              Token Value <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="tokenValue"
              value={formData.tokenValue}
              onChange={handleChange}
              placeholder="Enter the token value"
              className="w-full rounded-lg px-4 py-2 font-utsaha text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            {errors.tokenValue && (
              <span className="text-xs text-red-500">{errors.tokenValue}</span>
            )}
          </div>

          {/* About Token */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              About Token
            </label>
            <input
              type="text"
              name="aboutToken"
              value={formData.aboutToken}
              onChange={handleChange}
              placeholder="Anything About Token"
              className="w-full rounded-lg px-4 py-2 font-utsaha text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
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
              name="recoveryAddress"
              value={formData.recoveryAddress}
              onChange={handleChange}
              placeholder="Enter the wallet address"
              className="w-full rounded-lg px-4 py-2 font-utsaha text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </div>

          {/* ── Action buttons ── */}
          <div className="mt-2 flex items-center gap-3">
            {/* Burn */}
            <button
              type="button"
              onClick={handleBurn}
              className="flex flex-1 items-center justify-center gap-2.5 rounded-lg py-2.5 font-utsaha text-base text-black transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundColor: "#FF0000" }}
            >
              <Image
                src="/assets/trash.svg"
                alt="burn"
                width={20}
                height={20}
              />
              Burn
            </button>

            {/* Edit */}
            <button
              type="submit"
              className="flex flex-1 items-center justify-center gap-2.5 rounded-lg bg-brand-green py-2.5 font-utsaha text-base text-black transition-all hover:opacity-90 active:scale-[0.98]"
            >
              <Image src="/assets/edit.svg" alt="edit" width={18} height={18} />
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
