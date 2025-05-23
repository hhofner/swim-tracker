<script setup lang="ts">
import { ref } from "vue"
import { calculateTotal } from "../utils/utils.ts"
import PreviewCard from "../components/PreviewCard.vue"
import { workouts } from "../store/workouts.ts"

</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 py-4">
    <PreviewCard v-for="workout in workouts" :workout-title="workout.name" :total="calculateTotal(workout)" level="Beginner"
      :workouts="8" :workout-id="1" />
    <PreviewCard v-for="workout in workouts" :workout-title="workout.name" :total="calculateTotal(workout)" level="Intermediate"
      :workouts="8" :workout-id="2" />
    <PreviewCard v-for="workout in workouts" :workout-title="workout.name" :total="calculateTotal(workout)" level="Advanced"
      :workouts="8" :workout-id="3" />
  </div>

</template>
