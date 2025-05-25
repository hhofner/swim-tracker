<script setup lang="ts">
import { ref, computed } from "vue"
import { calculateTotal } from "../utils/utils.ts"
import PreviewCard from "../components/PreviewCard.vue"
import FilterOptions from "../components/Filter.vue"
import { workouts } from "../store/workouts.ts"

const selectedLevel = ref()

const selectedLength = ref()

const filteredWorkouts = computed(() => {
  let filtered = workouts

  if (selectedLevel.value === "All") {
    return workouts
  }

  if (selectedLevel.value) {
    filtered = filtered.filter(workout => workout.level === selectedLevel.value)
  }

  if (selectedLength.value) {
    const length = parseInt(selectedLength.value, 10)
    filtered = filtered.filter(workout => workout.total <= length)
  }

  return filtered
})
</script>

<template>
  <div>
    <FilterOptions v-model:level="selectedLevel" v-model:length="selectedLength" />
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 py-4">
      <PreviewCard v-for="workout in filteredWorkouts" :key="workout.id" :workout-title="workout.name" :total="workout.total" :level="workout.level"
      :workouts="8" :workout-id="workout.id" />
    </div>
  </div>
</template>
