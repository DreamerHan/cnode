import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import menu from './menu'

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: () =>
            import ('@/views/layout/index'),
        children: [
            ...menu
        ]
    }]
})