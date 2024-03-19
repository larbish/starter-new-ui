<template>
    <UCard :class="cardClass" class="divide-none">
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
    intensity: {
      type: String,
      default: null
    }
  })
  
  const cardClass = computed(() => {
    switch (props.intensity) {
      case 'light':
        return 'bg-gray-400 dark:bg-gray-500 ring-gray-500 dark:ring-gray-400'
      case 'normal':
        return 'bg-gray-300 dark:bg-gray-600 ring-gray-600 dark:ring-gray-300'
      case 'medium':
        return 'bg-gray-200 dark:bg-gray-700 ring-gray-700 dark:ring-gray-200'
      case 'intense':
        return 'bg-gray-100 dark:bg-gray-800 ring-gray-800 dark:ring-gray-100'
      case 'dark':
        return 'bg-gray-50 dark:bg-gray-900 ring-gray-900 dark:ring-gray-50'
    }
  })
  </script>