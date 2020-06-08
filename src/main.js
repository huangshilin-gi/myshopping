import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { 
    Swipe, SwipeItem, Lazyload, 
    Loading, Toast ,SwipeCell,
    Card, Button, SubmitBar,
    Checkbox, CheckboxGroup,
    TreeSelect,Cell, CellGroup,
    Form} from 'vant'
import 'vant/lib/index.css';
import FastClick from 'fastclick' //300ms延迟优化

require('./mock');

Vue
.use(Swipe)
.use(SwipeItem)
.use(Lazyload, {
  lazyComponent: true,
})
.use(Loading)
.use(Toast)
.use(SwipeCell)
.use(Card)
.use(Button)
.use(SubmitBar)
.use(Checkbox)
.use(CheckboxGroup)
.use(TreeSelect)
.use(Cell)
.use(CellGroup)
.use(Form);
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
