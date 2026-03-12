"use client";

import React from "react";
import DashboardMetrics from "@/components/dashboard/DashboardMetrics";
import { TokenList } from "@/components/dashboard/TokenList";

const historyTokens = [
  {
    tokenId: "0x123...abc",
    name: "Vaccine Certificate",
    type: "Health",
    expiresIn: "3 years",
    actionWalletId: "0xkhushal...512",
    historyAction: "endorsed" as const,
  },
  {
    tokenId: "0x456...def",
    name: "University Degree",
    type: "Education",
    expiresIn: "Never",
    actionWalletId: "0xadmin...001",
    historyAction: "revoked" as const,
  },
  {
    tokenId: "0x789...ghi",
    name: "Employment Record",
    type: "Work",
    expiresIn: "10 years",
    actionWalletId: "0xcompany...789",
    historyAction: "flagged" as const,
  },
];

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-8 bg-app-bg pb-12">
      <DashboardMetrics
        name="Khushal Agarwal"
        age={20}
        nationality="Indian"
        walletAddress="0x9032345320958093280943r82"
        endorsers={128}
        lastUpdated="1 Day Ago"
        trustScore={98}
        trustFlags="None"
        trustDescription="Your On-Chain Reputation is excellent"
        totalEndorsements={70}
        activeTokens={14}
        socials={3}
        badgesEarned="300+ Trust Received"
      />

      <div className="px-4 sm:px-6 md:pr-14 md:pl-10">
        <TokenList variant="history" tokens={historyTokens} />
      </div>
    </div>
  );
};

export default DashboardPage;
