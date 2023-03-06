import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "default" },
      component: () => import("../views/index.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      meta: { layout: "default" },
      component: () => import("../components/Page404/index.vue"),
    },
  ],
});
export default router;
