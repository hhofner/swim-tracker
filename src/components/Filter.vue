<script setup lang="ts">
import { ref } from "vue"

const levelItems = ref(['Beginner', 'Intermediate', 'Advanced'])

const levelValue = defineModel('level', { default: [] })
const lengthValue = defineModel('length', { default: 5000 })

</script>

<template>
<div class="flex flex-col p-4 px-2 pb-1 gap-4">
  <div class="flex flex-col gap-2">
    <label class="text-sm font-medium text-gray-700 dark:text-gray-200">
      <UIcon name="i-lucide-filter" class="w-4 h-4 inline mr-1" />
      Filter by Level
    </label>
    <UCheckboxGroup 
      v-model="levelValue"
      :items="levelItems"
      orientation="horizontal"
      color="primary"
    />
  </div>
  
  <div class="flex flex-col gap-2">
    <label class="text-sm font-medium text-gray-700 dark:text-gray-200">
      <UIcon name="i-lucide-ruler" class="w-4 h-4 inline mr-1" />
      Max Length: {{ lengthValue }} yards
    </label>
    <USlider 
      v-model="lengthValue"
      :min="1000"
      :max="5000"
      :step="1000"
      color="primary"
      size="md"
      class="w-full max-w-xs"
    />
    <div class="flex justify-between text-xs text-gray-500 max-w-xs">
      <span>1000</span>
      <span>2000</span>
      <span>3000</span>
      <span>4000</span>
      <span>5000</span>
    </div>
  </div>
</div>
</template>
