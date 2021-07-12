<template>
  <div class="header">
    <ul>
      <!-- 编程式导航 -->

      <!-- $router.replace('/')  
          $router.replace 替换当前路由路由栈会被清空 回退页面时会找不到之前的路由页面
          $router.push 则保存路由到路由栈 前进后退的时候 页面都有保存      
      -->
      <!-- <li @click="$router.push('/')">首页</li>
      <li @click="$router.push('/about')">关于集团</li>
      <li @click="$router.push('/news')">新闻动态</li>
      <li @click="$router.push('/form')">antd of vue</li>
      <li @click="$router.push('/element')">element of vue</li> -->

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
      <router-link active-class="active" tag="li" to="/element"
        >element of vue</router-link
      >
      <router-link active-class="active" tag="li" to="/others"
        >命名视图</router-link
      >
      <router-link active-class="active" tag="li" to="/vuex">vuex</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
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
    li {
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