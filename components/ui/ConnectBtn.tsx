import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";
import Image from "next/image";

function ConnectBtn() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        if (!mounted) return null;

        const connected = mounted && account && chain;

        if (!connected) {
          return (
            <motion.button
              onClick={openConnectModal}
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-emerald-500 px-4 py-2 font-bold text-white shadow-md transition-shadow duration-200 hover:shadow-emerald-300/40 dark:bg-emerald-400 dark:text-black dark:hover:shadow-emerald-400/30"
            >
              Connect Wallet
            </motion.button>
          );
        }

        if (chain.unsupported) {
          return (
            <motion.button
              onClick={openChainModal}
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-shadow duration-200 hover:shadow-red-300/40 dark:bg-red-500 dark:text-white"
            >
              Wrong Network
            </motion.button>
          );
        }

        return (
          <div className="flex items-center gap-2 font-bold">
            <motion.button
              onClick={openChainModal}
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.98 }}
              className="hidden items-center gap-1.5 rounded-xl bg-zinc-200 px-3 py-2 text-zinc-800 transition-colors duration-150 hover:bg-zinc-200 sm:flex dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
            >
              {chain.hasIcon && chain.iconUrl && (
                <Image
                  src={chain.iconUrl}
                  alt={chain.name!}
                  width={24}
                  height={24}
                  unoptimized
                  className="shrink-0 rounded-full"
                />
              )}
              <span className="hidden md:inline">{chain.name}</span>
              <span className="opacity-70">▾</span>
            </motion.button>
            <motion.button
              onClick={openChainModal}
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center rounded-xl bg-zinc-200 p-2 text-zinc-800 transition-colors duration-150 hover:bg-zinc-300 sm:hidden dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              aria-label={`Switch network, current: ${chain.name}`}
            >
              {chain.hasIcon && chain.iconUrl ? (
                <Image
                  src={chain.iconUrl}
                  alt={chain.name!}
                  width={20}
                  height={20}
                  unoptimized
                  className="shrink-0 rounded-full"
                />
              ) : (
                <span className="text-xs">⛓</span>
              )}
            </motion.button>

            {/* Account Button */}
            <motion.button
              onClick={openAccountModal}
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-0 overflow-hidden rounded-xl bg-zinc-300 transition-colors duration-150 dark:border-zinc-700 dark:bg-zinc-800"
            >
              {account.displayBalance && (
                <span className="hidden bg-zinc-200 px-3 py-2 text-zinc-800 sm:inline dark:bg-zinc-900 dark:text-zinc-400">
                  {account.displayBalance}
                </span>
              )}
              <span className="px-3 py-2 text-zinc-800 dark:text-white">
                {account.displayName}
              </span>
              <span className="pr-2 text-black opacity-70 dark:text-white">
                ▾
              </span>
            </motion.button>
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

export default ConnectBtn;
