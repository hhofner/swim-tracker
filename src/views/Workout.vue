<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { workouts } from "../store/workouts.ts"

const route = useRoute()
console.log(route.params.id)
const workout = workouts[route.params.id - 1]
const commentValue = ref('')

function handleFavorite() {
  
}

function handleBookmark() {
  
}
</script>

<template>
<div class="p-4">
  <table class="w-full max-w-2xl text-left mb-4 border border-gray-300">
    <caption class="text-left text-3xl font-semibold mb-2">
      {{ workout.name}}
    </caption>
    <thead>
      <tr class="bg-primary text-white">
        <th scope="col" class="p-3 border-b border-gray-300">Exercise</th>
        <th scope="col" class="p-3 border-b border-gray-300">Amount</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="subsection in workout.subSections">
        <tr v-if="subsection.title" class="bg-secondary/30">
          <td colspan="2" class="p-2 font-semibold border-b border-gray-300">{{subsection.title}}</td>
        </tr>
        <tr v-for="exercise in subsection.workouts" class="odd:bg-white even:bg-gray-100">
          <td class="p-2 border-b border-gray-300">{{exercise.title}}</td>
          <td class="p-2 border-b border-gray-300 text-right">{{exercise.total}}</td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr class="bg-primary/30">
        <th scope="row" class="p-4 border-t border-gray-300">Total</th>
        <td class="p-4 border-t border-gray-300 text-right">{{ workout.total }}</td>
      </tr>
    </tfoot>
  </table>
  <div class="space-x-2">
    <UButton size="xs" variant="soft" icon="i-lucide-star" @click.stop="handleFavorite">Favorite</UButton>
    <UButton size="xs" variant="soft" icon="i-lucide-bookmark-check" @click.stop="handleBookmark">To Swim</UButton>
  </div>
  <USeparator class="my-4"/>
  <section>
    <div class="mb-8">
      <UTextarea v-model="commentValue" placeholder="Workout comments, etc" class="block max-w-xl"/>
      <UButton>Log Workout</UButton>
    </div>
    <h3 class="font-semibold text-xl">Workout Log</h3>
    <div></div>
  </section>
</div>

</template>
