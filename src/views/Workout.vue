<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { workouts } from "../store/workouts.ts"

const route = useRoute()
const workout = workouts[route.params.id - 1]
const commentValue = ref('')
const workoutLogs = useStorage('workout-logs', [])
const favoriteWorkouts = useStorage<number[]>('favorite-workouts', [])
const toSwimWorkouts = useStorage<number[]>('to-swim-workouts', [])
const swamAllValue = ref(true)
const swamValue = ref(workout.total)

function logWorkout() {
  const logEntry = {
    date: new Date().toISOString(),
    workoutId: workout.id,
    swam: swamAllValue.value ? workout.total : swamValue.value,
    notes: commentValue.value,
  }
  workoutLogs.value.push(logEntry)
  commentValue.value = ''
  swamValue.value = workout.total
  swamAllValue.value = true
}

function handleFavorite() {
  if (favoriteWorkouts.value.includes(workout.id)) {
    favoriteWorkouts.value = favoriteWorkouts.value.filter(id => id !== workout.id)
  } else {
    favoriteWorkouts.value.push(workout.id)
  }
}

function handleBookmark() {
  if (toSwimWorkouts.value.includes(workout.id)) {
    toSwimWorkouts.value = toSwimWorkouts.value.filter(id => id !== workout.id)
  } else {
    toSwimWorkouts.value.push(workout.id)
  }
}
</script>

<template>
<div class="p-4">
  <table class="w-full max-w-2xl text-left mb-4 border border-gray-300 rounded-sm">
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
          <td colspan="2" class="p-2 font-semibold border-b border-gray-300">
            <span>{{subsection.title}}</span>
            <span v-if="subsection.multiplier" class="ml-4 text-sm text-stone-500">{{subsection.multiplier}} times through</span>
          </td>
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
    <UButton
      size="xs"
      :variant="favoriteWorkouts.includes(workout.id) ? 'solid' : 'soft'"
      icon="i-lucide-star"
      @click.stop="handleFavorite"
    >
      Favorite
    </UButton>
    <UButton
      size="xs"
      :variant="toSwimWorkouts.includes(workout.id) ? 'solid' : 'soft'"
      icon="i-lucide-bookmark-check"
      @click.stop="handleBookmark"
    >
      To Swim
    </UButton>
  </div>
  <USeparator class="my-4"/>
  <section>
    <div class="mb-8 space-y-4">
      <UTextarea v-model="commentValue" placeholder="Workout comments, etc" class="block max-w-xl"/>
      <div class="flex gap-4 items-center">
        <UInputNumber placeholder="Amount swam" v-model="swamValue" :disabled="swamAllValue" />
        <UCheckbox v-model="swamAllValue" label="Swam it all" />
      </div>
      <UButton @click="logWorkout">Log Workout</UButton>
    </div>
    <h3 class="font-semibold text-xl mb-4">Workout Log</h3>
    <div class="space-y-4">
      <ul class="space-y-4">
        <template v-for="log in workoutLogs">
          <li :key="log.date" v-if="log.workoutId === workout.id" class="flex gap-8">
            <div class="flex flex-col gap-2">
              <span>{{ new Date(log.date).toLocaleDateString() }}</span>
              <UBadge class="font-bold rounded-full" color="neutral" variant="outline">{{ log.swam }} meters</UBadge>
            </div>
            <div v-if="log.notes" class="italic">
              {{ log.notes }}
            </div>
          </li>
        </template>
      </ul>
    </div>
  </section>
</div>

</template>
