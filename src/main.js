  
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import list from './components/list' ;
import newP from './components/newP' ;
import home from './components/home' ;
import edit from './components/edit' ;


Vue.use(VueRouter);


const routes = [
  {path:'/list',component:list},
  {path:'/',component:home},
  {path:'/edit/:ID',component:edit},
  {path:'/new',component:newP},
];

const router = new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

