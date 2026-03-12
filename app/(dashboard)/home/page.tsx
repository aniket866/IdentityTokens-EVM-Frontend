import React from "react";
import Metrics from "@/components/dashboard/Metrics";
import { TokenList } from "@/components/dashboard/TokenList";

// Sample token data — replace with real data from your API/contract using wagmi hooks
const sampleTokens = [
  {
    tokenId: "0x1a2b3c",
    name: "Vaccine",
    type: "Oracle",
    expiresIn: "5 years",
    endorsements: 42,
    historyAction: "endorsed" as const,
    actionWalletId: "0xkhu...512",
  },
  {
    tokenId: "0x4d5e6f",
    name: "KYC Verified",
    type: "Identity",
    expiresIn: "2 years",
    endorsements: 18,
    historyAction: "flagged" as const,
    actionWalletId: "0xmod...999",
  },
  {
    tokenId: "0x7g8h9i",
    name: "Education",
    type: "Credential",
    expiresIn: "10 years",
    endorsements: 65,
    historyAction: "revoked" as const,
    actionWalletId: "0xuni...001",
  },
  {
    tokenId: "0xj0k1l2",
    name: "Employment",
    type: "Attestation",
    expiresIn: "1 year",
    endorsements: 12,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-6 px-4 pt-9 pb-12 sm:px-6 md:pr-14 md:pl-10">
      <Metrics
        totalEndorsements={70}
        activeTokens={14}
        socials={3}
        badgesEarned="300+ Trust Received"
      />

      <TokenList variant="tokens" tokens={sampleTokens} />

      <TokenList variant="history" tokens={sampleTokens.slice(0, 3)} />
    </main>
  );
}
