module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {   //一般以iphone为基准
      viewportWidth: 375,  //视窗的宽度
      viewportHeight:667,  //视窗的高度
      unitPrecision:5,     //指定 'px' 转换为视窗单位值的小数位数（很多适合无法整除）保留5位小数
      viewportUnit: 'vw',  //指定需要转换成的视窗单位(建议使用vw)
      selectorBlackList:['tabbar','tabbar-item'], //指定不需要转换的类
      minPixelValue:1,     //小于或等于'px' 不转换为视窗单位
      mediaQuery: false    //允许在媒体查询中转换'px'
    }
  }
}