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
      name: "all",
      component: () => import("./views/All.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("./views/Favorites.vue"),
    },
    {
      path: "/to-swim",
      name: "to-swim",
      component: () => import("./views/ToSwim.vue"),
    },
    {
      path: "/workout/:id",
      name: "workout",
      component: () => import("./views/Workout.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
    },
    
  ],
  history: createWebHistory(),
})

app.use(uiPlugin)
app.use(router)

app.mount("#app")
