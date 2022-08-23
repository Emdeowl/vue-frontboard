import {createRouter , createWebHistory} from 'vue-router'
import OilHome from '@/views/OilHome.vue'
import BoardList from '@/views/BoardList.vue'
const routes=[
    {
        path:'/',
        name:'OilHome',
        component:OilHome
    },
    {
        path:'/about',
        name:'About',
        component:()=>import('@/views/OilAbout.vue')
    },
    {
        path:'/board/list',
        name:'Boardlist',
        component:BoardList
    }
]

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router