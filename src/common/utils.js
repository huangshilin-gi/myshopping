//防抖动
export function debounce(fn,play){
  let timer = null;
  return function (...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this,args)
    },play)
  }
}