import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  mainnet,
  sepolia,
  polygon,
  optimism,
  arbitrum,
  base,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Decentralized Identity Token",
  projectId: "YOUR_PROJECT_ID", // Get one at https://cloud.reown.com/ (formerly WalletConnect)
  chains: [mainnet, sepolia, polygon, optimism, arbitrum, base],
  ssr: true,
});
