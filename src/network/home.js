import {request} from "./request";

//请求home动态数据的接口
export function getHomeMultidata(){
  return request({
    url:'/api/v1/home'
  })
}

//请求home的选项卡接口
export function getHomeTabControl(type,page){
  return request({
    method:'post',
    url:'/api/v1/home_Tab',
    data:{
      type,
      page
    }
  })
}