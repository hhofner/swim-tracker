<script setup lang="ts">
import { ref } from "vue"

const items = ref(['Advanced', 'Intermediate', 'Beginner'])
const value = ref([])

</script>

<template>
<div class="flex p-4 px-2 pb-1 gap-3 items-center">
  <UInputMenu v-model="value" multiple delete-icon="i-lucide-trash" :items="items" placeholder="Filter" />
</div>
</template>
