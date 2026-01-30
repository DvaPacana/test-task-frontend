import { createWebHistory, createRouter } from "vue-router";
import { RouteName, RouteTitle } from "@/consts/router.const";

const MainPage = () => import("@/pages/MainPage.vue");

const routes = [
  {
    path: "/",
    name: RouteName.MAIN_PAGE,
    component: MainPage,
    meta: {
      title: RouteTitle.MAIN_PAGE,
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string;
  next();
});