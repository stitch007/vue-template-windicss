<script lang="ts" setup>
const router = useRouter()
const name = ref<string>()

const go = () => {
  if (name.value) {
    router.push(`/hi/${name.value}`)
  }
}
</script>

<template>
  <div class="text-center text-gray-700 dark:text-gray-200">
    <i-carbon-campsite class="text-4xl" />
    <p>Template</p>
    <p class="text-sm opacity-75">
      Vue TypeScript Vue-Router Pinia WindiCSS ESLint
    </p>
    <div class="py-2" />
    <div class="flex justify-center">
      <input
        id="input"
        v-model="name"
        placeholder="请输入你的名字"
        class="block px-4 py-2 w-250px text-center bg-transparent border rounded-2xl border-gray-200 dark:border-gray-700 outline-none"
        type="text"
        @keydown.enter="go"
      >
    </div>
    <div class="py-2" />
    <div>
      <button
        class="px-4 py-1 text-white text-sm rounded-md bg-teal-600"
        :class="{'bg-gray-400 opacity-70 cursor-default': !name}"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
    <div class="py-2" />
  </div>
</template>
