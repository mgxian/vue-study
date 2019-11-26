import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterDemoA from './components/RouterDemoA.vue'
import RouterDemoB from './components/RouterDemoB.vue'
import RouterDemoC from './components/RouterDemoC.vue'

const NotFound = () => import('./components/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/a',
            component: RouterDemoA,
            alias: '/f',
            beforeEnter: (to, from, next) => {
                to.path
                from.path
                next()
            },
            meta: { requiresAuth: true }
        },
        {
            path: '/b/:id',
            name: 'b',
            component: RouterDemoB,
            props: true
        },
        {
            path: '/c',
            component: RouterDemoC,
            children: [
                { path: 'a', component: RouterDemoA },
                { path: 'b', component: RouterDemoB }
            ]
        },
        {
            path: '/d',
            name: 'd',
            components: {
                default: RouterDemoA,
                namedView: RouterDemoC
            }
        },
        {
            path: '/e', redirect: '/d'
        },
        {
            path: '*',
            component: NotFound
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        to.name
        from.name
        savedPosition
        return { x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
    to.path
    from.name
    next()
})

router.afterEach()

export default router