<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import type { TabsItem } from "@nuxt/ui"
import { workouts } from "./store/workouts"
import PwaInstallBanner from "./components/PwaInstallBanner.vue"

const tabsRef = ref()

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
    {
      label: "About",
      icon: "i-lucide-info",
      value: "about"
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

// Watch for route changes and scroll active tab into view
// TODO: Look for nicer ref implementation
watch(() => route.params.id, async (newId) => {
  if (newId && route.name === 'workout') {
    await nextTick()
    const tabsContainer = tabsRef.value?.$el?.querySelector('[role="tablist"]')
    const activeTab = tabsContainer?.querySelector('[aria-selected="true"]')
    if (activeTab && tabsContainer) {
      activeTab.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      })
    }
  }
}, { immediate: true })

</script>

<template>
  <UApp>
    <div class="sticky top-0 z-[9999]">
      <header class="sticky top-0 w-full z-80 p-2 flex justify-between items-center bg-curious-blue-200 dark:bg-curious-blue-800">
        <h1 class="text-3xl">Swim Tracker 🏊</h1>
        <UButton variant="ghost" color="info" @click="router.push('/about')">
          <UIcon name="i-lucide-info" class="mr-1 w-4 h-4" />
          About
        </UButton>
      </header>
      <nav class="w-full bg-white dark:bg-default py-1 overflow-x-scroll">
        <UTabs ref="tabsRef" v-model="active" size="md" variant="link" :content="false" :items="items" class="" />
      </nav>
    </div>
    <RouterView/>
    <PwaInstallBanner />
  </UApp>
</template>
