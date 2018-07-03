import * as mutationTypes from './mutationTypes'
export default {
    [mutationTypes.SHOP_LIST_DATA] (state, payload){
        state.shopList= payload;
    },
}
