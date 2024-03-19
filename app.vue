<template>
  <div>
    <UHeader>
      <template #logo>
        <span>
          Demo Studio
        </span>
      </template>
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
    <UMain class="min-h-[calc(100vh-var(--header-height)-64px)]">
      <NuxtPage />
    </UMain>
    <UFooter>
      <template #left>
        <UButton
          label="Build with Nuxt UI"
          to="https://ui.nuxt.com"
          color="gray"
          variant="ghost"
          target="_blank"
        />
      </template>
    </UFooter>
  </div>
</template>
