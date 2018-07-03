import Vue from 'vue'
import Router from 'vue-router'

// 路由配置
import { pathNames } from '@/util'

// 底部栏
import BottomMenu from '@/components/common/BottomMenu'

// 主视图
import MainView from '@/views'

// --------------------------------------------菜单点击后的页面-------------------------------------
// 商城页面
import Shop from '@/views/shop'
// 消息页面
import Chat from '@/views/chat'
// 记录页面
import Records from '@/views/records'
// 我的页面
import Gold from '@/views/gold'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'root',
            redirect: pathNames.index,
            components: {
                default: BottomMenu,
                main: MainView
            },
            children: [
                // 商城首页默认访问界面
                {
                    path: pathNames.index,
                    name: pathNames.index,
                    component: Shop
                },
                // 消息页面
                {
                    path: pathNames.chat,
                    name: pathNames.chat,
                    component: Chat
                },
                // 记录页面
                {
                    path: pathNames.records,
                    name: pathNames.records,
                    component: Records
                },
                // 我的页面
                {
                    path: pathNames.gold,
                    name: pathNames.gold,
                    component: Gold
                },
            ]
        }

    ]
})
