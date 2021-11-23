import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
{
    path: "/",
    name: "home",
    component: () => import('@/components/HelloWorld.vue')
},
{
    path: "/login",
    name: "login",
    component: () => import('@/views/login/main.vue')
},
{
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/main.vue')
}];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;