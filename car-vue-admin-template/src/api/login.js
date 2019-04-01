import request from '@/utils/request'

var md5 = require('md5');

// 用户登录接口
export function login(username, password) {
    let temp = md5(md5(password))
    const data = {
        username: username,
        password: temp
    }
    return request({
        url: '/login/index',
        method: 'post',
        data
    })

}

// 获取用户信息详情
export function getUserInfo(user_id) {
    const data = {
        user_id
    }
    return request({
        url: '/user/detail',
        method: 'post',
        data
    })
}

// 用户退出接口
export function logOut() {
    return request({
        url: 'login/logout',
        method: 'post'
    })
}