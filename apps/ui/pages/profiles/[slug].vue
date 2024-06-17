<script setup lang="ts">
import type { User } from "@kast/api";

useSeoMeta({
  title: "Kast | Profile",
  ogTitle: "Kast | Profile",
  twitterCard: "summary_large_image",
});

const route = useRoute();
const config = useRuntimeConfig();

const profileQuery = await useFetch<User>(
  `${config.public.apiBaseUrl}/users/${route.params.slug}`,
);
</script>

<template>
  <header class="h-64 flex items-end justify-between px-12 py-8 bg-gray-300">
    <div>
      <h2 class="text-lg">{{ profileQuery.data.value?.username }}</h2>
    </div>
    <div class="space-x-4">
      <button
        type="button"
        class="px-4 py-1.5 rounded-md bg-white"
      >
        Follow
      </button>
      <button
        type="button"
        class="px-4 py-1.5 rounded-md bg-white"
      >
        Subscribe
      </button>
    </div>
  </header>
  <main class="px-12 pt-12">
    <div class="flex items-start">
      <p class="grow">{{ profileQuery.data.value?.description }}</p>
      <ul class="w-1/6 flex items-center justify-center space-x-4">
        <li>
          <NuxtLink external>
            <LogosYoutube class="w-6 h-6 fill-red-600" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink>
            <LogosTelegram class="w-6 h-6 rounded-full fill-blue-600" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>
