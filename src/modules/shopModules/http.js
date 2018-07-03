import fetch from '@/common/fetch';
import {baseUrl} from '@/common/const'

//1. 获取商品列表
export const getShopList= ()  => {
    return fetch.get(baseUrl + '/35252/shoplist')
};