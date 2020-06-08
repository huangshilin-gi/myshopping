import axios from 'axios'

export function request(config){
  //创建axios实例
  const instance = axios.create({
    baseURL:'http://123.123.65.80:8080'
  })

  //发送网络请求
  return instance(config)
}