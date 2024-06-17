<script setup lang="ts">
import AccountDrawer from "./account-drawer.vue";
</script>

<template>
  <div class="h-12 px-12 flex items-center justify-between space-x-8 border-b border-b-gray-300">
    <nav class="h-full flex items-center space-x-8">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
      <ul class="h-full flex items-center space-x-8">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">Market</NuxtLink>
        </li>
      </ul>
    </nav>
    <AccountDrawer />
  </div>
</template>
