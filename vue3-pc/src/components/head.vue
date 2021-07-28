<template>
  <div class="header">
    <ul>
      <!-- 
      使用 router-link 组件来导航.  
      通过传入 `to` 属性指定链接.  
      <router-link> 默认会被渲染成一个 `<a>` 标签 通过tag定义标签 
      声明式导航
      -->
      <router-link active-class="active" tag="li" to="/home">首页</router-link>

      <router-link active-class="active" tag="li" to="/about"
        >关于集团</router-link
      >
      <router-link active-class="active" tag="li" to="/news"
        >新闻动态</router-link
      >
      <router-link active-class="active" tag="li" to="/form"
        >antd of vue</router-link
      >
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Head",
});
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  line-height: 80px;
  ul {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    a {
      flex: 1;
      list-style: none;
      cursor: pointer;
      text-align: center;
    }
    .active {
      background: cadetblue;
      color: #ffffff;
    }
  }
}
</style>
