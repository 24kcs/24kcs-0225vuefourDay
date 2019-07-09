/**
 *
 * 复习:
 * 组件之间通信:
 * 1.props----->首先通过组件之间的强制数据绑定的方式,在需要该数据的组件中,使用props进行配置
 * props:['数据的名字']
 * props:{
 *  数据的名字:类型
 * }
 * props:{
 *  数据名字:{
 *    type:类型
 *    required:true 
 *  },
 * }
 * 2.插槽-slot---就是占位,在占位的位置,显示想要显示的内容
 * 首先要声明插槽:
 * <标签  slot="名字">
 * <标签  slot="名字">
 * 另一个组件中
 * <slot name="名字的值">
 * 3.自定义事件
 * 直接在数据前加@------v-on----在某个html标签中的某个属性前加了一个v-on的方式
 * 例子: <p v-on:click="回调函数"></p>
 * <p v-on:addPerson="回调函数"></p>
 * <p @addPerson="回调函数"></p>
 * 在使用到该自定义事件的组件中----使用this.$emit()分发事件,就会触发addPerson的事件
 * 
 * 4.消息订阅----兄弟组件之间的通信----先下载,引入,使用---
 * PubSub.subscribe(消息名字,回调函数)订阅消息
 * PubSub.publish()发布消息----异步发布
 * PubSub.publishSync()发布消息---同步发布
 * 5.事件总线-------
 * 首先在Vue.prototype中有了$on和$emit和$off三个方法----Vue的实例对象中这些方法
 * Vue的实例对象是所有组件的父级对象
 * vm <-----App.vue<--------TodoList.vue<------TodoItem.vue
 * 兄弟组件之间的通信
 * 在Vue.prototype上面添加一个属性---->值:new Vue()
 * Vue.prototype.$bus=new Vue()
 * Vue.prototype.$publicEvent=new Vue()
 * 
 * 自定义事件总线,和自定义消息订阅
 * 
 *
 *
 *
 *
 */