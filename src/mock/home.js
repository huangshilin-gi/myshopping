
const Mock = require('mockjs')
Mock.mock('http://123.123.65.80:8080/api/v1/home', 'get', {
   resp:{
    swipe_banner:[
      'http://img1.imgtn.bdimg.com/it/u=3884109515,675806076&fm=26&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=3725322447,2300274263&fm=26&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=598022436,2935574117&fm=26&gp=0.jpg'
    ],
    home_conter_icon:[
      {
        image:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2369315118,2916638455&fm=26&gp=0.jpg',
        title:'简单'
      },
      {
        image:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4008041665,2703892197&fm=26&gp=0.jpg',
        title:'完美'
      },
      {
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3905379348,3237471713&fm=26&gp=0.jpg',
        title:'随意'
      },
      {
        image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2858622537,1158182411&fm=26&gp=0.jpg',
        title:'瞎搞'
      } 
    ],
  }
})
Mock.mock('http://123.123.65.80:8080/api/v1/home_Tab','post',option=>{
  const {type,page} = JSON.parse(option.body)
  let List=[]
  if(type==='pop'){
    switch(page){
      case 1:
        List=[
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'999.00'
          },
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'666.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'300.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'198.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'888.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'480.00'
          },
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'1200.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'130.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'988.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'222.00'
          }
        ]
        break;
      case 2:
        List=[
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'988.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'222.00'
          },
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'1200.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'130.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'999.00'
          },
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'666.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'300.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'198.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'888.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'610.00'
          }
        ]
        break;
      case 3:
        List=[
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'1200.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'130.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'988.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'222.00'
          }
        ]
        break;
      default:
        List=[0]
    }
  }else if(type==='news'){
    switch(page){
      case 1:
        List=[
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'988.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'222.00'
          },
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'1200.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'130.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'999.00'
          },
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'666.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'300.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'198.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'888.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'610.00'
          }
        ]
        break;
      case 2:
        List=[
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'1200.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'130.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'999.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'888.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'610.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'988.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'222.00'
          },
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'1200.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'130.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'999.00'
          }
        ]
        break;
      case 3:
        List=[
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'1200.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'130.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'988.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'222.00'
          }
        ]
        break;
      default:
        List=[0]
    }
  }else if(type==='sell'){
    switch(page){
      case 1:
        List=[
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'1200.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'130.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'999.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'888.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'610.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'988.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'222.00'
          },
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'1200.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'130.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'999.00'
          }
        ]
        break;
      case 2:
        List=[
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'999.00'
          },
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'666.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'300.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'198.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'888.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'480.00'
          },
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'1200.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'130.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'988.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'222.00'
          }
        ]
        break;
      case 3:
        List=[
          {
            goodsId:2,
            image:'http://img2.imgtn.bdimg.com/it/u=2235488763,3194061393&fm=26&gp=0.jpg',
            item_title:'2020夏季最新款男士短袖',
            item_money:'1200.00'
          },
          {
            goodsId:3,
            image:'http://img3.imgtn.bdimg.com/it/u=1673244080,1492801357&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'130.00'
          },
          {
            goodsId:4,
            image:'http://img2.imgtn.bdimg.com/it/u=2537874903,3789623739&fm=26&gp=0.jpg',
            item_title:'2020最新款2020最新款',
            item_money:'988.00'
          },
          {
            goodsId:1,
            image:'http://img3.imgtn.bdimg.com/it/u=1984768009,2048452274&fm=26&gp=0.jpg',
            item_title:'2020春季最新款男士西装',
            item_money:'222.00'
          }
        ]
        break;
      default:
        List=[0]
    }
  }
  return List
})

//模拟的假数据内容