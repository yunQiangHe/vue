import request from '@/utils/request'

var md5 = require('md5');

export function loginByUsername(username, password) {
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
export function loginByUsername2(user_id) {
    const data = {
        user_id:user_id
    }
    return request({
        url: '/user/detail',
        method: 'post',
        data
    })
}