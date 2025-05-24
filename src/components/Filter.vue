<script setup lang="ts">
import { ref } from "vue"

const items = ref(['Advanced', 'Intermediate', 'Beginner'])
const value = ref('All')

</script>

<template>
<div class="flex p-4 px-2 pb-1 gap-3 items-center">
  <UInputMenu v-model="value" delete-icon="i-lucide-trash" :items="items" placeholder="Filter" @update:modelValue="$emit('update:modelValue', $event)" />
</div>
</template>
