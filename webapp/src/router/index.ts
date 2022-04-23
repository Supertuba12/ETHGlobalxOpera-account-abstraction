import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { store } from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/onboarding",
      name: "onboarding",
      component: () => import("../views/OnboardingView.vue"),
    },
  ],
});

// Guard routes, such that new users land on onboarding
router.beforeEach(async (to, from, next) => {
  if (store.state.isNewUser && to.path !== "/onboarding") {
    next("/onboarding");
  } else {
    next();
  }
});

export default router;
