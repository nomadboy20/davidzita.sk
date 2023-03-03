<template>
  <div class="flex mt-4">

    <div class="w-[300px] shrink-0">

      <a :href="props.url" target="_blank" class=" hover:underline hover:opacity-75 text-primary hover:cursor-pointer font-lg font-semibold">
        {{ props.title }}
      </a>

    </div>

    <div class="w-full text-left">
      <slot></slot>
    </div>

  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  title: string,
  url: string
}>()

</script>
