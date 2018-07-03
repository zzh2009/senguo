<template>
    <div>
        <van-tabbar v-model="active">
                <van-tabbar-item v-for="(item,index) in bottomMenus" :key="index" :icon="item.icon">
                    <router-link :to="item.path">
                            {{item.value}}
                    </router-link>
                </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vant';

export default{
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },
    data() {
        return {
            active: 0,
            bottomMenus:[
                {
                    value:'商城',
                    icon:'shop',
                    path:'index'
                },
                {
                    value:'消息',
                    icon:'chat',
                    path:'chat'
                },
                {
                    value:'记录',
                    icon:'records',
                    path:'records'
                },
                {
                    value:'我的',
                    icon:'gold-coin',
                    path:'gold'
                },
            ]
        }
    }
}
</script>
<style>
.van-tabbar-item__text a{
    color:#666;
}
.van-tabbar-item--active .van-tabbar-item__text a{
    color:rgb(51, 136, 255);
}
</style>
