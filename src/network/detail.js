import {request} from './request'

export function getDetailType(goodid){
  return request({
    method:'post',
    url:'/api/v1/detailitem',
    data:{
      goodid
    }
  })
}

export function getDetailList(goodid){
  return request({
    method:'post',
    url:'/api/v1/detailList',
    data:{
      goodid
    }
  })
}