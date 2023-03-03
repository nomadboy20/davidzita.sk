<template>
  <div class="flex mt-4">

    <div class="w-[300px] ">

      <div class="capitalize font-lg font-semibold">
        {{ props.title }}
      </div>

      <div v-if="props.year" class="font-lg text-gold font-semibold">
        {{ props.year }}
      </div>

    </div>

    <div>

      <div class="capitalize font-lg font-semibold">
        {{ props.fullTitle }}
      </div>

      <div>
        <slot></slot>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  year?: string,
  title: string
  fullTitle: string
}>()

</script>
