<script setup lang="ts">
import { useAccount, useBalance, useConnect } from "@wagmi/vue";
import {
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  VisuallyHidden,
} from "radix-vue";
import { shortenAddress } from "~/lib/utils";

const accountQuery = useAccount();
const balanceQuery = useBalance();
const connectQuery = useConnect();

function connectWallet() {
  const coinbaseWalletConnector = connectQuery.connectors.find(
    (connector) => connector.id === "coinbaseWalletSDK",
  );
  connectQuery.connect({
    /* biome-ignore lint/style/noNonNullAssertion: TODO */
    connector: coinbaseWalletConnector!,
  });
}
</script>

<template>
  <DialogRoot v-if="accountQuery.isConnected.value">
    <DialogTrigger class="flex items-center space-x-2">
      <img
        :src="'https://avatar.vercel.sh/' + accountQuery.address.value"
        alt="Account avatar"
        class="w-6 h-6 rounded-full"
      />
      <span class="text-sm">{{ shortenAddress(accountQuery.address.value) }}</span>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 z-40" />
      <DialogContent class="fixed inset-y-0 overflow-hidden bg-white right-0 pt-4 pl-4 w-screen max-w-xs z-50">
        <VisuallyHidden>
          <DialogTitle>
            Account drawer
          </DialogTitle>
        </VisuallyHidden>
        <div class="flex flex-col space-y-4">
          <div class="flex items-center space-x-2">
            <img
              :src="'https://avatar.vercel.sh/' + accountQuery.address.value"
              alt="Account avatar"
              class="w-6 h-6 rounded-full"
            />
            <span class="text-sm">
              {{ shortenAddress(accountQuery.address.value) }}
            </span>
          </div>
          <span class="text-lg">
            {{ balanceQuery.data.value?.value ?? "0.00" }} ETH
          </span>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
  <button
    type="button"
    v-if="!accountQuery.isConnected.value"
    @click="connectWallet"
  >
    Connect
  </button>
</template>
