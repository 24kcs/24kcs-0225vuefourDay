<template>
  <h2 v-if="firstView">请输入搜索内容...</h2>
  <h2 v-else-if="loading">正在加载中....</h2>
  <h2 v-else-if="errorMsg">错误消息:{{errorMsg}}</h2>
  <div class="row" v-else>
    <div class="card" v-for="user in users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      firstView: true, //第一次展示页面的状态数据,true:显示该界面,false,不显示
      loading: false, //true,显示正在加载,false,不显示
      errorMsg: "", //如果有数据,说明此事报错了,没有数据,没有报错
      users: [] //存储获取到的用户信息,如果有数据,就展示,如果没有数据,就是上面的三种情况的其中一种
    };
  },
  mounted() {
    //绑定事件
    this.$bus.$on("search", async searchName => {
      //修改当前的data中的数据的状态
      this.firstView = false; //请输入搜索的这个不显示
      this.loading = true; //显示的是正在加载...
      try {
        const url = `https://api.github.com/search/users`;
        //传入地址后,还要对后面的参数进行配置
        const response = await axios.get(url, {
          params: {
            q: searchName
          }
        });
        //显示获取到的数据
        const result = response.data.items;
        //遍历数据
        const users = result.map(item => ({
          login: item.login,
          avatar_url: item.avatar_url,
          html_url: item.html_url
        }));
        //更新数据=========原因:明天讲vuex的时候抽取数据状态
        this.users = users;
        this.loading = false;
      } catch (error) {
        //坑
        this.loading = false;
        this.errorMsg = error.message;
      }
    });
  }
};
</script>
<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>