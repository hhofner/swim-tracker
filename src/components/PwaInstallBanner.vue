<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const showBanner = () => {
  // Don't show if already dismissed in this session
  if (localStorage.getItem('pwa-install-dismissed')) {
    return
  }

  // Don't show if already installed
  if (window.matchMedia('(display-mode: standalone)').matches) {
    return
  }

  isOpen.value = true
}

// Show banner after page loads
setTimeout(showBanner, 3000)

const openIosInstructions = () => {
  window.open('https://support.apple.com/guide/iphone/bookmark-favorite-webpages-iph42ab2f3a7/ios', '_blank')
}

const openAndroidInstructions = () => {
  window.open('https://support.google.com/chrome/answer/9658361', '_blank')
}

const dismissBanner = () => {
  localStorage.setItem('pwa-install-dismissed', 'true')
  isOpen.value = false
}
</script>

<template>
  <UDrawer v-model:open="isOpen" :ui="{ width: 'w-full sm:max-w-md' }">

    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          Install Swim Tracker
        </h3>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          class="-my-1"
          @click="isOpen = false"
        />
      </div>
    </template>
    <template #content>

      <div class="p-4">
        <div class="flex items-center space-x-4 mb-4">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <UIcon name="i-heroicons-document-arrow-down" class="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <h4 class="text-lg font-medium text-gray-900 dark:text-white">
              Get the app
            </h4>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Install Swim Tracker for a better experience
            </p>
          </div>
        </div>

        <div class="space-y-3 mb-6">
          <div class="flex items-center space-x-3">
            <UIcon name="i-heroicons-bolt" class="w-5 h-5 text-blue-500" />
            <span class="text-sm text-gray-700 dark:text-gray-300">Faster loading</span>
          </div>
          <div class="flex items-center space-x-3">
            <UIcon name="i-heroicons-wifi" class="w-5 h-5 text-blue-500" />
            <span class="text-sm text-gray-700 dark:text-gray-300">Works offline</span>
          </div>
          <div class="flex items-center space-x-3">
            <UIcon name="i-heroicons-device-phone-mobile" class="w-5 h-5 text-blue-500" />
            <span class="text-sm text-gray-700 dark:text-gray-300">Native app experience</span>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex space-x-3">
            <UButton
              @click="openIosInstructions"
              class="flex-1"
              color="primary"
            >
              📱 iPhone Instructions
            </UButton>
            <UButton
              @click="openAndroidInstructions"
              class="flex-1"
              color="primary"
            >
              🤖 Android Instructions
            </UButton>
          </div>
          <UButton
            @click="dismissBanner"
            variant="ghost"
            color="info"
            class="w-full"
          >
            Not now
          </UButton>
        </div>
      </div>
    </template>
  </UDrawer>

</template>
