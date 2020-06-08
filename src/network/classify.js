import {request} from './request'

export function getTreeSelect(){
  return request({
    url:'/api/v1/treeSelect'
  })
}