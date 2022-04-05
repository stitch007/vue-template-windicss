<script setup lang="ts">
import { isDark, toggleDark } from './composables'

const router = useRouter()
const back = () => {
  router.push('/')
}
</script>

<template>
  <div class="flex flex-col items-center w-full h-full mt-16">
    <RouterView />
    <footer class="text-gray-700">
      <i-carbon-campsite
        class="dark:text-gray-200"
        @click="back"
      />
      <span class="px-1" />
      <i-carbon-asleep-filled
        class="dark:text-yellow-300"
        @click="toggleDark()"
      />
    </footer>
  </div>
</template>
