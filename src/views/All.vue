<script setup lang="ts">
import { ref } from "vue"
import { calculateTotal } from "../utils/utils.ts"
import PreviewCard from "../components/PreviewCard.vue"
import FilterOptions from "../components/Filter.vue"
import { workouts } from "../store/workouts.ts"

</script>

<template>
  <div>
    <FilterOptions />
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 py-4">
      <PreviewCard v-for="workout in workouts" :workout-title="workout.name" :total="workout.total" :level="workout.level"
      :workouts="8" :workout-id="workout.id" />
    </div>
  </div>
</template>
