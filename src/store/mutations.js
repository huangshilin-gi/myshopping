import {ADD_PRODUCT, ADD_CARTS} from './mutations_stype'
export default {
  //mutations中唯一的目的就是修改state中的状态
  //mutations中的每一个方法，尽可能完成的事情比较单一
  [ADD_PRODUCT](state, carts){
    carts.count += 1;
  },
  [ADD_CARTS](state,carts){
    state.cartList.push(carts)
  }
}