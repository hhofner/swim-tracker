<script setup lang="ts">
import { ref, computed } from "vue"
import { useStorage } from "@vueuse/core"
import PreviewCard from "../components/PreviewCard.vue"
import { workouts } from "../store/workouts.ts"

const favoriteWorkouts = useStorage<number[]>('favorite-workouts', [])

const filteredWorkouts = computed(() => {
  return workouts.filter(workout => favoriteWorkouts.value.includes(workout.id))
})
</script>

<template>
  <div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 py-4">
      <PreviewCard v-for="workout in filteredWorkouts" :key="workout.id" :workout-title="workout.name" :total="workout.total" :level="workout.level"
      :workouts="8" :workout-id="workout.id" />
    </div>
  </div>
</template>
