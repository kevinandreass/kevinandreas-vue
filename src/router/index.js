import { createRouter, createWebHistory } from "vue-router";

const routes = [
{
    path: "/",
    nama: "home",
    component: () => import('@/components/HelloWorld.vue')
},
{
    path: "/login",
    nama: "login",
    component: () => import('@/views/login/main.vue')
},
{
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/main.vue')
}];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;