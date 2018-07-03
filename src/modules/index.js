import Vuex from 'vuex';
import Vue from 'vue';

// 员工模块数据仓库配置
import shopModules from './shopModules';

Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        shopModules
    }
})
