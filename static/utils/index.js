/*
 * @Author: 杜康
 * @Date: 2021-07-28 11:12:37
 * @LastEditTime: 2021-07-28 15:39:32
 * @LastEditors: Please set LastEditors
 * @Description: 工具类
 * @FilePath: /v-regions/static/json/utils.js
 */

/**
 * @description: 判断是否含有 children 且是否为空
 * @param {*}
 * @return {*}
 */
export const hasChildren = item => {
    if (item.hasOwnProperty("children") && item.children.length > 0) {
        return true;
    }
    return false;
}

/**
 * @description: 递归增加“全部”
 * @param {*}
 * @return {*}
 */
export const limitedRegion = (arrs, limit = { code: "", name: "全部"}) => {
    if (!arrs) {
        return
    } else {
        arrs.unshift(limit);
    }
    for (let i = 0; i < arrs.length; i++) {
        if (hasChildren(arrs[i])) {
            limitedRegion(arrs[i].children, limit);
        } else if (arrs[i].name === limit.name){
            continue;
        } else {
            break;
        }
    }
    return arrs;
}