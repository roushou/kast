<script setup lang="ts">
import type { Video } from "@kast/api";

useSeoMeta({
  title: "Kast | Brands at your fingertips",
  ogTitle: "Kast | Brands at your fingertips",
  description:
    "Create your brand online in a few clicks and sell your products live.",
  ogDescription:
    "Create your brand online in a few clicks and sell your products live.",
  twitterCard: "summary_large_image",
});

const config = useRuntimeConfig();

const videosQuery = await useFetch<Video[]>(
  `${config.public.apiBaseUrl}/videos`,
);

function getRelativeTime(date: string) {
  const formatter = new Intl.RelativeTimeFormat("en", { style: "narrow" });
  const since = new Date().getTime() - new Date(date).getTime();
  const hours = new Date(since).getHours();
  return formatter.format(-hours, "hour");
}
</script>

<template>
  <main class="mt-12 px-12">
    <ul class="grid grid-cols-4 gap-6">
      <li v-for="video in videosQuery.data.value">
        <div class="w-full h-64 bg-gray-200"></div>
        <div>
          <p>{{ video.title }}</p>
          <div class="flex justify-between">
            <span class="text-sm">{{ video.views }} views</span>
            <span class="text-sm">
              {{ getRelativeTime(video.createdAt) }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>
