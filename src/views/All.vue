<script setup lang="ts">
import { ref, computed } from "vue"
import PreviewCard from "../components/PreviewCard.vue"
import FilterOptions from "../components/Filter.vue"
import { workouts } from "../store/workouts.ts"

const selectedLevel = ref([])

const selectedLength = ref(5000)

const filteredWorkouts = computed(() => {
  let filtered = workouts

  if (selectedLevel.value && selectedLevel.value.length > 0) {
    filtered = filtered.filter(workout => selectedLevel.value.includes(workout.level))
  }

  if (selectedLength.value) {
    filtered = filtered.filter(workout => workout.total <= selectedLength.value)
  }

  return filtered
})

function getWorkoutCount(workout: any) {
  return workout.subSections.reduce((total: number, section: any) => {
    return total + section.workouts.length
  }, 0)
}
</script>

<template>
  <div>
    <FilterOptions v-model:level="selectedLevel" v-model:length="selectedLength" />
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 py-4">
      <PreviewCard v-for="workout in filteredWorkouts" :key="workout.id" :workout-title="workout.name" :total="workout.total" :level="workout.level"
      :workouts="getWorkoutCount(workout)" :workout-id="workout.id" />
    </div>
  </div>
</template>
