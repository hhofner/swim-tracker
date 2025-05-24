<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStorage } from '@vueuse/core';

const props = defineProps<{
  workoutId: number;
  workoutTitle: string;
  workouts: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  total: number;
}>()

const favoriteWorkouts = useStorage<number[]>('favorite-workouts', [])
const toSwimWorkouts = useStorage<number[]>('to-swim-workouts', [])

function getLevelColor(level: string) {
  switch (level) {
    case "Beginner":
      return "success";
    case "Intermediate":
      return "secondary";
    case "Advanced":
      return "error";
    default:
      return "neutral";
  }
}

const router = useRouter()

function handleClick() {
  router.push(`/workout/${props.workoutId}`)
}

function toggleFavorite() {
  if (favoriteWorkouts.value.includes(props.workoutId)) {
    favoriteWorkouts.value = favoriteWorkouts.value.filter(id => id !== props.workoutId)
  } else {
    favoriteWorkouts.value.push(props.workoutId)
  }
}

function toggleToSwim() {
  if (toSwimWorkouts.value.includes(props.workoutId)) {
    toSwimWorkouts.value = toSwimWorkouts.value.filter(id => id !== props.workoutId)
  } else {
    toSwimWorkouts.value.push(props.workoutId)
  }
}
</script>

<template>
  <UCard variant="subtle" @click="handleClick">
    <template #header>
      <div class="flex justify-between flex-wrap gap-2">
        <h2 class="font-semibold">{{ props.workoutTitle }}</h2>
        <div class="flex gap-2">
          <UBadge color="neutral" variant="outline">{{props.workouts}} exercises</UBadge>
          <UBadge :color="getLevelColor(props.level)">{{props.level}}</UBadge>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <div>Length: <span class="font-bold">{{ props.total }}</span>m</div>
        <div class="flex gap-2 flex-wrap justify-end">
          <UButton
            size="xs"
            :variant="favoriteWorkouts.includes(props.workoutId) ? 'solid' : 'soft'"
            icon="i-lucide-star"
            @click.stop="toggleFavorite"
          />
          <UButton
            size="xs"
            :variant="toSwimWorkouts.includes(props.workoutId) ? 'solid' : 'soft'"
            icon="i-lucide-bookmark-check"
            @click.stop="toggleToSwim"
          />
        </div>
      </div>
    </template>
  </UCard>
</template>
