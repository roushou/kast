import { http, createConfig } from "@wagmi/vue";
import { baseSepolia } from "@wagmi/vue/chains";
import { coinbaseWallet } from "@wagmi/vue/connectors";

declare module "@wagmi/vue" {
  interface Register {
    config: typeof config;
  }
}

export const config = createConfig({
  chains: [baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: "kast",
      chainId: baseSepolia.id,
    }),
  ],
  transports: {
    [baseSepolia.id]: http(),
  },
});
