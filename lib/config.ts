import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  mainnet,
  sepolia,
  polygon,
  optimism,
  arbitrum,
  base,
} from "wagmi/chains";

if (!process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID) {
  console.warn(
    "NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is not set. " +
      "WalletConnect will not work. " +
      "Get a free project ID at https://cloud.reown.com/"
  );
}

export const config = getDefaultConfig({
  appName: "Decentralized Identity Token",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
  chains: [mainnet, sepolia, polygon, optimism, arbitrum, base],
  ssr: true,
});
