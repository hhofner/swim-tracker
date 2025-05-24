<script setup lang="ts">
import { ref } from "vue"

const levelItems = ref(['Advanced', 'Intermediate', 'Beginner'])
const lengthItems = ref(['500', '1000', '1500', '2000', '2500', '3000'])
const levelValue = ref('All')
const lengthValue = ref('All')

</script>

<template>
<div class="flex p-4 px-2 pb-1 gap-3 items-center">
  <UInputMenu v-model="levelValue" delete-icon="i-lucide-trash" icon="i-lucide-filter" :items="levelItems" placeholder="Filter by Level" @update:modelValue="$emit('update:level', $event)" />
  <UInputMenu v-model="lengthValue" delete-icon="i-lucide-trash" icon="i-lucide-ruler" :items="lengthItems" placeholder="Filter by Length" @update:modelValue="$emit('update:length', $event)" />
</div>
</template>
