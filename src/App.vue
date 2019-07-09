<template>
  <div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary" @click="showMsg" style="width:100%">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  methods: {
    showMsg() {
      //Toast('提示信息');
      Toast({
        message: "你看我帅不",
        position: "bottom",
        duration: 3000
      });
    }
  }
};
</script>
<style scoped>
</style>