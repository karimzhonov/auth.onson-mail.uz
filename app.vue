<template>
  <Toaster />
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'
useHead({
  title: 'Onson Mail',
  meta: [
    { name: 'description', content: 'Onson mail group, cargo, tour' },
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' }
  ]
})
</script>