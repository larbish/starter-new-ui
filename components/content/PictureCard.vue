<template>
    <UCard :class="`ring-${color}-200 dark:ring-${color}-800`">
      <template #header>
        <div class="flex justify-center text-2xl font-bold">
          <ContentSlot name="title" unwrap="p" />
        </div>
      </template>
      <slot />
      <template #footer>
        <div class="flex justify-center text-gray-500">
          <ContentSlot name="description" unwrap="p" />
        </div>
      </template>
    </UCard>
  </template>
  
  <script setup lang="ts">
  // Generate tailwind class for main colors: bg-blue-200, dark:bg-blue-800 bg-red-200, dark:bg-red-800 bg-green-200, dark:bg-green-800 bg-yellow-200, dark:bg-yellow-800
  defineProps({
    color: {
      type: String,
      default: null
    }
  })
  </script>