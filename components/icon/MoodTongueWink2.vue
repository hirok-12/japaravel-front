<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-mood-tongue-wink-2"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="9" />
    <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
    <path d="M15 10h-.01" />
    <path d="M10 14v2a2 2 0 1 0 4 0v-2m1.5 0h-7" />
    <path d="M7 10c.5 -1 2.5 -1 3 0" />
  </svg>
</template>

<script lang="ts" setup>
  // defineProps<{ size: string }>()

  withDefaults(
    defineProps<{
      size?: string
    }>(),
    { size: '24px' }
  )
</script>
/
