/******************************公用函数*******************************/
import { Toast } from 'vant';
// 服务器返回状态处理,params为服务器返回的参数
export const handleCallBack = (params) => {
    // 服务器没有返回数据
    if (!params.statusText) {
        if (parseInt(params.status) === 401) {
            Toast.fail({ message: '您还未登录，请先登录'});
            // delCookie();
            // window.location.href = getLoginURL();
            return false;
        }
        if (parseInt(params.status) === 403) {
            Toast.fail({ message: '没有访问权限@!'});
            window.location.href = "/#/index";
            window.location.reload();
            return false;
        }
        if (parseInt(params.status) === 400) {
            Toast.fail({ message: '请求参数错误!'});
            return false;
        }
        Toast.fail({ message: '服务器通信失败！code：'+params.status});
        return false;
    }

    // 返回正确状态
    if (params.data.result.toLowerCase() === 'ok' || params.data.result.toLowerCase() === 'timeout') {
        return true;
    }
    else{
        Toast.fail({ message: params.data.message});
        return false;
    }
}

// 删除cookie
// export const delCookie = (name='YZSESSIONID') => {
//     document.cookie= name + "=" + getCookie(name) + "; expires=Thu, 26 Feb 1970 11:50:25 GMT; domain="+getCookieDomain()+"; path=/";
// }