import {ADD_PRODUCT, ADD_CARTS} from './mutations_stype'
export default{
  addCart(context, carts){
    //为了严谨使用Promise 在组件中会获取res
    return new Promise((resolve)=>{
      //每一次查找 上一次的商品id是否和这一次的相等 
      let oldProduct = context.state.cartList.find(item => item.goodsId===carts.goodsId)
      //同一个商品 数量加1
      if(oldProduct){
        // oldProduct.count +=1 //因为被赋值为对象 所以可以直接再添加一个keys
        context.commit(ADD_PRODUCT,oldProduct)
        resolve('商品数量加1.');
      }else{
        carts.count = 1;
        context.commit(ADD_CARTS,carts)
        resolve('商品添加成功.')
      }
    })
  }
}