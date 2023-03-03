<template>
  <div class="w-full">

    <a :href="props.link" target="_blank" class="text-primary hover:cursor-pointer hover:underline hover:opacity-75 mt-2 font-semibold">
      {{ props.link }}
    </a>

    <div class="text-base mt-1">
      <slot/>
    </div>

  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  link: string
}>()

</script>