import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import { Main } from "@/pages";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main-page',
        components: {
            default: Main,
        },
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
