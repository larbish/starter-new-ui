<template>
  <UMain>
    <UContainer>
      <UPage>
        <template #left>
          <UAside>
            <UNavigationTree :links="mapContentNavigation(navigation)" />
          </UAside>
        </template>
        <UPageBody prose>
          <ContentRenderer v-if="page.body" :value="page" />
        </UPageBody>
      </UPage>
    </UContainer>
  </UMain>
</template>

<script setup lang="ts">
const route = useRoute()

// Fetch the markdown page located at `route.path` in the content folder
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

// Generate navigation based on the content folder structure
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>
