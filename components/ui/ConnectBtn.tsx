import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";

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
            {/* Chain Button */}
            <motion.button
              onClick={openChainModal}
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.98 }}
              className="hidden items-center gap-1.5 rounded-xl bg-zinc-200 px-3 py-2 text-zinc-800 transition-colors duration-150 hover:bg-zinc-200 sm:flex dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
            >
              {chain.hasIcon && chain.iconUrl && (
                <img
                  src={chain.iconUrl}
                  alt={chain.name}
                  className="h-6 w-6 shrink-0 rounded-full"
                />
              )}
              {/* Hidden below md, visible md+ */}
              <span className="hidden md:inline">{chain.name}</span>
              <span className="opacity-70">▾</span>
            </motion.button>

            {/* Account Button */}
            <motion.button
              onClick={openAccountModal}
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-0 overflow-hidden rounded-xl bg-zinc-300 transition-colors duration-150 dark:border-zinc-700 dark:bg-zinc-800"
            >
              {/* Balance pill */}
              {account.displayBalance && (
                <span className="hidden bg-zinc-200 px-3 py-2 text-zinc-800 sm:inline dark:bg-zinc-900 dark:text-zinc-400">
                  {account.displayBalance}
                </span>
              )}

              {/* Address */}
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
