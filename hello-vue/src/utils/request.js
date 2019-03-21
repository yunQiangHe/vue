/*
 * @Author: Heyunqiang 
 * @Date: 2019-03-21 10:19:02 
 * @Last Modified by: Heyunqiang
 * @Last Modified time: 2019-03-21 11:36:09
 */
// 封装了全局 request拦截器、response拦截器、统一的错误处理、统一做了超时处理、baseURL设置等

import axios from 'axios'
import {
    Message
} from 'element-ui'

// create an axios instance 创建实例
const service = axios.create({
    baseURL: "http://car.hileader.com/apis",
    timeout: 5000
})

// request interceptor 添加请求拦截器
// 在请求或响应被 then 或 catch 处理前拦截它们。
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        // if(StorageEvent.getters.token){
        // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
        //     config.headers["X-Token"] = getToken()
        // }
        return config
    },
    error => {
        // 对请求错误做些什么
        console.log(error); // for debug
        Promise.reject(error);
    }
)

service.interceptors.response.use(
    // 对响应数据做点什么
    response => {
        const res = response.data
        if (res.status != 200) {
            Message({
                message: res.message,
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    // 对响应错误做点什么
    error => {
        console.log("错误---" + error);
        Message({
            message: error.message,
            type: "error",
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service