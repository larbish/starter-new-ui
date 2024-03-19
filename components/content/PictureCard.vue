<template>
    <UCard :class="`bg-gray-${intensity} dark:bg-gray-${intensity}`">
      <template #header>
        <div class="flex justify-center text-2xl font-bold">
          <ContentSlot name="title" unwrap="p" />
        </div>
      </template>
      <slot />
      <template #footer>
        <div class="flex justify-center text-gray-300">
          <ContentSlot name="description" unwrap="p" />
        </div>
      </template>
    </UCard>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    bgIntensity: {
      type: String,
      default: null
    }
  })
  
  // Generate tailwind class for gray colors: bg-gray-100 dark:bg-gray-100 bg-gray-300 dark:bg-gray-300 bg-gray-500 dark:bg-gray-500 bg-gray-700 dark:bg-gray-700 bg-gray-900 dark:bg-gray-900
  const intensity = computed(() => {
    switch (props.bgIntensity) {
      case 'light':
        return 100
      case 'normal':
        return 300
      case 'medium':
        return 500
      case 'intense':
        return 700
      case 'dark':
        return 900
    }
  })
  </script>