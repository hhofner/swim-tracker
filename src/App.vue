<script setup lang="ts">
import { computed, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import type { TabsItem } from "@nuxt/ui"
import { workouts } from "./store/workouts"

const route = useRoute()
const router = useRouter()
const items = computed<TabsItem[]>(() => {
  const baseItems: TabsItem[] = [
    {
      label: "All",
      icon: "i-lucide-home",
      value: "all"
    },
    {
      label: "Favorites",
      icon: "i-lucide-star",
      value: "favorites"
    },
    {
      label: "To Swim",
      icon: "i-lucide-bookmark-check",
      value: "to-swim"
    },
  ]

  const workoutId = route.params.id
  if (workoutId) {
    const workout = workouts.find(w => w.id === Number(workoutId))
    if (workout) {
      baseItems.push({
        label: workout.name,
        icon: "i-lucide-dumbbell",
        value: `workout/${workout.id}`
      })
    }
  }

  return baseItems
})

const active = computed({
	get() {
    if (route.name === 'workout') {
      return `workout/${route.params.id}`
    }
    return (route.name as string)
	},
	set(tab) {
		if (tab === 'all') {
			router.push({
				path: "/"
			})
		} else {
			router.push({
				path: `/${tab}`
			})
		}
	}
})

</script>

<template>
  <UApp>
    <div class="sticky top-0">
      <header class="sticky top-0 w-full p-2 flex justify-between items-center bg-curious-blue-200 dark:bg-curious-blue-800">
        <h1 class="text-3xl">Swim Tracker 🏊</h1>
      </header>
      <nav class="w-full overflow-scroll bg-white dark:bg-dark">
        <UTabs v-model="active" size="md" variant="link" :content="false" :items="items" class="" />
      </nav>
    </div>
    <RouterView/>
  </UApp>
</template>
