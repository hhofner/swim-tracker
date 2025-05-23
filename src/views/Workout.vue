<script setup lang="ts">
import { useRoute } from 'vue-router';
import { workouts } from "../store/workouts.ts"

const route = useRoute()
const workout = workouts[0]

function handleFavorite() {
  
}

function handleBookmark() {
  
}
</script>

<template>
<div class="p-4">
  <table class="w-full max-w-2xl text-left mb-4">
    <caption class="text-left text-3xl font-semibold mb-2">
      {{ workout.name}}
    </caption>
    <thead class="p-4">
      <tr class="bg-primary p-4">
        <th scope="col" class="p-3 rounded-tl">Exercise</th>
        <th scope="col" class="p-3 rounded-tr">Amount</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="subsection in workout.subSections">
        <tr v-if="subsection.title">
          <td colspan="2" class="p-2 bg-secondary/30">{{subsection.title}}</td>
        </tr>
        <tr v-for="exercise in subsection.workouts">
          <td class="p-1">{{exercise.title}}</td>
          <td class="p-1">{{exercise.total}}</td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr class="bg-primary/30 p-4">
        <th scope="row" class="p-4 rounded-bl">Total</th>
        <td class="p-4 rounded-br">33</td>
      </tr>
    </tfoot>
  </table>
  <div class="space-x-2">
    <UButton size="xs" variant="soft" icon="i-lucide-star" @click.stop="handleFavorite">Favorite</UButton>
    <UButton size="xs" variant="soft" icon="i-lucide-bookmark-check" @click.stop="handleBookmark">To Swim</UButton>
  </div>
</div>

</template>
