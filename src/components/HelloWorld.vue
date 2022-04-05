<script setup lang="ts">
const route = useRoute()

const name = route.params.name

const count = ref(0)
</script>

<template>
  <div class="flex flex-col items-center text-gray-700 dark:text-gray-200">
    <div class="mb-2">
      Hi {{ name }}!
    </div>
    <div class="mb-2">
      {{ count }}
    </div>
    <div class="mb-4">
      <button
        class="px-4 py-1 text-white text-sm rounded-md bg-teal-600"
        @click="count += 1"
      >
        +1
      </button>
    </div>
  </div>
</template>
