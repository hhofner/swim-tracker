import "./assets/main.css"

import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import uiPlugin from "@nuxt/ui/vue-plugin"

import App from "./App.vue"

const app = createApp(App)

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/All.vue"),
    },
    {
      path: "/workout/:id",
      name: "workout",
      component: () => import("./views/Workout.vue"),
    }
  ],
  history: createWebHistory(),
})

app.use(uiPlugin)
app.use(router)

app.mount("#app")
