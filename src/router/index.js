import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Classify = () => import('../views/classify/Classify')
const Personage = () => import('../views/personage/Personage')
const Detail = () => import('../views/detail/Detail')
const Login = () => import('../views/login/Login')
Vue.use(VueRouter)

const routes = [
	{
		path:'',
		redirect:'/Home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/cart',
		component:Cart
	},
	{
		path:'/classify',
		component:Classify
	},
	{
		path:'/personage',
		component:Personage
  },
  {
    path:'/detail/:goodsId',
    component:Detail
  },
  {
    path:'/login',
    component:Login
  }
]
const router = new VueRouter({
	routes,
	mode:'history'
})

export default router