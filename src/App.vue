<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
import { ref } from "vue";

const items = ref<TabsItem[]>([
	{
		label: "All",
		icon: "i-lucide-home",
	},
	{
		label: "Favorites",
		icon: "i-lucide-star",
	},
	{
		label: "To Swim",
		icon: "i-lucide-bookmark-check",
	},
]);

</script>

<template>
  <UApp>
    <div class="sticky top-0">
      <header class="sticky top-0 w-full p-2 flex justify-between items-center bg-curious-blue-200 dark:bg-curious-blue-800">
        <h1 class="text-3xl">Swim Tracker 🏊</h1>
      </header>
      <nav>
        <UTabs size="md" variant="link" :content="false" :items="items" class="w-full" />
      </nav>
    </div>
    <RouterView/>
  </UApp>
</template>
