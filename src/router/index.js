import {createRouter , createWebHistory} from 'vue-router'
import OilHome from '@/views/OilHome.vue'
import BoardList from '@/views/BoardList.vue'
import BoardDetail from '@/views/BoardDetail'
import BoardWrite from '@/views/BoardWrite.vue'

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
    },
    {
        path:'/board/detail',
        name:'BoardDetail',
        component:BoardDetail
    },
    {
        path:'/board/write',
        name:'BoardWrite',
        component:BoardWrite
    }
]

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router