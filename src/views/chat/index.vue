<template>
    <div>
        消息页面
        {{shopList.aaa}}
    </div>
</template>

<script>
import * as https from '@/modules/shopModules/http'
import * as mutationTypes from '@/modules/shopModules/mutationTypes'
// import * as actionTypes from '@/modules/shopModules/actionTypes'
import * as common from '@/common/common';

const { handleCallBack } = common;
export default {
    computed: {
        shopList(){
            return this.$store.state.shopModules.shopList
        }
    },
    mounted() {
        https.getShopList()
                .then(res =>{
                    if(handleCallBack(res)){
                        this.$store.commit(mutationTypes.SHOP_LIST_DATA, res.data.data_list);
                    }
                })
        // this.$store.dispatch(actionTypes.SHOP_LIST_DATA,{});
        console.log(this.$store.state.shopModules.shopList)
    }
};
</script>