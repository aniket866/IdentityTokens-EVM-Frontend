"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { z } from "zod";

export const tokenSchema = z.object({
  name: z.string().min(1, "Token Name is required"),
  type: z.string().min(1, "Token Type is required"),
  value: z.string().min(1, "Token Value is required"),
  about: z.string().optional(),
  recovery: z.string().optional(),
});

type TokenState = z.infer<typeof tokenSchema>;

interface CreateTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateToken?: (token: TokenState) => void;
}

export function CreateTokenModal({
  isOpen,
  onClose,
  onCreateToken,
}: CreateTokenModalProps) {
  const [tokenState, setTokenState] = useState<TokenState>({
    name: "",
    type: "",
    value: "",
    about: "",
    recovery: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof TokenState, string>>
  >({});

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setTokenState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof TokenState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = tokenSchema.safeParse(tokenState);
    if (!result.success) {
      const newErrors: Partial<Record<keyof TokenState, string>> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          newErrors[issue.path[0] as keyof TokenState] = issue.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    if (onCreateToken) {
      onCreateToken(result.data);
    }

    // Clear state
    setTokenState({ name: "", type: "", value: "", about: "", recovery: "" });
    setErrors({});
    onClose();
  };

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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Token Name */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              Token Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={tokenState.name}
              onChange={handleChange}
              placeholder="Enter the token name"
              className="w-full rounded-lg px-4 py-2 font-utsaha text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            {errors.name && (
              <span className="text-xs text-red-500">{errors.name}</span>
            )}
          </div>

          {/* Token Type */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              Token Type <span className="text-red-500">*</span>
            </label>
            <select
              name="type"
              value={tokenState.type}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg px-4 py-2 font-utsaha text-white transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <option value="" disabled>
                Select a Token Type
              </option>
              <option value="education">Education Credential</option>
              <option value="professional">Professional Skill</option>
              <option value="achievement">Achievement</option>
              <option value="identity">Identity Document</option>
              <option value="socials">Socials</option>
            </select>
            {errors.type && (
              <span className="text-xs text-red-500">{errors.type}</span>
            )}
          </div>

          {/* Token Value */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              Token Value <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="value"
              value={tokenState.value}
              onChange={handleChange}
              placeholder="Enter the token value"
              className="w-full rounded-lg px-4 py-2 font-utsaha text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            {errors.value && (
              <span className="text-xs text-red-500">{errors.value}</span>
            )}
          </div>

          {/* About Token */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              About Token
            </label>
            <textarea
              name="about"
              value={tokenState.about}
              onChange={handleChange}
              rows={3}
              placeholder="Describe this identity token…"
              className="w-full resize-none rounded-lg px-4 py-2 font-utsaha text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            {errors.about && (
              <span className="text-xs text-red-500">{errors.about}</span>
            )}
          </div>

          {/* Recovery Wallet Address */}
          <div className="flex flex-col gap-1.5">
            <label className="font-utsaha text-sm text-gray-300">
              Recovery Wallet Address
            </label>
            <input
              type="text"
              name="recovery"
              value={tokenState.recovery}
              onChange={handleChange}
              placeholder="Enter the recovery wallet address"
              className="w-full rounded-lg px-4 py-2 font-utsaha text-white placeholder-gray-500 transition-all focus:ring-1 focus:ring-[#0553FD] focus:outline-none"
              style={{
                backgroundColor: "#212734",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            {errors.recovery && (
              <span className="text-xs text-red-500">{errors.recovery}</span>
            )}
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
