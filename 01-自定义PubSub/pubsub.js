/**
 * 
 * 实现消息订阅的功能
 * 
 * PubSub对象
 * msg:消息的名字-------事件的名字
 * subscriber:回调函数
 * data:数据----发布消息的时候传递的数据
 * token:标识----唯一的
 * .subscribe(msg,subscriber)消息订阅的方法
 * .publish(msg,data)异步发布消息的方法
 * .publishSync(msg,data)同步发布消息的方法
 * .unsubscribe(token)取消消息订阅
 * 
 *  容器:{add:{id-0:f1,id-1:f2}} 
 * 
 * 
 * subscribe('add',f1)
 * subscribe('add',f2)
 * publish('add',data)
 * 
 * 
 * 
 */

(function (window) {
  //定义消息订阅的对象
  const PubSub = {}
  //定义一个存储消息名字及对应回调函数的大的容器---对象
  let subscriberContainer = {}
  //定义一个标识
  let id = 0

  //消息订阅的方法
  //对象.subscribe('add',f1)
  //容器:{add:{id-1:f1,id-2:f2}} 
  PubSub.subscribe = function (msg, subscriber) {
    //根据消息的名字获取对应的对象容器
    let subscribers = subscriberContainer[msg]
    //判断这个容器对象是否存在
    if (!subscribers) {
      subscribers = {}
      //此时大的容器已经有了一对的数据(add就是键,subscribers就是对应的值)
      subscriberContainer[msg] = subscribers
    }
    //创建标识
    const token = 'id-' + ++id
    //根据标识来存储对应的回调函数
    subscribers[token] = subscriber
    //返回token
    return token
  }

  //消息异步发布的方法
  //publish('add','您好')
  //容器:{add:{id-1:f1,id-2:f2}} 
  PubSub.publish = function (msg, data) {
    //根据消息名字获取对应的回调函数容器---对象
    let subscribers = subscriberContainer[msg]
    if (subscribers) {
      setTimeout(() => {
        //判断该容器是否存在
        Object.values(subscribers).forEach(subscriber => {
          subscriber(data)
        })
      }, 1000);
    }
  }

  //消息同步发布的方法
  PubSub.publishSync = function (msg,data) {
    //根据消息名字获取对应的回调函数容器---对象
    let subscribers = subscriberContainer[msg]
    if (subscribers) {
      //判断该容器是否存在
      Object.values(subscribers).forEach(subscriber => {
        subscriber(data)
      })
    }
  }

  //取消消息订阅:'id-1','add',''
  PubSub.unsubscribe = function (token) {
    //如果没有标识
    if (token === undefined) {
      //全部取消
      subscriberContainer = {}
    } else if (token.indexOf('id-') === 0) {
      //此时是标识
      //容器:{add:{id-1:f1,id-2:f2}} 

      let subscribers = Object.values(subscriberContainer).find(subscribers => {
        return subscribers.hasOwnProperty(token)
      })
      //修改一下代码
      subscribers && delete subscribers[token]

    } else {
      //传入的是消息的名字
      //容器:{add:{id-1:f1,id-2:f2}} 
      delete subscriberContainer[token]
    }
  }


  //暴露给window
  window.PubSub = PubSub
})(window)