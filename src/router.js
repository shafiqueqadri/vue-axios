import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/home')
        },
        {
            path: '/posts',
            name: 'posts',
            component: () => import('@/views/posts')
        },
        {
            path: '/posts/:id',
            name: 'post-show',
            component: () => import('@/views/show.post')
        },
    ]
})

export default router;