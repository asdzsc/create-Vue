<template>
  <div id="app">
    <heade />
    <router-view class="content" />
    <!-- 我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。 动态路由是单个路由对应一个组件 -->
    <!-- 一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件 命名视图是单个路由对应多个组件 -->
    <router-view name="other2" class="content" />
    <foot />
  </div>
</template>

<script>
import heade from "@/components/head";
import foot from "@/components/foot";
// import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  name: "App",
  components: {
    heade,
    foot,
  },
  data() {
    return {
      // locale: zhCN,
    };
  },
  // 监听路由的变化 回到顶部
  watch: {
    $route: {
      handler() {
        try {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } catch (e) {
          console.log(e);
        }
      },
      deep: true,
    },
    // $route: () => {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 1100px;
  margin: 0 auto;
}
</style>
