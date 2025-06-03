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
    <div v-if="filteredWorkouts.length === 0" class="flex flex-col items-center justify-center min-h-[50vh] text-gray-500">
      <svg class="w-24 h-24 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
      <h3 class="text-xl font-semibold mb-2">No Favorite Workouts</h3>
      <p class="text-center max-w-md">You haven't added any workouts to your favorites yet. Browse workouts and click the heart icon to add them here.</p>
    </div>

    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 py-4">
      <PreviewCard v-for="workout in filteredWorkouts" :key="workout.id" :workout-title="workout.name" :total="workout.total" :level="workout.level"
      :workouts="8" :workout-id="workout.id" />
    </div>
  </div>
</template>
