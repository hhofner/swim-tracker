<script setup lang="ts">
import { computed, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import type { TabsItem } from "@nuxt/ui"

const route = useRoute()
const router = useRouter()
const items = ref<TabsItem[]>([
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
])

const active = computed({
	get() {
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
      <nav>
        <UTabs v-model="active" size="md" variant="link" :content="false" :items="items" class="w-full" />
      </nav>
    </div>
    <RouterView/>
  </UApp>
</template>
