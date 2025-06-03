<script setup lang="ts">
import { computed } from "vue"
import { useStorage } from "@vueuse/core"
import PreviewCard from "../components/PreviewCard.vue"
import { workouts } from "../store/workouts.ts"

const toSwimWorkouts = useStorage<number[]>('to-swim-workouts', [])

const filteredWorkouts = computed(() => {
  return workouts.filter(workout => toSwimWorkouts.value.includes(workout.id))
})
</script>

<template>
  <div>
    <div v-if="filteredWorkouts.length === 0" class="flex flex-col items-center justify-center min-h-[50vh] text-gray-500">
      <svg class="w-24 h-24 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
      </svg>
      <h3 class="text-xl font-semibold mb-2">No Workouts to Swim</h3>
      <p class="text-center max-w-md">Your swimming queue is empty. Browse workouts and add them to your "To Swim" list to get started with your training.</p>
    </div>

    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 py-4">
      <PreviewCard v-for="workout in filteredWorkouts" :key="workout.id" :workout-title="workout.name" :total="workout.total" :level="workout.level"
      :workouts="8" :workout-id="workout.id" />
    </div>
  </div>
</template>
