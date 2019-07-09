
//引入Vue
import Vue from 'vue'
//引入App.vue
import App from './App.vue'

import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
//实例化Vue,并做相关的配置或者是注册插件
new Vue({
  el: '#app',
  components: {
    App
  },
  //创建模版
  template: '<App/>',
})